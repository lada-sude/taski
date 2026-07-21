"use client";

const questions = [
  {
    question: "What is Taski?",
    answer:
      "Taski is a professional rewards platform focused on verified surveys, market research, and offerwall opportunities from trusted partners.",
  },
  {
    question: "Is registration free?",
    answer:
      "Yes. The platform is designed to be accessible without any entry fee or paid activation requirement.",
  },
  {
    question: "How are rewards verified?",
    answer:
      "Completed activities are reviewed through partner tracking systems and reward processing rules before a reward is completed.",
  },
  {
    question: "When do rewards become available?",
    answer:
      "Reward availability depends on successful offer completion, validation timing, and settlement schedules from participating partners.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50/90 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">FAQ</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Questions users often ask up front.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {questions.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-200"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 marker:hidden">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}