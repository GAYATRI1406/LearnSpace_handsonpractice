import { useState } from "react";
import {
  FiSearch,
  FiMenu,
  FiX,
  FiUser,
  FiBookOpen,
} from "react-icons/fi";

const navLinks = ["Home", "Explore Courses", "My Learning", "Profile"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
            <FiBookOpen className="h-5 w-5" />
          </span>
          <span className="font-heading text-xl font-bold text-slate-900">
            Learn<span className="text-primary">Sphere</span>
          </span>
        </a>

        {/* Desktop links (hidden on mobile) */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActiveLink(link)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeLink === link
                    ? "text-primary"
                    : "text-slate-600"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: search + avatar + hamburger */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="rounded-full p-2 text-slate-600 transition-colors hover:bg-primary-light hover:text-primary"
          >
            <FiSearch className="h-5 w-5" />
          </button>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-light text-secondary">
            <FiUser className="h-5 w-5" />
          </span>

          {/* Hamburger — visible only on mobile */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          >
            {menuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu (vertical list, toggled by hamburger) */}
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-slate-100 px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => {
                  setActiveLink(link);
                  setMenuOpen(false);
                }}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                  activeLink === link
                    ? "bg-primary-light text-primary"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
