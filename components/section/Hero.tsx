"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

export default function Hero() {
  const t = useTranslations("hero");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 text-white py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {t("title.line1")}
          <br />
          {t("title.line2")}
        </h1>

        {/* Acronym */}
        <p className="text-xl md:text-2xl mb-4 text-blue-100 font-semibold">
          {t("acronym")}
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
          {t("tagline")}
        </p>

        {/* Content box */}
        <div className="max-w-4xl mx-auto mb-12 bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {t("welcome.title")}
          </h2>

          <p className="text-lg leading-relaxed mb-4">
            {t("welcome.paragraph1")}
          </p>
          <p className="text-lg leading-relaxed mb-4">
            {t("welcome.paragraph2")}
          </p>
          <p className="text-lg leading-relaxed">{t("welcome.paragraph3")}</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("membership")}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6"
          >
            {t("actions.becomeMember")}
          </Button>

          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            variant="outline"
            className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-6"
          >
            {t("actions.contact")}
          </Button>
        </div>
      </div>
    </section>
  );
}
