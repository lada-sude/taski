import { redirect } from "next/navigation";
import Link from "next/link";
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

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_right,_rgba(16,185,129,0.16),_transparent_25%),linear-gradient(to_bottom,_#f8fafc,_#eef2ff)] px-4 py-8">
        <div className="mx-auto max-w-6xl">

          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-100"
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
              Complete surveys from our verified partners and earn rewards after successful verification.
            </p>

            <div className="mt-8 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-16 text-center">

              <h2 className="text-xl font-semibold">
                CPX Offerwall
              </h2>

              <p className="mt-3 text-slate-500">
                Your survey wall will appear here after we complete the CPX integration.
              </p>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}