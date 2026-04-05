"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Rollladen",
    href: "#leistungen",
    hasDropdown: true,
    submenu: [
      { label: "Rollladen Reparatur", href: "#reparatur" },
      { label: "Rollladennotdienst", href: "#notdienst" },
      { label: "Holzrollladen", href: "#holz" },
      { label: "Rollladenmontage", href: "#montage" },
      { label: "Rolltor verbeult", href: "#rolltor" },
    ],
  },
  {
    label: "Markisen",
    href: "#markisen",
    hasDropdown: false,
  },
  {
    label: "Service",
    href: "#service",
    hasDropdown: true,
    submenu: [{ label: "Über uns", href: "#ueber-uns" }],
  },
  {
    label: "Kontakt",
    href: "#kontakt",
    hasDropdown: false,
  },
];

function NavHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-[#1a365d]">
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
              <span className="font-bold text-lg text-[#1a365d] leading-tight tracking-tight">
                Meisterwerk
              </span>
              <span className="text-xs text-[#dc2626] font-medium leading-tight">
                BERLIN
              </span>
            </div>
          </Link>

          {/* Navigation mit Dropdown - nach rechts verschoben */}
          <nav className="hidden md:block ml-auto mr-8">
            <ul className="relative flex items-center gap-1">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      if (closeTimeoutRef.current) {
                        clearTimeout(closeTimeoutRef.current);
                        closeTimeoutRef.current = null;
                      }
                      setOpenDropdown(item.label);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.hasDropdown) {
                      closeTimeoutRef.current = setTimeout(() => {
                        setOpenDropdown(null);
                      }, 150);
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-5 py-3 text-sm font-medium text-[#1a365d] hover:text-[#dc2626] transition-colors duration-200"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown &&
                    item.submenu &&
                    openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-5 py-3 text-sm text-[#1a365d] hover:bg-[#1a365d] hover:text-white transition-colors duration-150"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
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
