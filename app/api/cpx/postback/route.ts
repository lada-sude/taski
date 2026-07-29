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
  
const type = searchParams.get("type");

  console.log("CPX Postback Received:", {
  status,
  transId,
  userId,
  amountUsd,
  secureHash,
});

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

 // Credit user profile after successful CPX completion
if (status === "1" && type === "complete") {
  const { data: profile, error: profileError } = await supabaseAdmin
    .from("profiles")
    .select(
      "pending_balance, total_earned, surveys_completed"
    )
    .eq("id", userId)
    .single();

  if (profileError) {
    console.error(profileError);

    return NextResponse.json(
      { error: "Profile lookup failed" },
      { status: 500 }
    );
  }

  const reward = Number(amountUsd);

  const { error: updateError } = await supabaseAdmin
    .from("profiles")
    .update({
      pending_balance:
        Number(profile.pending_balance || 0) + reward,

      total_earned:
        Number(profile.total_earned || 0) + reward,

      surveys_completed:
        Number(profile.surveys_completed || 0) + 1,
    })
    .eq("id", userId);

  if (updateError) {
    console.error(updateError);

    return NextResponse.json(
      { error: "Profile update failed" },
      { status: 500 }
    );
  }
}

return NextResponse.json({
  success: true,
});
}