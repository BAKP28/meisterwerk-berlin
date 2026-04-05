"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

// Platzhalter-Bilder von Picsum (lizenzfrei, CDN-schnell)
// TODO: Mit echten Rollladen-/Markisen-Fotos ersetzen
const carouselItems = [
  {
    id: 1,
    title: "Rollladen Reparatur",
    subtitle: "Schnelle Reparatur vor Ort – Motorschäden, Gurtwechsel, Panne.",
    badge: "Reparatur",
    image: "https://picsum.photos/seed/meisterwerk-rollladen-1/1200/900",
  },
  {
    id: 2,
    title: "24/7 Notdienst",
    subtitle: "Wir sind rund um die Uhr für Sie erreichbar bei Notfällen.",
    badge: "Notdienst",
    image: "https://picsum.photos/seed/meisterwerk-notdienst/1200/900",
  },
  {
    id: 3,
    title: "Holzrollladen",
    subtitle: "Spezialisten für klassische Holzrollläden – Reparatur & Pflege.",
    badge: "Tradition",
    image: "https://picsum.photos/seed/meisterwerk-holz/1200/900",
  },
  {
    id: 4,
    title: "Markisen",
    subtitle: "Markisen Reparatur und Neuinstallation für Ihren Sonnenschutz.",
    badge: "Sonnenschutz",
    image: "https://picsum.photos/seed/meisterwerk-markise/1200/900",
  },
  {
    id: 5,
    title: "Rollladenmontage",
    subtitle: "Professionelle Montage von Rollläden aller Art.",
    badge: "Montage",
    image: "https://picsum.photos/seed/meisterwerk-montage/1200/900",
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const active = carouselItems[activeIndex];

  return (
    <div
      className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Bild-Stack mit Fade-Übergang */}
      <AnimatePresence mode="sync">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={active.image}
            alt={active.title}
            fill
            priority={active.id === 1}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Ken-Burns Zoom Effekt */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 6, ease: "linear" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${active.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Gradient Overlay für Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 pointer-events-none" />

      {/* Badge oben links */}
      <div className="absolute top-6 left-6 z-10">
        <span className="inline-flex items-center gap-2 bg-[#dc2626] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          {active.badge}
        </span>
      </div>

      {/* Content unten */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              {active.title}
            </h3>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-5 max-w-md drop-shadow">
              {active.subtitle}
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-[#0a0a0a] px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#dc2626] hover:text-white transition-all duration-300 shadow-lg">
              Mehr erfahren
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress-Dots unten rechts */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-10">
        {carouselItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(index)}
            aria-label={`Slide ${index + 1}: ${item.title}`}
            className="group/dot relative h-1.5 overflow-hidden rounded-full bg-white/30 transition-all duration-300"
            style={{ width: index === activeIndex ? "32px" : "12px" }}
          >
            {index === activeIndex && !isPaused && (
              <motion.div
                key={`progress-${activeIndex}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute inset-0 bg-white"
              />
            )}
            {index === activeIndex && isPaused && (
              <div className="absolute inset-0 bg-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
