// components/InstitutionalPartners.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Partner {
  id: number;
  nameKey: string;
  logo: string;
  url?: string;
}

interface InstitutionalPartnersProps {
  partners?: Partner[];
}

const defaultPartners: Partner[] = [
  {
    id: 1,
    nameKey: "partners.partnerOne",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768826246/fcc_suvb9u.jpg",
    url: "https://partner1.com",
  },
  {
    id: 2,
    nameKey: "partners.partnerTwo",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768826246/cci_lkyyvd.jpg",
    url: "https://partner2.com",
  },
];

const InstitutionalPartners: React.FC<InstitutionalPartnersProps> = ({
  partners = defaultPartners,
}) => {
  const t = useTranslations("institutionalPartners");

  return (
    <section className="bg-gradient-to-br from-amber-950 via-amber-900  to-amber-800 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t("title")}
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-amber-500 to-amber-400 mx-auto rounded-full" />
        </div>

        {/* Logos */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-16 lg:gap-32">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label={t(partner.nameKey)}
            >
              <div className="relative w-44 h-28 sm:w-52 sm:h-32 lg:w-64 lg:h-40 bg-white/10 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-4 transition-all duration-300 hover:bg-white/15 hover:border-amber-400/40 hover:scale-105 hover:shadow-xl hover:shadow-amber-900/30">
                <Image
                  src={partner.logo}
                  alt={t(partner.nameKey)}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionalPartners;
