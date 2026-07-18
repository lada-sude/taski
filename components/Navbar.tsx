import Logo from "./logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <div className="hidden gap-8 md:flex">
          <a href="#features" className="hover:text-blue-600 transition">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-blue-600 transition">
            How it Works
          </a>

          <a href="#security" className="hover:text-blue-600 transition">
            Security
          </a>

          <a href="#faq" className="hover:text-blue-600 transition">
            FAQ
          </a>
        </div>
      </nav>
    </header>
  );
}