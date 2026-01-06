// components/MarqueeSlider.tsx
"use client";

import { useTranslations } from "next-intl";
import React from "react";

interface SlideItem {
  id: number;
  text: string;
  icon?: string;
}

interface MarqueeRowProps {
  items: SlideItem[];
  direction: "left" | "right";
  speed?: number;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({
  items,
  direction,
  speed = 30,
}) => {
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="relative flex overflow-hidden py-3 group">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* First Set */}
      <div
        className={`flex shrink-0 ${animationClass} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item) => (
          <div key={`first-${item.id}`} className="px-3 md:px-4 lg:px-5">
            <SlideCard item={item} />
          </div>
        ))}
      </div>

      {/* Duplicate Set for Seamless Loop */}
      <div
        className={`flex shrink-0 ${animationClass} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
        aria-hidden="true"
      >
        {items.map((item) => (
          <div key={`second-${item.id}`} className="px-3 md:px-4 lg:px-5">
            <SlideCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const SlideCard: React.FC<{ item: SlideItem }> = ({ item }) => {
  return (
    <div className="group/card relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
      <div className="relative h-full p-5 md:p-6 lg:p-7 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500/50 hover:shadow-emerald-500/20 hover:shadow-2xl">
        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-tr-2xl rounded-bl-[40px]" />

        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

        {/* Icon */}
        <div className="relative flex items-center gap-3 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 via-teal-500/30 to-transparent" />
        </div>

        {/* Text */}
        <p className="relative text-sm  text-slate-200 leading-relaxed font-medium line-clamp-4">
          {item.text}
        </p>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full opacity-50 group-hover/card:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};

const MarqueeSlider: React.FC = () => {
  const t = useTranslations("marquee");
  const slides: SlideItem[] = [
    { id: 1, text: t("slides.1") },
    { id: 2, text: t("slides.2") },
    { id: 3, text: t("slides.3") },
    { id: 4, text: t("slides.4") },
    { id: 5, text: t("slides.5") },
    { id: 6, text: t("slides.6") },
    { id: 7, text: t("slides.7") },
  ];

  const firstRowItems = slides.slice(0, 4);
  const secondRowItems = slides.slice(3);

  return (
    <section className="relative w-full  flex flex-col justify-center overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial Glow */}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b33_1px,transparent_1px),linear-gradient(to_bottom,#1e293b33_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>
      {/* Marquee Rows */}
      <div className="relative z-10 space-y-1">
        <MarqueeRow items={firstRowItems} direction="left" speed={40} />
        <MarqueeRow items={secondRowItems} direction="right" speed={45} />
      </div>
    </section>
  );
};

export default MarqueeSlider;
