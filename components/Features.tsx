"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  CircleDollarSign,
  ClipboardCheck,
  ShieldCheck,
  Smartphone,
  TimerReset,
} from "lucide-react";

const features = [
  {
    title: "Verified Surveys",
    icon: ClipboardCheck,
    description:
      "Discover task opportunities from trusted research and advertising partners with a clear verification path.",
  },
  {
    title: "Offerwall Rewards",
    icon: CircleDollarSign,
    description:
      "Track completed offers and reward status through a clean, transparent user experience.",
  },
  {
    title: "Secure Payments",
    icon: BadgeCheck,
    description:
      "Reward processing is presented with a strong emphasis on accountability, review, and user confidence.",
  },
  {
    title: "Fraud Protection",
    icon: ShieldCheck,
    description:
      "Taski emphasizes anti-abuse controls, genuine participation, and platform integrity across the network.",
  },
  {
    title: "Fast Tracking",
    icon: TimerReset,
    description:
      "Users can see where their activity stands in the verification journey without unnecessary complexity.",
  },
  {
    title: "Mobile Friendly",
    icon: Smartphone,
    description:
      "The experience is designed to feel polished and responsive on the devices users depend on most.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">Why Taski</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Built around clarity, security, and reward confidence.
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          From discovery to completion, the experience is designed to feel professional, trustworthy, and easy to understand.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group rounded-[1.5rem] border border-slate-200 bg-white/90 p-6 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition group-hover:bg-sky-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}