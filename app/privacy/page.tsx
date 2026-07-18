export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold">
        Privacy Policy
      </h1>

      <div className="mt-8 space-y-6 text-gray-600">
        <p>
          Taski respects user privacy and is committed to protecting
          personal information provided through our platform.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-black">
            Information We Collect
          </h2>

          <p className="mt-2">
            We may collect account information, activity information,
            and technical information required to provide and improve
            our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black">
            Third-Party Partners
          </h2>

          <p className="mt-2">
            Taski may work with advertising and market research partners
            that provide digital opportunities. These partners may use
            tracking technologies to verify completed activities.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black">
            Data Protection
          </h2>

          <p className="mt-2">
            We take reasonable steps to protect user information and
            prevent unauthorized access.
          </p>
        </section>
      </div>
    </main>
  );
}