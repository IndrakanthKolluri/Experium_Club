import { useState } from "react";
import { Leaf, Menu } from "lucide-react";
import logo from "../assets/experium.png";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = ["Botanical", "Adventure", "Luxury", "Events"];

  return (
    <header className="fixed top-0 w-full z-50 bg-emerald-50 shadow-lg shadow-black/10">
      <div className="max-w-full px-6 py-2 flex items-center justify-between">
        {/* Logo Only */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Experium Club Logo"
            className="w-20 h-14 object-contain"
            style={{ maxWidth: "160px" }}
          />
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-emerald-800 hover:text-gold-400 transition-colors duration-300 font-medium"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Hamburger Menu - Mobile */}
        <button
          className="md:hidden p-2"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="w-8 h-8 text-emerald-800" />
        </button>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-emerald-50 shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-100">
          <img
            src={logo}
            alt="Experium Club Logo"
            className="w-16 h-10 object-contain"
          />
          <button
            className="p-2"
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
          >
            <span className="text-2xl text-emerald-800">&times;</span>
          </button>
        </div>
        <nav className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-emerald-800 hover:text-gold-400 transition-colors duration-300 font-medium text-lg"
              onClick={() => setSidebarOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      </aside>
    </header>
  );
}
