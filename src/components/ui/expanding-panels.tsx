"use client";

import { useState, useEffect } from "react";
import { LucideIcon } from "lucide-react";

export interface PanelItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface ExpandingPanelsProps {
  items: PanelItem[];
  autoRotateMs?: number;
}

export function ExpandingPanels({
  items,
  autoRotateMs = 4500,
}: ExpandingPanelsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, autoRotateMs);
    return () => clearInterval(interval);
  }, [isPaused, items.length, autoRotateMs]);

  return (
    <div
      className="flex gap-2 h-[420px] max-w-6xl mx-auto"
      onMouseLeave={() => setIsPaused(false)}
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        const isActive = index === activeIndex;

        return (
          <div
            key={item.title}
            onMouseEnter={() => {
              setIsPaused(true);
              setActiveIndex(index);
            }}
            className={`relative overflow-hidden rounded-2xl cursor-pointer border ${
              isActive
                ? "bg-[#0a0a0a] border-[#0a0a0a]"
                : "bg-white border-gray-200"
            }`}
            style={{
              flexGrow: isActive ? 6 : 1,
              flexBasis: 0,
              transition: "flex-grow 500ms ease-out, background-color 300ms ease-out, border-color 300ms ease-out",
              willChange: "flex-grow",
            }}
          >
            {/* Collapsed state – always rendered, fades out when active */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                opacity: isActive ? 0 : 1,
                transition: "opacity 250ms ease-out",
              }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#dc2626]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#dc2626]" />
                </div>
                <span
                  className="text-[#0a0a0a] font-bold uppercase tracking-[0.2em] text-xs whitespace-nowrap"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {item.title}
                </span>
              </div>
            </div>

            {/* Expanded state – always rendered, fades in AFTER panel expansion */}
            <div
              className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between pointer-events-none"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translateX(0)" : "translateX(-12px)",
                transition: isActive
                  ? "opacity 450ms ease-out 500ms, transform 450ms ease-out 500ms"
                  : "opacity 150ms ease-out, transform 0ms",
              }}
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#dc2626] flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                  {item.text}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <span className="text-white/50 text-xs font-semibold uppercase tracking-wider tabular-nums">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </span>
                <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
                  {isActive && !isPaused && (
                    <div
                      key={`bar-${activeIndex}`}
                      className="h-full bg-[#dc2626] origin-left"
                      style={{
                        animation: `panelProgress ${autoRotateMs}ms linear forwards`,
                      }}
                    />
                  )}
                  {isActive && isPaused && (
                    <div className="h-full w-full bg-[#dc2626]" />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <style jsx>{`
        @keyframes panelProgress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}
