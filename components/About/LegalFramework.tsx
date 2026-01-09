// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import {
//   Scale,
//   MapPin,
//   Building2,
//   Globe,
//   FileText,
//   Landmark,
//   ChevronRight,
//   Shield,
//   BookOpen,
// } from "lucide-react";
// import { useTranslations } from "next-intl";

// interface Address {
//   country: string;
//   flag: string;
//   lines: string[];
// }

// const LegalFramework: React.FC = () => {
//   const t = useTranslations("legalFramework");
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeCard, setActiveCard] = useState<number | null>(null);
//   const sectionRef = useRef<HTMLElement>(null);

//   const addresses: Address[] = t.raw("addresses");

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setIsVisible(true),
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-20 md:py-28 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-100 overflow-hidden"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div
//             className={`text-center mb-16 transition-all duration-700 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10"
//             }`}
//           >
//             <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-100 to-stone-100 border border-amber-200/60 rounded-full mb-6 shadow-sm">
//               <Shield className="w-4 h-4 text-amber-800" />
//               <span className="text-sm font-semibold text-amber-900 tracking-wide">
//                 {t("subtitle")}
//               </span>
//             </div>

//             <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6">
//               <span className="text-stone-800">{t("title.part1")}</span>{" "}
//               <span className="relative inline-block">
//                 <span className="relative z-10 text-amber-800">
//                   {t("title.part2")}
//                 </span>
//                 <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-300/40 -z-0 rounded" />
//               </span>
//             </h2>

//             <div className="flex items-center justify-center gap-4 mb-8">
//               <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400" />
//               <Scale className="w-6 h-6 text-amber-700" />
//               <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400" />
//             </div>

//             <div className="max-w-4xl mx-auto relative">
//               <BookOpen className="absolute -left-8 top-0 w-6 h-6 text-amber-300 hidden lg:block" />
//               <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
//                 {t("description")}
//               </p>
//               <BookOpen className="absolute -right-8 bottom-0 w-6 h-6 text-amber-300 hidden lg:block rotate-180" />
//             </div>
//           </div>

//           {/* Status Cards */}
//           <div className="grid md:grid-cols-2 gap-6 mb-12">
//             <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200">
//               <FileText className="w-8 h-8 text-amber-700 mb-4" />
//               <h3 className="text-sm font-bold text-stone-500 uppercase mb-2">
//                 {t("legalStatus.label")}
//               </h3>
//               <p className="font-serif font-bold text-2xl text-stone-900">
//                 {t("legalStatus.value")}
//               </p>
//             </div>

//             <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200">
//               <Landmark className="w-8 h-8 text-stone-700 mb-4" />
//               <h3 className="text-sm font-bold text-stone-500 uppercase mb-2">
//                 {t("headquarters.label")}
//               </h3>
//               <p className="font-serif font-bold text-2xl text-stone-900">
//                 {t("headquarters.value")}
//               </p>
//             </div>
//           </div>

//           {/* Addresses */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {addresses.map((address, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl border border-stone-200 shadow-lg"
//               >
//                 <div className="px-6 py-5 bg-amber-800 text-white flex items-center gap-4">
//                   <span className="text-3xl">{address.flag}</span>
//                   <div>
//                     <h4 className="font-serif font-bold text-xl">
//                       {address.country}
//                     </h4>
//                     <p className="text-amber-200 text-sm">
//                       {t("officialRepresentation")}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="p-6 space-y-2">
//                   {address.lines.map((line, i) => (
//                     <p
//                       key={i}
//                       className={
//                         i === address.lines.length - 1
//                           ? "font-semibold text-amber-800"
//                           : "text-stone-600"
//                       }
//                     >
//                       {line}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Expansion */}
//           <div className="mt-12 bg-gradient-to-r from-amber-800 to-stone-800 rounded-2xl p-8 text-white">
//             <h4 className="text-amber-200 text-sm uppercase mb-2">
//               {t("expansion.title")}
//             </h4>
//             <p className="text-lg">{t("expansion.note")}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LegalFramework;

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Scale,
  MapPin,
  Building2,
  Globe,
  FileText,
  Landmark,
  ChevronRight,
  Shield,
  BookOpen,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface Address {
  country: string;
  flag: string;
  lines: string[];
}

interface LegalFrameworkData {
  title: string;
  subtitle: string;
  description: string;
  legalStatus: {
    label: string;
    value: string;
  };
  headquarters: {
    label: string;
    value: string;
  };
  addresses: Address[];
  expansionNote: string;
}

const LegalFramework: React.FC = () => {
  const t = useTranslations("legalFramework");
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const data: LegalFrameworkData = {
    title: "Legal Framework",
    subtitle: "Governance & Compliance",
    description:
      "AIOCCI is governed by Ordinance No. 60-133 of 03 October 1960 relating to associations in the Republic of Madagascar and operates in full compliance with all applicable national and international regulations.",
    legalStatus: {
      label: "Legal Status",
      value: "Non-profit Association",
    },
    headquarters: {
      label: "Registered Headquarters",
      value: "Antananarivo, Republic of Madagascar",
    },
    addresses: [
      {
        country: "Madagascar",
        flag: "🇲🇬",
        lines: [
          "Lot II A 105 E Nanisa Iadiambola",
          "Gate Africa Group Building",
          "Antananarivo, Madagascar",
        ],
      },
      {
        country: "Mauritius",
        flag: "🇲🇺",
        lines: [
          "Villa No. 1, Chemin Desvaux",
          "Petit Verger, Saint Pierre",
          "Mauritius",
        ],
      },
    ],
    expansionNote:
      "AIOCCI is currently expanding its institutional presence and will establish additional representations in other countries in the near future.",
  };
  const addresses: Address[] = t.raw("addresses");

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

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-100 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-stone-300/20 rounded-full blur-3xl" />

        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="legal-pattern"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="#78350f"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#legal-pattern)" />
          </svg>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-amber-900/5" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-amber-900/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-100 to-stone-100 border border-amber-200/60 rounded-full mb-6 shadow-sm">
              <Shield className="w-4 h-4 text-amber-800" />
              <span className="text-sm font-semibold text-amber-900 tracking-wide">
                {t("subtitle")}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6">
              <span className="text-stone-800">{t("title.part1")}</span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-amber-800">
                  {" "}
                  {t("title.part2")}
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-300/40 -z-0 rounded" />
              </span>
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400" />
              <Scale className="w-6 h-6 text-amber-700" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            {/* Main Description */}
            <div className="max-w-4xl mx-auto relative">
              <BookOpen className="absolute -left-8 top-0 w-6 h-6 text-amber-300 hidden lg:block" />
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
                {t("description")}
              </p>
              <BookOpen className="absolute -right-8 bottom-0 w-6 h-6 text-amber-300 hidden lg:block transform rotate-180" />
            </div>
          </div>

          {/* Status Cards */}
          <div
            className={`grid md:grid-cols-2 gap-6 mb-12 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Legal Status Card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-stone-200/50 border border-stone-200 hover:shadow-xl hover:border-amber-300 transition-all duration-300 overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-600/30 group-hover:scale-105 transition-transform duration-300">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-2">
                    {t("legalStatus.label")}
                  </h3>
                  <p className="font-serif font-bold text-2xl text-stone-900">
                    {t("legalStatus.value")}
                  </p>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-100 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
            </div>

            {/* Headquarters Card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-stone-200/50 border border-stone-200 hover:shadow-xl hover:border-amber-300 transition-all duration-300 overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-stone-600 to-stone-800 rounded-2xl flex items-center justify-center shadow-lg shadow-stone-600/30 group-hover:scale-105 transition-transform duration-300">
                    <Landmark className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-2">
                    {t("headquarters.label")}
                  </h3>
                  <p className="font-serif font-bold text-2xl text-stone-900">
                    {t("headquarters.value")}
                  </p>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-stone-100 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
            </div>
          </div>

          {/* Registered Addresses Section */}
          <div
            className={`mb-12 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Title */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-900 rounded-xl flex items-center justify-center shadow-md">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-stone-900">
                  Registered Addresses
                </h3>
                <p className="text-stone-500 text-sm">
                  Our official office locations
                </p>
              </div>
            </div>

            {/* Address Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {addresses.map((address, index) => (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-amber-400 shadow-lg shadow-stone-200/50 hover:shadow-xl transition-all duration-500 cursor-pointer ${
                    activeCard === index ? "ring-2 ring-amber-400" : ""
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Country Header */}
                  <div className="relative px-6 py-5 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800">
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <svg
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <pattern
                            id={`header-pattern-${index}`}
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                          >
                            <circle cx="2" cy="2" r="1" fill="white" />
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          fill={`url(#header-pattern-${index})`}
                        />
                      </svg>
                    </div>

                    <div className="relative flex items-center gap-4">
                      <span className="text-3xl">{address.flag}</span>
                      <div>
                        <h4 className="font-serif font-bold text-xl text-white">
                          {address.country}
                        </h4>
                        <p className="text-amber-200 text-sm">
                          Official Representation
                        </p>
                      </div>
                    </div>

                    {/* Decorative Circle */}
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full" />
                  </div>

                  {/* Address Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mt-1">
                        <Building2 className="w-5 h-5 text-amber-700" />
                      </div>
                      <div className="flex-1 space-y-2">
                        {address.lines.map((line, lineIndex) => (
                          <p
                            key={lineIndex}
                            className={`text-base ${
                              lineIndex === address.lines.length - 1
                                ? "font-semibold text-amber-800"
                                : "text-stone-600"
                            }`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
            </div>
          </div>

          {/* Expansion Note */}
          <div
            className={`transition-all duration-700 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-gradient-to-r from-amber-800 via-amber-700 to-stone-800 rounded-2xl p-8 md:p-10 overflow-hidden shadow-xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="expansion-dots"
                      width="30"
                      height="30"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="3" cy="3" r="1.5" fill="white" />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#expansion-dots)"
                  />
                </svg>
              </div>

              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />

              <div className="relative flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h4 className="font-bold text-amber-200 text-sm uppercase tracking-wider mb-2">
                    {t("expansion.title")}
                  </h4>
                  <p className="text-white text-lg leading-relaxed">
                    {t("expansion.note")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <div className="w-3 h-3 bg-amber-500 rounded-full" />
              <div className="w-4 h-4 bg-amber-600 rounded-full" />
              <div className="w-3 h-3 bg-amber-500 rounded-full" />
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-30" />
    </section>
  );
};

export default LegalFramework;
