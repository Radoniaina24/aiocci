// components/AboutAIOCCI.tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-300 hover:-translate-y-1">
    <div className="w-14 h-14 bg-gradient-to-br from-amber-700 to-amber-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-amber-900 mb-2">{title}</h3>
    <p className="text-amber-800/70 text-sm leading-relaxed">{description}</p>
  </div>
);

const AboutAIOCCI: React.FC = () => {
  const t = useTranslations("AboutAIOCCI");

  return (
    <section className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 py-20 px-4 relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-800 via-amber-700 to-orange-800 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full" />
        </div>

        {/* Content Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-amber-200/50 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-amber-600 via-amber-700 to-orange-700" />

          <div className="p-8 md:p-12 lg:p-16 space-y-12">
            {/* Paragraph 1 */}
            <p className="text-lg text-amber-900 leading-relaxed font-light">
              <span className="font-bold text-amber-800">
                {t("paragraph1.highlight")}
              </span>{" "}
              {t("paragraph1.text")}
            </p>

            <Divider />

            {/* Paragraph 2 */}
            <p className="text-lg text-amber-900 leading-relaxed font-light">
              <span className="font-bold text-amber-800">
                {t("paragraph2.highlight")}
              </span>{" "}
              {t("paragraph2.text")}
            </p>

            <Divider />

            {/* Paragraph 3 */}
            <p className="text-lg text-amber-900 leading-relaxed font-light">
              {t("paragraph3.text")}{" "}
              <span className="font-bold text-amber-800">
                {t("paragraph3.highlight")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Divider = () => (
  <div className="flex items-center gap-4">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
    <div className="flex gap-1.5">
      <span className="w-2 h-2 bg-amber-400 rounded-full" />
      <span className="w-2 h-2 bg-amber-600 rounded-full" />
      <span className="w-2 h-2 bg-amber-800 rounded-full" />
    </div>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
  </div>
);

export default AboutAIOCCI;
