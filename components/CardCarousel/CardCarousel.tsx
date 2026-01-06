// components/CardCarousel.tsx
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import MarqueeSlider from "../MarqueeSlider/MarqueeSlider";

interface CardItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category?: string;
  link?: string;
}

const CardCarousel: React.FC = () => {
  const t = useTranslations("cardCarousel");
  const cardsData: CardItem[] = t.raw("cards");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, cardsData.length - cardsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black py-16 md:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b22_1px,transparent_1px),linear-gradient(to_bottom,#1e293b22_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Header */}
      <div className="relative z-20 text-center px-4 mb-12 md:mb-16">
        <span className="inline-block px-5 py-2.5 mb-6 text-xs md:text-sm font-semibold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 rounded-full border border-emerald-500/30">
          {t("badge")}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {t("title")}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
            {t("highlight")}
          </span>
        </h2>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </div>
      <div className="mb-16">
        <MarqueeSlider />
      </div>

      {/* Carousel Container */}
      <div
        className="relative z-10 px-4 md:px-8 lg:px-16"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Cards Container */}
        <div
          ref={carouselRef}
          className="overflow-hidden mx-8 md:mx-12 lg:mx-16"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 px-3 md:px-4"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <CardItem card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="relative z-20 flex justify-center items-center gap-2 mt-10 md:mt-12">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 md:w-10 h-3 bg-gradient-to-r from-emerald-500 to-teal-500"
                : "w-3 h-3 bg-slate-600 hover:bg-slate-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="relative z-20 max-w-md mx-auto mt-6 px-4">
        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};

// Card Component
const CardItem: React.FC<{ card: CardItem }> = ({ card }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group h-full">
      <div className="relative h-full bg-gradient-to-b from-slate-800/50 to-slate-900/80 rounded-3xl overflow-hidden border border-slate-700/50 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          {/* Placeholder or Image */}
          {imageError ? (
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-5xl mb-2">
                  {card.id === 1 && "🎭"}
                  {card.id === 2 && "🏭"}
                  {card.id === 3 && "🌍"}
                  {card.id === 4 && "🎓"}
                  {card.id === 5 && "🤖"}
                  {card.id === 6 && "🌱"}
                  {card.id === 7 && "🌾"}
                </div>
                <span className="text-sm font-medium opacity-80">
                  {card.category}
                </span>
              </div>
            </div>
          ) : (
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              onError={() => setImageError(true)}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          {/* Category Badge */}
          {card.category && (
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-block px-3 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30">
                {card.category}
              </span>
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="relative p-5 md:p-6">
          {/* Decorative Line */}
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

          {/* Title */}
          {/* <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
            {card.title}
          </h3> */}

          {/* Description */}
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-5 line-clamp-3">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
