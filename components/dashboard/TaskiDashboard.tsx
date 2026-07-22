"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CircleDollarSign,
  Clock3,
  HandCoins,
  LogOut,
  ShieldCheck,
  Sparkles,
  Target,
  UserCircle2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const activity = [
  { title: "Verified survey completed", detail: "Market research · 15 min", time: "3 mins ago" },
  { title: "Offerwall task approved", detail: "Partner reward · 1 credit", time: "32 mins ago" },
  { title: "Payment batch verified", detail: "Payout processing · secure", time: "Yesterday" },
];

export default function TaskiDashboard({
  user,
  profile,
}: {
  user: any;
  profile: any;
}) {
  const router = useRouter();
  const supabase = createClient();

  const fullName =
    user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Taski Member";
 const avatarUrl =
  profile?.avatar_url ||
  user?.user_metadata?.avatar_url ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=0f172a&color=fff`;

    const stats = [
  {
    label: "Pending earnings",
    value: `$${Number(profile?.pending_balance ?? 0).toFixed(2)}`,
    icon: CircleDollarSign,
    accent: "from-emerald-500/15 to-transparent",
  },
  {
    label: "Available balance",
    value: `$${Number(profile?.available_balance ?? 0).toFixed(2)}`,
    icon: HandCoins,
    accent: "from-sky-500/15 to-transparent",
  },
  {
    label: "Total earnings",
    value: `$${Number(profile?.total_earned ?? 0).toFixed(2)}`,
    icon: Sparkles,
    accent: "from-violet-500/15 to-transparent",
  },
  {
    label: "Surveys completed",
    value: String(profile?.surveys_completed ?? 0),
    icon: Target,
    accent: "from-amber-500/15 to-transparent",
  },
];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-900">
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_right,_rgba(16,185,129,0.16),_transparent_25%),linear-gradient(to_bottom,_#f8fafc,_#eef2ff)] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl"
          >
            <div className="flex flex-col gap-6 border-b border-slate-200/70 p-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl shadow-sm">
  <img
    src={avatarUrl}
    alt={fullName}
    className="h-full w-full object-cover"
  />
</div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Welcome back</p>
                  <h1 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    {fullName}
                  </h1>
                  <p className="text-sm text-slate-500">{user?.email}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
  type="button"
  onClick={() => router.push("/surveys")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Start Surveys
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>

            <div className="grid gap-4 p-6 lg:grid-cols-[1.4fr_0.9fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                      className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
                      <div className="relative flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm text-slate-500">{item.label}</p>
                          <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                            {item.value}
                          </p>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              <motion.aside
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.12 }}
                className="rounded-2xl border border-slate-200/80 bg-slate-950 p-5 text-white shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <ShieldCheck className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">Security status</p>
                    <p className="font-semibold">Protected account</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    Anti-VPN and fraud screening enabled
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" />
                    Server-to-server reward verification
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-violet-300" />
                    Secure payment and account tracking
                  </li>
                </ul>
              </motion.aside>
            </div>

            <div className="grid gap-4 border-t border-slate-200/70 p-6 lg:grid-cols-[1.1fr_0.9fr]">
              <section className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Recent activity</p>
                    <h2 className="text-lg font-semibold text-slate-950">Latest updates</h2>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                    <Activity className="h-3.5 w-3.5" />
                    Live
                  </div>
                </div>

                <div className="space-y-3">
                  {activity.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between gap-4 rounded-xl bg-white px-4 py-3 shadow-sm"
                    >
                      <div>
                        <p className="font-medium text-slate-900">{item.title}</p>
                        <p className="text-sm text-slate-500">{item.detail}</p>
                      </div>
                      <div className="flex items-center gap-1 whitespace-nowrap text-xs font-medium text-slate-500">
                        <Clock3 className="h-3.5 w-3.5" />
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200/70 bg-white p-4">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Profile</p>
                    <h2 className="text-lg font-semibold text-slate-950">Google account</h2>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <img
                    src={avatarUrl}
                    alt="Profile avatar"
                    className="h-16 w-16 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <div>
                    <p className="text-base font-semibold text-slate-950">{fullName}</p>
                    <p className="text-sm text-slate-500">Verified with Google</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Rewards depend on successful offer completion and verification. Taski keeps your profile protected with secure account tracking and fraud detection.
                </p>
              </section>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
