// components/AfricaVisionaryAwards.tsx

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

interface AfricaVisionaryAwardsProps {
  imageSrc?: string;
  imageAlt?: string;
  aiocciLogoSrc?: string;
  ccimmLogoSrc?: string;
}

const AfricaVisionaryAwards: React.FC<AfricaVisionaryAwardsProps> = ({
  imageSrc = "/images/africa-awards.jpg",
  imageAlt,
  aiocciLogoSrc = "/images/logos/aiocci-logo.png",
  ccimmLogoSrc = "/images/logos/ccimm-logo.png",
}) => {
  const t = useTranslations("africaVisionaryAwards");

  return (
    <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-900/10 border border-amber-800/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-amber-700 rounded-full animate-pulse"></span>
              <span className="text-amber-900 text-sm font-medium tracking-wide uppercase">
                {t("badge")}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-950 mb-6 leading-tight">
              {t("title")}
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-16 bg-gradient-to-r from-amber-700 to-amber-500 rounded-full"></div>
              <div className="h-1 w-8 bg-amber-400 rounded-full"></div>
              <div className="h-1 w-4 bg-amber-300 rounded-full"></div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 text-amber-900/80 leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold text-amber-950">
                  {t("paragraphs.p1.highlight")}
                </span>{" "}
                {t("paragraphs.p1.text")}{" "}
                <span className="font-semibold text-amber-800">
                  {t("paragraphs.p1.aiocci")}
                </span>{" "}
                {t("paragraphs.p1.with")}{" "}
                <span className="font-semibold text-amber-800">
                  {t("paragraphs.p1.ccimm")}
                </span>
                .
              </p>

              <p>
                {t("paragraphs.p2.before")}{" "}
                <span className="font-semibold text-amber-950">
                  {t("paragraphs.p2.event")}
                </span>
                , {t("paragraphs.p2.after")}{" "}
                <span className="font-semibold text-amber-950">
                  {t("paragraphs.p2.venue")}
                </span>
                .
              </p>

              <p>{t("paragraphs.p3")}</p>

              <p className="italic text-amber-800 border-l-4 border-amber-600 pl-4 bg-amber-100/50 py-3 rounded-r-lg">
                {t("paragraphs.note")}
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-tr from-amber-500/20 to-orange-600/20 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-amber-600 to-amber-800 rounded-2xl transform -rotate-2 opacity-15"></div>

              <div className="relative bg-gradient-to-br from-amber-800 to-amber-950 rounded-2xl p-3 shadow-2xl shadow-amber-900/40">
                <div className="relative bg-white rounded-xl overflow-hidden">
                  <div
                    className="relative w-full"
                    style={{ minHeight: "400px" }}
                  >
                    <Image
                      src={imageSrc}
                      alt={imageAlt ?? t("imageAlt")}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-20 pt-12 border-t border-amber-800/20">
          <p className="text-center text-amber-800 text-sm font-medium mb-8 uppercase tracking-wider">
            {t("organizedBy")}
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            {/* AIOCCI */}
            <div className="group flex items-center gap-4 bg-white/80 px-8 py-4 rounded-2xl shadow-lg border border-amber-100">
              <div className="relative w-16 h-16">
                <Image
                  src={aiocciLogoSrc}
                  alt={t("aiocci.alt")}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-amber-950">AIOCCI</p>
                <p className="text-amber-700 text-xs">{t("aiocci.label")}</p>
              </div>
            </div>

            {/* CCIMM */}
            <div className="group flex items-center gap-4 bg-white/80 px-8 py-4 rounded-2xl shadow-lg border border-amber-100">
              <div className="relative w-16 h-16">
                <Image
                  src={ccimmLogoSrc}
                  alt={t("ccimm.alt")}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-amber-950">CCIMM</p>
                <p className="text-amber-700 text-xs">{t("ccimm.label")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfricaVisionaryAwards;
