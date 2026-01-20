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
      className={`group relative flex flex-col items-center justify-center p-6 bg-white/50 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
        type === "platinum"
          ? "border-amber-300 hover:border-amber-400 shadow-lg"
          : type === "institutional"
            ? "border-amber-200 hover:border-amber-300 shadow-md"
            : "border-stone-200 hover:border-amber-200 shadow"
      }`}
    >
      {/* Logo Container */}
      <div className="relative w-full h-20 mb-3 flex items-center justify-center">
        {imageError ? (
          <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
            <Icons.Building className="w-8 h-8 text-amber-600" />
          </div>
        ) : (
          <div className="relative w-full h-full   transition-all duration-300">
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
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <Icons.ExternalLink className="w-4 h-4 text-amber-600" />
      </div>

      {/* Platinum Badge */}
      {type === "platinum" && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 text-xs font-bold px-2 py-1 rounded-lg shadow">
            ★
          </div>
        </div>
      )}
    </Link>
  );
};
