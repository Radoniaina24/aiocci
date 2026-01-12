"use client";

import React, { useEffect, useRef, useState } from "react";
import AppImage from "@/components/ui/AppImage";
import { Quote, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import VisionMission from "./VisionMission";
import AIOCCIValues from "./AIOCCIValues";

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
  const visionMission = [
    {
      type: "vision" as const,
      title: t("visionMission.vision.title"),
      description: t("visionMission.vision.description"),
      icon: "EyeIcon",
    },
    {
      type: "mission" as const,
      title: t("visionMission.mission.title"),
      description: t("visionMission.mission.description"),
      icon: "RocketLaunchIcon",
    },
  ];
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

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 ">
            {/* Colonne Texte */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              {/* Titre - Thème Marron */}
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-amber-950 mb-8 leading-tight">
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

              {/* Autres paragraphes - Thème Marron */}
              <AIOCCIValues />
            </div>

            <VisionMission items={visionMission} />
          </div>
        </div>
      </div>

      {/* Ligne décorative bas de section - Thème Marron */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
    </section>
  );
};

export default FoundingStory;
