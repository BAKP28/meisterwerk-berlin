"use client";

import Link from "next/link";

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Galerie", href: "#galerie" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "FAQ", href: "#faq" },
];

function NavHeader() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <img
                src="/logo.svg"
                alt="Meisterwerk Berlin Logo"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#0a0a0a] leading-tight tracking-tight">
                Meisterwerk
              </span>
              <span className="text-xs text-[#dc2626] font-medium leading-tight">
                BERLIN
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:block ml-auto mr-8">
            <ul className="relative flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.label} className="relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-5 py-3 text-sm font-medium text-[#0a0a0a] hover:text-[#dc2626] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavHeader;
