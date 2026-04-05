"use client";

import React, { useState, useEffect } from "react";

// --- Data for the accordion with gradient backgrounds ---
interface AccordionItemData {
  id: number;
  title: string;
  bgColor: string;
  description: string;
  gradient: string;
}

const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: "Rollladen Reparatur",
    bgColor: "#0a0a0a",
    description:
      "Schnelle Reparatur vor Ort - Motorschäden, Gurtwechsel, Panne.",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #2c5282 50%, #0a0a0a 100%)",
  },
  {
    id: 2,
    title: "Rollladennotdienst",
    bgColor: "#dc2626",
    description:
      "24/7 Notdienst für dringende Fälle - wir sind schnell bei Ihnen.",
    gradient: "linear-gradient(135deg, #dc2626 0%, #f87171 50%, #dc2626 100%)",
  },
  {
    id: 3,
    title: "Holzrollladen",
    bgColor: "#2c5282",
    description:
      "Spezialisten für klassische Holzrollläden - Reparatur & Pflege.",
    gradient: "linear-gradient(135deg, #2c5282 0%, #0a0a0a 50%, #2c5282 100%)",
  },
  {
    id: 4,
    title: "Markisen",
    bgColor: "#0a0a0a",
    description:
      "Markisen Reparatur und Neuinstallation für Ihren Sonnenschutz.",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #2c5282 50%, #1e3a5f 100%)",
  },
  {
    id: 5,
    title: "Rollladenmontage",
    bgColor: "#dc2626",
    description: "Professionelle Montage von Rollläden aller Art.",
    gradient: "linear-gradient(135deg, #991b1b 0%, #dc2626 50%, #991b1b 100%)",
  },
];

// --- Accordion Item Component ---
interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
}

const AccordionItem = ({ item, isActive }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[350px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-500 ease-in-out flex-shrink-0
        ${isActive ? "w-[350px]" : "w-[60px]"}
      `}
      style={{ background: item.gradient }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)`,
        }}
      />

      {/* Additional depth layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-30" : "opacity-50"}`}
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
        }}
      />

      {/* Decorative diagonal stripe */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-10"
        style={{
          background: `linear-gradient(135deg, transparent 50%, ${item.bgColor} 50%)`,
        }}
      />

      <div
        className={`
          absolute text-white whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? "bottom-6 left-6 right-6 text-left"
              : "bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 origin-center"
          }
        `}
      >
        <span
          className={`${isActive ? "text-2xl font-bold block mb-2" : "text-xs"} drop-shadow-lg`}
        >
          {item.title}
        </span>
        {isActive && (
          <span className="text-sm font-normal text-white/90 block leading-relaxed">
            {item.description}
          </span>
        )}
        {isActive && (
          <button className="mt-4 bg-white text-[#0a0a0a] px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg text-sm">
            Mehr erfahren
          </button>
        )}
      </div>
    </div>
  );
};

// --- Main Accordion Component with Auto-Scroll ---
export function HeroAccordion() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % accordionItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row items-center justify-center gap-3 overflow-hidden p-2">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  );
}
