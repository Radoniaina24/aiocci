import Link from "next/link";
import { useState } from "react";
import { Icons } from "../MembershipPage";
import Image from "next/image";

export interface Partner {
  name: string;
  logo: string;
  website: string;
}

export const PartnerLogo: React.FC<{ partner: Partner; type: string }> = ({
  partner,
  type,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={partner.website}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col items-center justify-center p-3 bg-white/50 rounded-lg border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
        type === "platinum"
          ? "border-amber-300 hover:border-amber-400 shadow-md"
          : type === "institutional"
            ? "border-amber-200 hover:border-amber-300 shadow-sm"
            : "border-stone-200 hover:border-amber-200 shadow-sm"
      }`}
    >
      {/* Logo Container - Taille réduite */}
      <div className="relative w-full h-10 flex items-center justify-center">
        {imageError ? (
          <div className="w-8 h-8 bg-gradient-to-br from-amber-100 to-amber-200 rounded-md flex items-center justify-center">
            <Icons.Building className="w-4 h-4 text-amber-600" />
          </div>
        ) : (
          <div className="relative w-3/4 h-full max-w-[80px] transition-all duration-300 group-hover:scale-105">
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-contain"
              onError={() => setImageError(true)}
            />
          </div>
        )}
      </div>

      {/* External Link Icon */}
      <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Icons.ExternalLink className="w-3 h-3 text-amber-600" />
      </div>

      {/* Platinum Badge */}
      {type === "platinum" && (
        <div className="absolute -top-1 -right-1">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 text-[8px] font-bold px-1 py-0.5 rounded shadow-sm">
            ★
          </div>
        </div>
      )}
    </Link>
  );
};
