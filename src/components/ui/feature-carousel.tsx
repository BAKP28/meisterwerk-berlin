"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  badge?: string;
}

interface FeatureCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: CarouselImage[];
}

export const FeatureCarousel = React.forwardRef<
  HTMLDivElement,
  FeatureCarouselProps
>(({ images, className, ...props }, ref) => {
  const [currentIndex, setCurrentIndex] = React.useState(
    Math.floor(images.length / 2)
  );

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Touch/Swipe Support für Mobile
  const touchStartX = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  React.useEffect(() => {
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const handleClick = (pos: number) => {
    if (pos < 0) handlePrev();
    if (pos > 0) handleNext();
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full h-full flex items-center justify-center touch-pan-y",
        className
      )}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      {...props}
    >
      {/* Carousel Wrapper */}
      <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
        {images.map((image, index) => {
          const offset = index - currentIndex;
          const total = images.length;
          let pos = (offset + total) % total;
          if (pos > Math.floor(total / 2)) {
            pos = pos - total;
          }

          const isCenter = pos === 0;
          const isAdjacent = Math.abs(pos) === 1;

          return (
            <div
              key={index}
              className={cn(
                "absolute w-56 h-40 md:w-80 md:h-56 lg:w-[360px] lg:h-[260px] transition-all duration-500 ease-in-out flex items-center justify-center",
                isAdjacent && "cursor-pointer"
              )}
              style={{
                transform: `
                  translateX(${pos * 55}%)
                  scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                  rotateY(${pos * -10}deg)
                `,
                zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                filter: isCenter ? "blur(0px)" : "blur(4px)",
                visibility: Math.abs(pos) > 1 ? "hidden" : "visible",
              }}
              onClick={() => handleClick(pos)}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#0a0a0a]/10 shadow-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Badge */}
                {image.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 bg-[#dc2626] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      {image.badge}
                    </span>
                  </div>
                )}

                {/* Title */}
                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm md:text-base drop-shadow-lg">
                      {image.title}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

FeatureCarousel.displayName = "FeatureCarousel";
