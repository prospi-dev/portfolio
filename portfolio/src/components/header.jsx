import React, { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 relative z-20">
      {/* Logo */}
      <div className="text-teal-300 text-2xl font-light tracking-widest z-30">MP</div>

      {/* Hamburger menu (mobile) */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none z-30 hover:text-gray-400 cursor-pointer hover:scale-120 transition-transform duration-200"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="6" y1="10" x2="26" y2="10" />
          <line x1="6" y1="16" x2="26" y2="16" />
          <line x1="6" y1="22" x2="26" y2="22" />
        </svg>
      </button>

      <div
        className={`fixed inset-0 bg-[#1a232a]/95 flex flex-col items-center justify-center z-40 transition-all duration-300 ${menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-8 pointer-events-none"
          }`}
        style={{ backdropFilter: "blur(2px)" }}
      >
        {/* Top bar with logo and close button */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4">
          <span className="text-teal-300 text-2xl font-extralight tracking-widest">MP</span>
          <button
            className="text-white text-3xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="8" x2="24" y2="24" />
              <line x1="24" y1="8" x2="8" y2="24" />
            </svg>
          </button>
        </div>
        {/* Nav links */}
        <nav className="flex flex-col items-center gap-8 font-extralight">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-xl py-2 px-6 rounded-lg transition-all duration-200 hover:text-yellow-400 hover:bg-[#22303c] hover:scale-110"
              style={{ display: "inline-block" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <nav className="hidden md:flex md:items-center md:space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white hover:text-teal-300 transition"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;