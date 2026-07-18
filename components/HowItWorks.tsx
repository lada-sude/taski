const steps = [
  {
    number: "01",
    title: "Create an Account",
    description:
      "Users create a free account and access available digital opportunities.",
  },
  {
    number: "02",
    title: "Complete Verified Tasks",
    description:
      "Users participate in surveys, app testing, and promotional offers provided by our partners.",
  },
  {
    number: "03",
    title: "Receive Verified Rewards",
    description:
      "Completed activities are verified through partner tracking systems before rewards are processed.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-gray-50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold text-blue-600">
            HOW IT WORKS
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Simple, transparent, and verified
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Taski connects users with verified digital opportunities
            while maintaining transparency throughout the process.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-gray-200 bg-white p-8"
            >
              <span className="text-sm font-bold text-blue-600">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}