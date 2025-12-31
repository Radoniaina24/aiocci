"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Icon from "@/components/ui/AppIcon";
import { Eye, Target, ChevronRight, Quote } from "lucide-react";

interface VisionMissionItem {
  type: "vision" | "mission";
  title: string;
  description: string;
  icon: string;
}

interface VisionMissionProps {
  items: VisionMissionItem[];
}

const VisionMission: React.FC<VisionMissionProps> = ({ items }) => {
  const t = useTranslations("about");
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const typeIcons = {
    vision: Eye,
    mission: Target,
  };

  const typeColors = {
    vision: {
      bg: "bg-secondary",
      bgLight: "bg-secondary/10",
      text: "text-secondary",
      border: "border-secondary",
      gradient: "from-secondary to-secondary/70",
    },
    mission: {
      bg: "bg-accent",
      bgLight: "bg-accent/10",
      text: "text-accent",
      border: "border-accent",
      gradient: "from-accent to-accent/70",
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header avec tabs */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              {/* Titre */}
              <div className="max-w-2xl">
                <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-textPrimary mb-4">
                  {t("section.title")}
                </h2>
                <p className="font-sourceSans text-xl text-textSecondary leading-relaxed">
                  {t("section.subtitle")}
                </p>
              </div>

              {/* Tabs de navigation */}
              <div className="flex gap-2 p-1.5 bg-surface rounded-2xl">
                {(["vision", "mission"] as const).map((type) => {
                  const TypeIcon = typeIcons[type];
                  const colors = typeColors[type];
                  const isActive = activeTab === type;

                  return (
                    <button
                      key={type}
                      onClick={() => setActiveTab(type)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        isActive
                          ? `${colors.bg} text-white shadow-lg`
                          : "text-textSecondary hover:text-textPrimary hover:bg-card"
                      }`}
                    >
                      <TypeIcon className="w-5 h-5" />
                      <span className="capitalize">{type}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contenu des cards avec transition */}
          <div className="relative">
            {items.map((item, index) => {
              const colors = typeColors[item.type];
              const isActive = activeTab === item.type;

              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    isActive
                      ? "opacity-100 translate-x-0 relative"
                      : "opacity-0 translate-x-8 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
                    {/* Colonne droite - Contenu détaillé */}
                    <div className="lg:col-span-3 flex flex-col justify-center">
                      {/* Citation/Description principale */}
                      <div className="relative mb-8">
                        <Quote
                          className={`absolute -top-4 -left-4 w-12 h-12 ${colors.text} opacity-20`}
                        />
                        <blockquote className="pl-8 border-l-4 border-primary/20">
                          <p className="font-sourceSans text-2xl md:text-3xl text-textPrimary leading-relaxed italic">
                            {item.description.split(".")[0]}.
                          </p>
                        </blockquote>
                      </div>

                      {/* Description complémentaire */}
                      {item.description.split(".").length > 1 && (
                        <p className="font-sourceSans text-sm text-textSecondary leading-relaxed mb-8">
                          {item.description
                            .split(".")
                            .slice(1)
                            .join(".")
                            .trim()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicateurs de navigation mobile */}
          <div className="flex justify-center gap-3 mt-12 lg:hidden">
            {(["vision", "mission"] as const).map((type) => {
              const colors = typeColors[type];
              return (
                <button
                  key={type}
                  onClick={() => setActiveTab(type)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTab === type ? colors.bg : "bg-border"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
