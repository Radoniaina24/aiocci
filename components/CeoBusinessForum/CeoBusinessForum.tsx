// components/CeoBusinessForum/index.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ForumImage {
  src: string;
  alt: string;
}

interface CeoBusinessForumProps {
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
  scrollSpeed?: number; // pixels per second
}

const CeoBusinessForum: React.FC<CeoBusinessForumProps> = ({
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
  const t = useTranslations("ceoBusinessForum");
  // Auto-scroll animation
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

  // Double the images array for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMXYxaC0xek0wIDBoMXYxSDB6TTAgMzBoMXYxSDB6TTMwIDBoMXYxaC0xeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium tracking-wider mb-4 sm:mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>
              {location} • {year}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-white tracking-tight mb-3 sm:mb-4">
            <span className="block">{title}</span>
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              {edition}
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
            <div className="w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-500 rounded-full" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50" />
            <div className="w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-500 rounded-full" />
          </div>
        </div>

        {/* Main Content Card */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden mb-12 sm:mb-16 md:mb-20">
          {/* Decorative Top Gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400" />

          <div className="p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            {/* Description */}
            <div className="max-w-4xl mx-auto">
              {/* Quote Icon */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center">
                <span className="text-amber-400 font-semibold">
                  {t("descriptionIntro")}
                </span>{" "}
                {description.replace(t("descriptionIntro"), "")}
              </p>

              {/* AIOCCI Badge */}
              <div className="flex justify-center mt-6 sm:mt-8">
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full border border-slate-600">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">
                      A
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs sm:text-sm">
                      {t("aiocci.name")}
                    </p>
                    <p className="text-slate-400 text-[10px] sm:text-xs">
                      {t("aiocci.tagline")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel Section */}
        <div className="relative">
          {/* Section Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
              {t("highlightsSection.title")}
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              {t("highlightsSection.subtitle", { year })}
            </p>
          </div>

          {/* Gradient Overlays for Carousel */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing py-4"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 group relative">
                <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-amber-500/50 transition-all duration-300 shadow-xl group-hover:shadow-amber-500/20">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Image Caption */}
                  {/* <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs sm:text-sm font-medium truncate">
                      {image.alt}
                    </p>
                  </div> */}

                  {/* Corner Decoration */}
                  {/* <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-500/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoBusinessForum;
