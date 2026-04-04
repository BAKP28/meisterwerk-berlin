"use client";

import React, { useState, useEffect } from "react";

const carouselItems = [
  {
    id: 1,
    title: "Rollladen Reparatur",
    subtitle: "Schnelle Reparatur vor Ort - Motorschäden, Gurtwechsel, Panne.",
    bgColor: "#1a365d",
    gradient: "linear-gradient(135deg, #1a365d 0%, #2c5282 50%, #1a365d 100%)",
  },
  {
    id: 2,
    title: "24/7 Notdienst",
    subtitle: "Wir sind rund um die Uhr für Sie erreichbar bei Notfällen.",
    bgColor: "#dc2626",
    gradient: "linear-gradient(135deg, #dc2626 0%, #f87171 50%, #dc2626 100%)",
  },
  {
    id: 3,
    title: "Holzrollladen",
    subtitle: "Spezialisten für klassische Holzrollläden - Reparatur & Pflege.",
    bgColor: "#2c5282",
    gradient: "linear-gradient(135deg, #2c5282 0%, #1a365d 50%, #2c5282 100%)",
  },
  {
    id: 4,
    title: "Markisen",
    subtitle: "Markisen Reparatur und Neuinstallation für Ihren Sonnenschutz.",
    bgColor: "#1e3a5f",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #2c5282 50%, #1e3a5f 100%)",
  },
  {
    id: 5,
    title: "Rollladenmontage",
    subtitle: "Professionelle Montage von Rollläden aller Art.",
    bgColor: "#991b1b",
    gradient: "linear-gradient(135deg, #991b1b 0%, #dc2626 50%, #991b1b 100%)",
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const getItemStyle = (index: number) => {
    const diff =
      (index - activeIndex + carouselItems.length) % carouselItems.length;

    if (diff === 0) {
      return {
        transform: "translateY(0) scale(1)",
        opacity: 1,
        zIndex: 10,
        filter: "none",
      };
    } else if (diff === 1) {
      return {
        transform: "translateY(180px) scale(0.85)",
        opacity: 0.85,
        zIndex: 5,
        filter: "brightness(0.65)",
      };
    } else if (diff === carouselItems.length - 1) {
      return {
        transform: "translateY(-180px) scale(0.85)",
        opacity: 0.85,
        zIndex: 5,
        filter: "brightness(0.65)",
      };
    } else {
      return {
        transform: "translateY(280px) scale(0.8)",
        opacity: 0,
        zIndex: 0,
        filter: "brightness(0.5)",
      };
    }
  };

  return (
    <div className="relative w-full h-[450px] lg:h-[500px] flex items-center justify-center">
      {/* Carousel Items - Vertical Stack */}
      <div className="relative w-[320px] h-[400px]">
        {carouselItems.map((item, index) => {
          const diff =
            (index - activeIndex + carouselItems.length) % carouselItems.length;
          const isClickable = diff === 1 || diff === carouselItems.length - 1;

          return (
            <div
              key={item.id}
              className={`absolute inset-0 w-[320px] h-[320px] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out shadow-2xl ${
                isClickable ? "cursor-pointer" : ""
              }`}
              style={{
                background: item.gradient,
                ...getItemStyle(index),
              }}
              onClick={() => {
                if (diff === 1) {
                  // Click on below item - go next
                  nextSlide();
                } else if (diff === carouselItems.length - 1) {
                  // Click on above item - go prev
                  prevSlide();
                }
              }}
            >
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)`,
                }}
              />

              {/* Gradient overlay for depth */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="text-sm font-normal text-white/90 leading-relaxed mb-4">
                  {item.subtitle}
                </p>
                {diff === 0 && (
                  <button className="bg-white text-[#1a365d] px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg text-sm">
                    Mehr erfahren
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots Indicator - Vertical, rechts */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
        {carouselItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-6 rounded-full transition-all ${
              index === activeIndex
                ? "bg-[#1a365d] w-3"
                : "bg-[#1a365d]/30 hover:bg-[#1a365d]/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
