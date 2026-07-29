import { NextRequest, NextResponse } from "next/server";
import md5 from "md5";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const status = searchParams.get("status");
  const transId = searchParams.get("trans_id");
  const userId = searchParams.get("user_id");
  const amountUsd = searchParams.get("amount_usd");
  const secureHash = searchParams.get("hash");

  if (!status || !transId || !userId || !amountUsd || !secureHash) {
    return NextResponse.json(
      { error: "Missing parameters" },
      { status: 400 }
    );
  }

  const expectedHash = md5(
    `${transId}-${process.env.CPX_SECURE_HASH}`
  );

  if (secureHash !== expectedHash) {
    return NextResponse.json(
      { error: "Invalid hash" },
      { status: 403 }
    );
  }

  const { data: existingTransaction } = await supabaseAdmin
    .from("transactions")
    .select("id")
    .eq("transaction_id", transId)
    .single();

  if (existingTransaction) {
    return NextResponse.json({
      message: "Transaction already processed",
    });
  }

  const { error } = await supabaseAdmin
    .from("transactions")
    .insert({
      user_id: userId,
      provider: "CPX",
      transaction_id: transId,
      reward: Number(amountUsd),
      status: status === "1" ? "completed" : "cancelled",
    });

  if (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Database error" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
  });
}