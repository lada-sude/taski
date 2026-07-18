export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold">
        Terms of Service
      </h1>

      <div className="mt-8 space-y-6 text-gray-600">
        <section>
          <h2 className="text-xl font-semibold text-black">
            Platform Usage
          </h2>

          <p className="mt-2">
            Users agree to use Taski responsibly and participate only
            in legitimate activities available through the platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black">
            Fraud Prevention
          </h2>

          <p className="mt-2">
            Automated tools, multiple accounts, fake activity, or any
            attempt to manipulate rewards may result in account removal.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black">
            Rewards
          </h2>

          <p className="mt-2">
            Rewards are subject to successful verification from our
            partners and may require processing time.
          </p>
        </section>
      </div>
    </main>
  );
}