"use client";

import React, { useEffect, useRef, useState } from "react";
import AppImage from "@/components/ui/AppImage";
import { Quote, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

interface FoundingStoryProps {
  story: {
    year: string;
    title: string;
    description: string;
    image: string;
    alt: string;
  };
}

const FoundingStory: React.FC<FoundingStoryProps> = ({ story }) => {
  const t = useTranslations("about");
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Séparer les paragraphes
  const paragraphs = story.description.split("\n").filter((p) => p.trim());

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-amber-50 to-orange-50/50 overflow-hidden"
    >
      {/* Éléments décoratifs de fond - Thème Marron */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cercle décoratif */}
        <div className="absolute top-20 -left-32 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

        {/* Motif de lignes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <svg
            className="w-full h-full text-amber-900"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header de section - Thème Marron */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-200 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span className="text-sm font-semibold text-amber-800">
                {t("title")}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Colonne Image */}
            <div
              className={`order-2 lg:order-1 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="relative">
                {/* Cadre décoratif derrière l'image - Thème Marron */}
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/20 via-orange-300/10 to-amber-400/20 rounded-3xl blur-sm" />
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-300/10 to-orange-300/10 rounded-2xl" />

                {/* Conteneur image principal */}
                <div className="relative group">
                  {/* Image */}
                  <div className="relative h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-xl shadow-amber-900/10">
                    <AppImage
                      src={story.image}
                      alt={story.alt}
                      fill
                      className={`object-cover transition-all duration-700 group-hover:scale-105 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => setImageLoaded(true)}
                    />

                    {/* Overlay gradient - Thème Marron */}
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Skeleton loader */}
                    {!imageLoaded && (
                      <div className="absolute inset-0 bg-amber-100 animate-pulse" />
                    )}
                  </div>

                  {/* Badge année flottant - Thème Marron */}
                  {story.year && (
                    <div className="absolute -bottom-6 -right-6 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-amber-600 rounded-2xl blur-lg opacity-40" />
                        <div className="relative bg-gradient-to-br from-amber-700 to-amber-800 text-amber-50 px-6 py-4 rounded-2xl shadow-lg shadow-amber-700/30">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span className="text-sm font-medium">
                              {t("founded")}
                            </span>
                          </div>
                          <span className="text-3xl font-bold block mt-1">
                            {story.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Élément décoratif coin supérieur gauche - Thème Marron */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-amber-500/40 rounded-tl-3xl" />
                </div>

                {/* Points décoratifs - Thème Marron */}
                <div className="absolute -bottom-8 -left-8 grid grid-cols-4 gap-2 opacity-40">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-amber-600 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Colonne Texte */}
            <div
              className={`order-1 lg:order-2 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              {/* Titre - Thème Marron */}
              <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-amber-950 mb-8 leading-tight">
                {story.title.split(" ").map((word, index, array) => (
                  <span key={index}>
                    {index === array.length - 1 ? (
                      <span className="relative inline-block">
                        <span className="relative z-10 text-amber-700">
                          {word}
                        </span>
                        <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-300/40 -z-0" />
                      </span>
                    ) : (
                      word + " "
                    )}
                  </span>
                ))}
              </h2>

              {/* Citation en vedette - Thème Marron */}
              <div className="relative mb-8 pl-6 border-l-4 border-amber-500/50">
                <Quote className="absolute -top-2 -left-3 w-8 h-8 text-amber-400/40" />
                <p className="font-sourceSans text-xl text-amber-900 italic leading-relaxed">
                  {paragraphs[0]}
                </p>
              </div>

              {/* Autres paragraphes - Thème Marron */}
              <div className="space-y-4 mb-8">
                {paragraphs.slice(1).map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-sourceSans text-lg text-amber-800/80 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Ligne de séparation animée - Thème Marron */}
              <div className="relative h-px w-full bg-amber-200 mb-8 overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r from-amber-600 to-orange-500 transition-all duration-1000 delay-700 ${
                    isVisible ? "w-full" : "w-0"
                  }`}
                />
              </div>

              {/* Stats ou points clés - Thème Marron */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                      <span className="text-amber-700 font-bold">54+</span>
                    </div>
                    <span className="text-amber-700 text-sm">
                      {t("countries")}
                    </span>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                      <span className="text-orange-700 font-bold">500+</span>
                    </div>
                    <span className="text-amber-700 text-sm">
                      {t("activeMembers")}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA - Thème Marron (décommenté et stylisé) */}
              {/* <button
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-700 to-amber-800 text-amber-50 rounded-xl font-semibold hover:from-amber-800 hover:to-amber-900 transition-all duration-300 shadow-lg shadow-amber-700/25"
              >
                Découvrir nos services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Ligne décorative bas de section - Thème Marron */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
    </section>
  );
};

export default FoundingStory;
