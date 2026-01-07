// components/CeoBusinessForum/ExecutivePremium.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ForumImage {
  src: string;
  alt: string;
}

interface CarrefourProps {
  title: string;
  edition: string;
  year: string;
  location: string;
  description: string;
  highlights: {
    icon: "globe" | "users" | "handshake" | "chart" | "building" | "flag";
    value: string;
    label: string;
  }[];
  images: ForumImage[];
  scrollSpeed?: number;
}

const ExecutivePremium: React.FC<CarrefourProps> = ({
  title,
  edition,
  year,
  location,
  description,
  highlights,
  images,
  scrollSpeed = 30,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations("carrefour");

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const totalWidth = scrollContainer.scrollWidth / 2;

    const animate = () => {
      if (!isHovered) {
        scrollPosition += scrollSpeed / 60;
        if (scrollPosition >= totalWidth) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered, scrollSpeed]);

  const duplicatedImages = [...images, ...images];

  const iconMap = {
    globe: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    users: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    handshake: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
        />
      </svg>
    ),
    chart: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    building: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    flag: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
        />
      </svg>
    ),
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Luxury Gold Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          {/* Luxury Badge */}
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]" />
            <div className="flex items-center gap-2 px-6 py-2 border border-[#d4af37]/30 bg-[#d4af37]/5">
              <svg
                className="w-4 h-4 text-[#d4af37]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="text-[#d4af37] text-sm font-light tracking-[0.3em] uppercase">
                {edition}
              </span>
              <svg
                className="w-4 h-4 text-[#d4af37]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extralight text-white tracking-tight mb-6">
            {title}
          </h2>

          {/* Location & Year */}
          <div className="flex items-center justify-center gap-6 text-white/60">
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#d4af37]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {location}
            </span>
            <div className="w-1 h-1 rounded-full bg-[#d4af37]" />
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#d4af37]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {year}
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left - Description */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37] to-transparent" />
              <p className="text-white/80 text-lg lg:text-xl font-light leading-relaxed pl-8">
                {description}
              </p>
            </div>

            {/* AIOCCI Info */}
            <div className="flex items-center gap-6 pt-8 border-t border-white/10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8962e] flex items-center justify-center">
                <span className="text-black font-bold text-xl">A</span>
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">
                  {t("aiocci.name")}
                </h4>
                <p className="text-white/50 text-sm">{t("aiocci.tagline")}</p>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white/[0.02] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-500"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#d4af37]/50" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#d4af37]/50" />

                <div className="text-[#d4af37] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {iconMap[highlight.icon]}
                </div>
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">
                  {highlight.value}
                </div>
                <div className="text-white/50 text-sm uppercase tracking-wider">
                  {highlight.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="relative">
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-light text-white mb-2">
              {t("highlightsSection.title")}
            </h3>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

            <div
              ref={scrollRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex gap-6 overflow-x-hidden py-4"
            >
              {duplicatedImages.map((image, index) => (
                <div key={index} className="flex-shrink-0 group">
                  <div className="relative w-80 lg:w-96 aspect-[16/10] overflow-hidden">
                    {/* Gold Border Frame */}
                    <div className="absolute inset-0 border border-[#d4af37]/20 group-hover:border-[#d4af37]/60 transition-colors duration-500 z-10" />
                    <div className="absolute top-2 left-2 right-2 bottom-2 border border-[#d4af37]/10 group-hover:border-[#d4af37]/30 transition-colors duration-500 z-10" />

                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 320px, 384px"
                    />

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutivePremium;
