// components/ui/FlagIcon.tsx
import React from "react";

interface FlagIconProps {
  country: "fr" | "en";
  className?: string;
}

const FlagIcon: React.FC<FlagIconProps> = ({
  country,
  className = "w-5 h-5",
}) => {
  const flags = {
    fr: (
      <svg viewBox="0 0 640 480" className={className}>
        <path fill="#002654" d="M0 0h213.3v480H0z" />
        <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
        <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
      </svg>
    ),
    en: (
      <svg viewBox="0 0 640 480" className={className}>
        <path fill="#012169" d="M0 0h640v480H0z" />
        <path
          fill="#FFF"
          d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
        />
        <path
          fill="#C8102E"
          d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
        />
        <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
        <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
      </svg>
    ),
  };

  return (
    <span
      className={`inline-block rounded-sm overflow-hidden shadow-sm ${className}`}
    >
      {flags[country]}
    </span>
  );
};

export default FlagIcon;
