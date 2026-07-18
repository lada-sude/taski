const questions = [
  {
    question: "What is Taski?",
    answer:
      "Taski is a platform designed to connect users with verified digital opportunities such as surveys, app testing, and promotional offers from trusted partners.",
  },
  {
    question: "Is registration free?",
    answer:
      "Yes. Taski is designed with no entry fees or paid activation requirements.",
  },
  {
    question: "How are rewards verified?",
    answer:
      "Completed activities are verified through partner tracking systems before rewards are processed.",
  },
  {
    question: "When will rewards become available?",
    answer:
      "Reward availability depends on successful verification and settlement schedules from our partners.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-gray-50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="font-semibold text-blue-600">
            FAQ
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 space-y-5">
          {questions.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold">
                {item.question}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}