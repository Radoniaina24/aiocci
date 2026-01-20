import { useState } from "react";
import { Icons } from "../MembershipPage";
import Link from "next/link";

interface Benefit {
  text: string;
}
export interface MembershipType {
  id: string;
  title: string;
  description: string;
  benefits: Benefit[];
  isFree: boolean;
  isPremium?: boolean;
  buttonText: string;
  buttonLink: string;
  iconType: "crown" | "building" | "rocket" | "institution" | "award" | "media";
}

const getIcon = (iconType: string) => {
  switch (iconType) {
    case "crown":
      return <Icons.Crown />;
    case "building":
      return <Icons.Building />;
    case "rocket":
      return <Icons.Rocket />;
    case "institution":
      return <Icons.Institution />;
    case "award":
      return <Icons.Award />;
    case "media":
      return <Icons.Media />;
    default:
      return <Icons.Building />;
  }
};

export const MembershipCard: React.FC<{
  membership: MembershipType;
  index: number;
}> = ({ membership, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
        isHovered ? "shadow-2xl -translate-y-2" : "shadow-lg"
      } ${
        membership.isPremium
          ? "bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 text-white col-span-1 md:col-span-2 lg:col-span-1"
          : "bg-white border border-stone-200"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Premium Ribbon */}
      {membership.isPremium && (
        <div className="absolute top-0 right-0 z-10">
          <div className="relative">
            <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 text-xs font-bold px-6 py-2 rounded-bl-2xl shadow-lg">
              ★ PREMIUM
            </div>
          </div>
        </div>
      )}

      {/* Free Badge */}
      {membership.isFree && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-200">
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            FREE
          </span>
        </div>
      )}

      {/* Card Content */}
      <div className="p-8 lg:p-10">
        {/* Icon */}
        <div
          className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl mb-6 transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          } ${
            membership.isPremium
              ? "bg-gradient-to-br from-amber-400 to-yellow-500 text-amber-900 shadow-lg shadow-amber-500/30"
              : "bg-gradient-to-br from-amber-100 to-amber-200 text-amber-800"
          }`}
        >
          {getIcon(membership.iconType)}
        </div>

        {/* Title */}
        <h3
          className={`text-xl lg:text-2xl font-bold mb-4 ${
            membership.isPremium ? "text-white" : "text-stone-800"
          }`}
        >
          {membership.title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm lg:text-base leading-relaxed mb-6 ${
            membership.isPremium ? "text-amber-100/80" : "text-stone-600"
          }`}
        >
          {membership.description}
        </p>

        {/* Benefits */}
        <div className="mb-8">
          <h4
            className={`text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2 ${
              membership.isPremium ? "text-amber-300" : "text-amber-700"
            }`}
          >
            <Icons.Star className="w-4 h-4" />
            Key Benefits
          </h4>
          <ul className="space-y-3">
            {membership.benefits.map((benefit, benefitIndex) => (
              <li key={benefitIndex} className="flex items-start gap-3">
                <div
                  className={`flex-shrink-0 mt-0.5 ${
                    membership.isPremium ? "text-amber-400" : "text-amber-600"
                  }`}
                >
                  <Icons.Check className="w-5 h-5" />
                </div>
                <span
                  className={`text-sm leading-relaxed ${
                    membership.isPremium ? "text-amber-50/90" : "text-stone-600"
                  }`}
                >
                  {benefit.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Link
          href={"subscribe"}
          className={`group inline-flex items-center justify-center w-full py-4 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
            membership.isPremium
              ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 hover:from-amber-300 hover:to-yellow-400 shadow-lg shadow-amber-500/30 hover:shadow-xl"
              : membership.isFree
                ? "bg-stone-100 text-stone-700 hover:bg-stone-200 border-2 border-stone-200 hover:border-stone-300"
                : "bg-gradient-to-r from-amber-700 to-amber-800 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-800/20 hover:shadow-xl"
          }`}
        >
          <Icons.CreditCard className="w-5 h-5 mr-2" />
          {membership.buttonText}
          <Icons.ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Decorative Border for Premium */}
      {membership.isPremium && (
        <div className="absolute inset-0 rounded-2xl border-2 border-amber-500/20 pointer-events-none"></div>
      )}
    </div>
  );
};
