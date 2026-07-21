"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create a secure profile",
    description:
      "Users begin with a clear, guided account setup flow that keeps the experience easy to navigate and trustworthy.",
  },
  {
    number: "02",
    title: "Complete verified tasks",
    description:
      "Choose from surveys, app testing, and offerwall opportunities that are designed to be transparent and measurable.",
  },
  {
    number: "03",
    title: "Track reward status",
    description:
      "Completed activities move through partner verification and reward processing with clear visibility at every stage.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-900/95 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">How it works</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            A smooth path from participation to reward verification.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
            The flow is intentionally simple: discover, complete, verify, and track. Every stage keeps the user informed and the platform aligned to trust-first principles.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/20"
            >
              <span className="inline-flex rounded-full bg-sky-400/15 px-3 py-1 text-xs font-semibold tracking-[0.28em] text-sky-200">
                {step.number}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}