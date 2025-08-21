import { Leaf } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-emerald-50 shadow-lg shadow-black/10">
      <div className="max-w-full px-6 py-2 flex items-center justify-between">
        {/* Logo Only */}
        <div className="flex items-center">
          <img
            src="/src/assets/logo.png"
            alt="Experium Club Logo"
            className="w-20 h-14 object-contain"
            style={{ maxWidth: "160px" }}
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["Botanical", "Adventure", "Luxury", "Events"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-emerald-800 hover:text-gold-400 transition-colors duration-300 font-medium"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
