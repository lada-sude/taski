const policies = [
  {
    title: "Real User Participation",
    description:
      "Taski is designed for genuine users completing legitimate digital opportunities. Automated activity and artificial traffic are not permitted.",
  },
  {
    title: "Fair Usage Policy",
    description:
      "Multiple accounts, bots, and attempts to manipulate reward systems may result in account restrictions or removal.",
  },
  {
    title: "Partner Verification",
    description:
      "Reward activities are verified through trusted partner tracking systems before they are credited.",
  },
];

export default function Security() {
  return (
    <section
      id="security"
      className="mx-auto max-w-7xl px-6 py-16 md:py-24"
    >
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-semibold text-blue-600">
            SECURITY & TRUST
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Built with platform integrity in mind
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Maintaining high-quality traffic and protecting our
            partners is a core part of Taski's mission. We encourage
            responsible participation and transparent reward tracking.
          </p>
        </div>

        <div className="space-y-5">
          {policies.map((policy) => (
            <div
              key={policy.title}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <h3 className="text-xl font-semibold">
                {policy.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {policy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}