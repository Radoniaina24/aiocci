// components/Banner/Ticker.tsx

"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { TickerProps, TickerItem } from "./types";

export default function Ticker({
  items,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
  backgroundColor = "bg-gradient-to-r from-black via-neutral-900 to-black",
  textColor = "text-white",
  separator = "✦",
  showIcon = true,
}: TickerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);

  // Vitesses de défilement
  const speedMap = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  };

  // Dupliquer les items pour un défilement infini fluide
  const duplicatedItems = [...items, ...items, ...items, ...items];

  const renderTickerItem = (item: TickerItem, index: number) => {
    const content = (
      <span
        className={`
          inline-flex items-center gap-2
          ${item.highlight ? "bg-white/20 px-3 py-0.5 rounded-full" : ""}
        `}
      >
        {showIcon && item.icon && <span className="text-sm">{item.icon}</span>}
        <span className={item.highlight ? "font-semibold" : ""}>
          {item.text}
        </span>
      </span>
    );

    if (item.link) {
      return (
        <Link
          key={`${item.id}-${index}`}
          href={item.link}
          className="hover:underline underline-offset-2 transition-all"
        >
          {content}
        </Link>
      );
    }

    return <span key={`${item.id}-${index}`}>{content}</span>;
  };

  return (
    <div
      className={`
        relative w-full overflow-hidden
        ${backgroundColor}
        ${textColor}
        py-2.5 sm:py-3
      `}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Container du ticker */}
      <div
        ref={tickerRef}
        className={`
          flex whitespace-nowrap
          ${isHovered ? "pause-animation" : ""}
        `}
        style={{
          animation: `${
            direction === "left" ? "ticker-scroll-left" : "ticker-scroll-right"
          } ${speedMap[speed]} linear infinite`,
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="inline-flex items-center text-xs sm:text-sm font-medium"
          >
            {renderTickerItem(item, index)}
            <span className="mx-4 sm:mx-6 opacity-60">{separator}</span>
          </div>
        ))}
      </div>

      {/* Styles CSS pour l'animation */}
      <style jsx>{`
        @keyframes ticker-scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes ticker-scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
