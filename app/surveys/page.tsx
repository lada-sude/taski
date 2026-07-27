import { redirect } from "next/navigation";
import Link from "next/link";
import crypto from "crypto";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export default async function SurveysPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const secureHash = crypto
    .createHash("md5")
    .update(`${user.id}-${process.env.CPX_SECURE_HASH}`)
    .digest("hex");

  const surveyUrl = `https://offers.cpx-research.com/index.php?app_id=${
    process.env.CPX_APP_ID
  }&ext_user_id=${encodeURIComponent(
    user.id
  )}&secure_hash=${secureHash}&username=${encodeURIComponent(
    profile?.full_name ?? ""
  )}&email=${encodeURIComponent(profile?.email ?? "")}`;

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_right,_rgba(16,185,129,0.16),_transparent_25%),linear-gradient(to_bottom,_#f8fafc,_#eef2ff)] px-4 py-8">
        <div className="mx-auto max-w-6xl">

          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-slate-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Dashboard
            </Link>

            <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
              Secure Surveys
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

            <h1 className="text-3xl font-bold text-slate-900">
              Earn Rewards
            </h1>

            <p className="mt-2 text-slate-600">
              Complete surveys from our verified partners. Rewards are credited
              automatically after successful verification.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">

              <iframe
                src={surveyUrl}
                title="CPX Research Surveys"
                width="100%"
                height="1800"
                className="w-full border-0"
                loading="lazy"
              />

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}