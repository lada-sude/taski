export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
      <span className="mb-4 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
        Coming Soon
      </span>

      <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight md:text-6xl">
        Discover Verified Digital Rewards with Confidence
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        Taski is building a trusted platform that connects users with verified
        digital tasks, surveys, and promotional offers from advertising and
        market research partners.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="#features"
          className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Learn More
        </a>

        <a
          href="#security"
          className="rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
        >
          Security
        </a>
      </div>
    </section>
  );
}