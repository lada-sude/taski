import {
  ShieldCheck,
  ClipboardCheck,
  Wallet,
} from "lucide-react";

const features = [
  {
    title: "Verified Offers",
    icon: ClipboardCheck,
    description:
      "Access digital tasks, surveys, and promotional offers from trusted advertising partners.",
  },
  {
    title: "Transparent Rewards",
    icon: Wallet,
    description:
      "Track the status of completed offers and view pending rewards with full transparency.",
  },
  {
    title: "Built for Trust",
    icon: ShieldCheck,
    description:
      "We focus on clear communication, fraud prevention, and a reliable user experience.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-16 md:py-24"
    >
      <div className="text-center">
        <p className="font-semibold text-blue-600">
          WHY TASKI
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          Everything designed around trust
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Our goal is to provide a secure and transparent experience for
          users while helping advertising partners reach genuine audiences.
        </p>
      </div>

      {features.map((feature) => {
  const Icon = feature.icon;

  return (
    <div
      key={feature.title}
      className="rounded-2xl border border-gray-200 bg-white p-8"
    >
      <Icon className="h-8 w-8 mb-4" />

      <h3 className="text-xl font-semibold">
        {feature.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {feature.description}
      </p>
    </div>
  );
})}
    </section>
  );
}