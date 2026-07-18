export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Taski. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="/privacy"
            className="hover:text-black"
          >
            Privacy Policy
          </a>

          <a
            href="/terms"
            className="hover:text-black"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}