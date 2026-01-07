// components/AIOCCIVision/EditorialPrestige.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface VisionImage {
  src: string;
  alt: string;
  caption?: string;
}

interface AIOCCIVisionProps {
  images: VisionImage[];
}

const EditorialPrestige: React.FC<AIOCCIVisionProps> = ({ images }) => {
  const t = useTranslations("editorialPrestige");
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen  overflow-hidden"
    >
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="elegantPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="1" fill="#1a1a1a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#elegantPattern)" />
        </svg>
      </div>

      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* Hero Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-amber-600" />
            <span className="text-amber-700 text-sm font-medium tracking-[0.3em] uppercase">
              {t("eyebrow")}
            </span>
            <div className="w-12 h-px bg-amber-600" />
          </div>

          {/* Main Tagline */}
          <h1 className="text-5xl sm:text-6xl lg:text-6xl font-extralight text-slate-900 tracking-tight mb-8">
            <span className="text-white/80">{t("tagline.build")}</span>
            <span className="text-amber-600">{t("tagline.inspire")}</span>
            <span className="text-white/80">{t("tagline.transform")}</span>
          </h1>

          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <div className="w-2 h-2 rounded-full bg-amber-600" />
            <div className="w-16 h-px bg-slate-300" />
            <div className="w-3 h-3 rounded-full border-2 border-amber-600" />
            <div className="w-16 h-px bg-slate-300" />
            <div className="w-2 h-2 rounded-full bg-amber-600" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left Column - Featured Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              {/* Main Image */}
              <Image
                src={images[activeImage]?.src || "/placeholder.jpg"}
                alt={images[activeImage]?.alt || "AIOCCI Event"}
                fill
                className="object-cover transition-all duration-700"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white/90 text-sm font-light">
                  {images[activeImage]?.caption}
                </p>
              </div>
            </div>

            {/* Image Navigation Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeImage === index
                      ? "w-8 bg-amber-600"
                      : "w-4 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-600/30" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-amber-600/30" />
          </div>

          {/* Right Column - Content */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Lead Paragraph */}
            <div className="relative mb-10">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-600 to-amber-600/20" />
              <p className="text-lg lg:text-xl text-white/80 font-light leading-relaxed pl-6">
                {t("lead")}
              </p>
            </div>

            {/* Sectors Badge */}
            <div className="flex flex-wrap gap-3 mb-10">
              {t.raw("sectors").map((sector: string) => (
                <span
                  key={sector}
                  className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200"
                >
                  {sector}
                </span>
              ))}
            </div>

            {/* Body Text */}
            <div className="space-y-6 text-white/80 leading-relaxed">
              <p>{t("paragraphs.p1")}</p>
              <p>{t("paragraphs.p2")}</p>
            </div>

            {/* Quote Block */}
            <blockquote className="mt-10 p-8 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-600">
              <p className="text-lg text-slate-800 font-medium italic">
                “{t("quote.text")}”
              </p>
              <footer className="mt-4 text-sm text-amber-700 font-medium">
                — {t("quote.author")}
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Image Gallery Grid */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        ></div>

        {/* Closing Statement */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-6 p-8 bg-slate-900 text-white">
            <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center text-2xl font-bold">
              A
            </div>
            <div className="text-left">
              <p className="text-xl font-light">{t("closing.line1")}</p>
              <p className="text-amber-400 font-medium">{t("closing.line2")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialPrestige;
