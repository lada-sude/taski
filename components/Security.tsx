"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Fingerprint,
  ShieldAlert,
  ShieldCheck,
  Telescope,
} from "lucide-react";

const policies = [
  {
    title: "Anti-VPN policy",
    description:
      "Taski maintains strict policies against non-genuine traffic patterns and suspicious network behavior that can distort reward integrity.",
    icon: ShieldAlert,
  },
  {
    title: "Fraud detection",
    description:
      "Automated abuse, duplicate actions, and manipulated completion patterns are monitored through a range of integrity controls.",
    icon: Activity,
  },
  {
    title: "Secure reward tracking",
    description:
      "Reward progress is designed to remain visible, auditable, and understandable for users completing legitimate tasks.",
    icon: Telescope,
  },
  {
    title: "Server-to-server verification",
    description:
      "Completion records and partner signals are validated through trusted tracking systems before rewards are processed.",
    icon: Fingerprint,
  },
  {
    title: "User account protection",
    description:
      "Account safety measures help protect genuine users from misuse, account abuse, and preventable fraud exposure.",
    icon: ShieldCheck,
  },
];

export default function Security() {
  return (
    <section id="security" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">Security & compliance</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Trust is part of the product experience.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Taski is designed to support genuine participation, reduce abuse, and preserve a professional experience for users and partners in a highly regulated digital environment.
          </p>

          <div className="mt-6 rounded-[1.25rem] border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-950">Integrity-first standards</p>
                <p className="text-sm text-slate-600">Responsible participation and transparent reward handling remain central.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {policies.map((policy, index) => {
            const Icon = policy.icon;

            return (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{policy.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{policy.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}