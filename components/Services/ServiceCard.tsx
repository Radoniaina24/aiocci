import React, { useMemo } from "react";
import Icon from "@/components/ui/AppIcon";

// Types plus robustes et extensibles
type ColorVariant = "blue" | "green" | "red" | "purple" | "orange" | "brown";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  color?: ColorVariant;
  badge?: string;
  isPopular?: boolean;
  onClick?: () => void;
  className?: string;
}

// Configuration des couleurs avec design tokens
const colorConfig: Record<
  ColorVariant,
  {
    gradient: string;
    iconBg: string;
    iconColor: string;
    accentLine: string;
    badgeBg: string;
    checkColor: string;
    hoverGlow: string;
  }
> = {
  blue: {
    gradient: "from-blue-500/10 via-blue-400/5 to-transparent",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    iconColor: "text-white",
    accentLine: "bg-gradient-to-r from-blue-500 to-blue-400",
    badgeBg: "bg-blue-500/10 text-blue-600 ring-blue-500/20",
    checkColor: "text-blue-500",
    hoverGlow: "group-hover:shadow-blue-500/25",
  },
  green: {
    gradient: "from-emerald-500/10 via-emerald-400/5 to-transparent",
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    iconColor: "text-white",
    accentLine: "bg-gradient-to-r from-emerald-500 to-emerald-400",
    badgeBg: "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20",
    checkColor: "text-emerald-500",
    hoverGlow: "group-hover:shadow-emerald-500/25",
  },
  red: {
    gradient: "from-rose-500/10 via-rose-400/5 to-transparent",
    iconBg: "bg-gradient-to-br from-rose-500 to-rose-600",
    iconColor: "text-white",
    accentLine: "bg-gradient-to-r from-rose-500 to-rose-400",
    badgeBg: "bg-rose-500/10 text-rose-600 ring-rose-500/20",
    checkColor: "text-rose-500",
    hoverGlow: "group-hover:shadow-rose-500/25",
  },
  purple: {
    gradient: "from-violet-500/10 via-violet-400/5 to-transparent",
    iconBg: "bg-gradient-to-br from-violet-500 to-violet-600",
    iconColor: "text-white",
    accentLine: "bg-gradient-to-r from-violet-500 to-violet-400",
    badgeBg: "bg-violet-500/10 text-violet-600 ring-violet-500/20",
    checkColor: "text-violet-500",
    hoverGlow: "group-hover:shadow-violet-500/25",
  },
  orange: {
    gradient: "from-amber-500/10 via-amber-400/5 to-transparent",
    iconBg: "bg-gradient-to-br from-amber-500 to-amber-600",
    iconColor: "text-white",
    accentLine: "bg-gradient-to-r from-amber-500 to-amber-400",
    badgeBg: "bg-amber-500/10 text-amber-600 ring-amber-500/20",
    checkColor: "text-amber-500",
    hoverGlow: "group-hover:shadow-amber-500/25",
  },
  // ✨ Nouvelle variante MARRON
  brown: {
    gradient: "from-[#8B4513]/10 via-[#A0522D]/5 to-transparent",
    iconBg: "bg-gradient-to-br from-[#8B4513] to-[#5D3A1A]",
    iconColor: "text-white",
    accentLine: "bg-gradient-to-r from-[#8B4513] to-[#CD853F]",
    badgeBg: "bg-[#8B4513]/10 text-[#5D3A1A] ring-[#8B4513]/20",
    checkColor: "text-[#8B4513]",
    hoverGlow: "group-hover:shadow-[#8B4513]/25",
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features = [],
  color = "brown", // 👈 Couleur par défaut changée en marron
  badge,
  isPopular = false,
  onClick,
  className = "",
}) => {
  const theme = useMemo(() => colorConfig[color], [color]);

  const isInteractive = Boolean(onClick);

  return (
    <article
      role={isInteractive ? "button" : "article"}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (isInteractive && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={`
        group relative overflow-hidden
        bg-white/80 backdrop-blur-xl
        border border-gray-200/60
        rounded-3xl
        p-8 lg:p-10
        transition-all duration-500 ease-out
        hover:border-gray-300/80
        hover:shadow-2xl hover:shadow-gray-900/10
        hover:-translate-y-2
        ${
          isInteractive
            ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            : ""
        }
        ${className}
      `}
    >
      {/* Gradient Background Overlay */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br ${theme.gradient}
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        `}
        aria-hidden="true"
      />

      {/* Decorative Corner Accent */}
      <div
        className={`
          absolute -top-24 -right-24 w-48 h-48
          bg-gradient-to-br ${theme.gradient}
          rounded-full blur-3xl
          opacity-0 group-hover:opacity-60
          transition-all duration-700
          group-hover:scale-150
        `}
        aria-hidden="true"
      />

      {/* Top Accent Line */}
      <div
        className={`
          absolute top-0 left-8 right-8 h-1 ${theme.accentLine}
          rounded-full
          transform origin-left scale-x-0 group-hover:scale-x-100
          transition-transform duration-500 ease-out
        `}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header Section */}
        <header className="flex items-start justify-between mb-8">
          {/* Icon Container */}
          <div
            className={`
              relative
              flex items-center justify-center
              w-16 h-16 lg:w-18 lg:h-18
              ${theme.iconBg}
              rounded-2xl
              shadow-lg ${theme.hoverGlow}
              transition-all duration-500
              group-hover:scale-110 group-hover:rotate-3
              group-hover:shadow-xl
            `}
          >
            {/* Icon Glow Effect */}
            <div
              className={`
                absolute inset-0 ${theme.iconBg}
                rounded-2xl blur-xl opacity-0
                group-hover:opacity-40
                transition-opacity duration-500
              `}
              aria-hidden="true"
            />
            <Icon
              name={icon as any}
              size={28}
              className={`relative z-10 ${theme.iconColor}`}
            />
          </div>

          {/* Badges */}
          <div className="flex flex-col items-end gap-2">
            {isPopular && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#CD853F] to-[#8B4513] text-white text-xs font-semibold rounded-full shadow-lg shadow-[#8B4513]/30 animate-pulse">
                <Icon name="StarIcon" size={12} className="fill-current" />
                Populaire
              </span>
            )}
            {badge && (
              <span
                className={`inline-flex items-center px-3 py-1.5 ${theme.badgeBg} text-xs font-medium rounded-full ring-1 ring-inset`}
              >
                {badge}
              </span>
            )}
          </div>
        </header>

        {/* Title */}
        <h3 className="font-playfair font-bold text-2xl lg:text-[1.75rem] text-gray-900 mb-4 tracking-tight leading-tight group-hover:text-gray-800 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sourceSans text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-4" role="list">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 group/item"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Custom Check Icon */}
                <span
                  className={`
                    flex-shrink-0 mt-0.5
                    flex items-center justify-center
                    w-5 h-5
                    ${theme.checkColor}
                    bg-current/10
                    rounded-full
                    transition-all duration-300
                    group-hover/item:scale-110
                    group-hover/item:bg-current/20
                  `}
                >
                  <Icon
                    name="CheckIcon"
                    size={12}
                    className="text-current"
                    strokeWidth={3}
                  />
                </span>
                <span className="font-sourceSans text-sm lg:text-base text-gray-700 leading-snug group-hover/item:text-gray-900 transition-colors duration-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Interactive Arrow Indicator */}
        {isInteractive && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-all duration-300">
              En savoir plus
              <Icon
                name="ArrowRightIcon"
                size={16}
                className="transform group-hover:translate-x-2 transition-transform duration-300"
              />
            </span>
          </div>
        )}
      </div>

      {/* Bottom Decorative Element */}
      <div
        className={`
          absolute bottom-0 left-0 right-0 h-1
          ${theme.accentLine}
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500 delay-200
        `}
        aria-hidden="true"
      />
    </article>
  );
};

export default ServiceCard;
