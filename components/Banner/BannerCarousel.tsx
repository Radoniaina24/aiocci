// components/Banner/BannerCarousel.tsx

"use client";

import { useState, useEffect, useCallback } from "react";

import { BannerCarouselProps } from "./types";
import BannerSlide from "./BannerSlide";

export default function BannerCarousel({
  slides,
  autoPlayInterval = 5000,
  showIndicators = true,
  showArrows = true,
  height = "h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]",
}: BannerCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPaused, autoPlayInterval, nextSlide, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) nextSlide();
    if (touchStart - touchEnd < -75) prevSlide();
  };

  if (!slides || slides.length === 0) return null;

  return (
    <section
      className={`relative w-full ${height} overflow-hidden bg-gray-900`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Image carousel"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <BannerSlide
          key={slide.id}
          slide={slide}
          isActive={index === currentSlide}
        />
      ))}

      {/* Navigation Arrows */}
      {showArrows && slides.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="
              absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
              flex items-center justify-center
              bg-white/10 hover:bg-white/20 backdrop-blur-sm
              text-white rounded-full
              transform hover:scale-110 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-white/50
              group
            "
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="
              absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
              flex items-center justify-center
              bg-white/10 hover:bg-white/20 backdrop-blur-sm
              text-white rounded-full
              transform hover:scale-110 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-white/50
              group
            "
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Indicators */}
      {/* {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-2 sm:gap-3 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  transition-all duration-300 rounded-full
                  focus:outline-none focus:ring-2 focus:ring-white/50
                  ${
                    index === currentSlide
                      ? "w-8 sm:w-10 h-2 sm:h-2.5 bg-white"
                      : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/70"
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      )} */}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div
          className="h-full bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-500 transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Slide Counter */}
      {/* <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
        <div className="px-3 py-1.5 bg-black/30 backdrop-blur-sm rounded-full">
          <span className="text-white text-sm font-medium">
            {String(currentSlide + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div> */}
    </section>
  );
}
