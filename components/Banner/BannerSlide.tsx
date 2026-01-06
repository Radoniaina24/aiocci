// components/Banner/BannerSlide.tsx

import Image from "next/image";
import Link from "next/link";
import { Slide } from "./types";

interface BannerSlideProps {
  slide: Slide;
  isActive: boolean;
}

export default function BannerSlide({ slide, isActive }: BannerSlideProps) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  const alignment = slide.alignment || "center";

  return (
    <div
      className={`
        absolute inset-0 transition-all duration-700 ease-in-out
        ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-105"}
      `}
    >
      {/* Image de fond */}
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Overlay supplémentaire pour lisibilité */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Contenu */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`
              flex flex-col ${alignmentClasses[alignment]}
              max-w-4xl
              ${alignment === "center" ? "mx-auto" : ""}
              ${alignment === "right" ? "ml-auto" : ""}
            `}
          >
            {/* Subtitle */}
            {slide.subtitle && (
              <span
                className={`
                  inline-block px-4 py-1.5 mb-4
                  text-xs sm:text-sm font-semibold uppercase tracking-wider
                  bg-white/20 backdrop-blur-sm text-white rounded-full
                  transform transition-all duration-700 delay-100
                  ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }
                `}
              >
                {slide.subtitle}
              </span>
            )}

            {/* Title */}
            <h1
              className={`
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                font-bold text-white leading-tight mb-4 sm:mb-6
                transform transition-all duration-700 delay-200
                ${
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              {slide.title}
            </h1>

            {/* Description */}
            <p
              className={`
                text-sm sm:text-base md:text-lg lg:text-xl
                text-gray-200 mb-6 sm:mb-8 max-w-2xl
                transform transition-all duration-700 delay-300
                ${
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              {slide.description}
            </p>

            {/* Button */}
            {/* {slide.buttonText && slide.buttonLink && (
              <div
                className={`
                  transform transition-all duration-700 delay-400
                  ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }
                `}
              >
                <Link
                  href={slide.buttonLink}
                  className="
                    inline-flex items-center gap-2
                    px-6 sm:px-8 py-3 sm:py-4
                    bg-gradient-to-r from-blue-600 to-purple-600
                    hover:from-blue-700 hover:to-purple-700
                    text-white font-semibold text-sm sm:text-base
                    rounded-full shadow-lg shadow-blue-500/30
                    transform hover:scale-105 transition-all duration-300
                    group
                  "
                >
                  {slide.buttonText}
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
