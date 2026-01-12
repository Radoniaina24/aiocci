// components/AboutAIOCCI.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Globe,
  Ship,
  Zap,
  Target,
  MapPin,
  Handshake,
  Users,
  Quote,
  Sparkles,
  CircleDot,
} from "lucide-react";
import Image from "next/image";

interface NavigationSection {
  id: string;
  icon: React.ReactNode;
  labelKey: string;
}

const AboutAIOCCI: React.FC = () => {
  const t = useTranslations("aboutAIOCCI");

  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const navigationSections: NavigationSection[] = [
    {
      id: "intro",
      icon: <Globe className="w-5 h-5" />,
      labelKey: "navigation.intro",
    },
    {
      id: "africa",
      icon: <MapPin className="w-5 h-5" />,
      labelKey: "navigation.africa",
    },
    {
      id: "indian-ocean",
      icon: <Ship className="w-5 h-5" />,
      labelKey: "navigation.indianOcean",
    },
    {
      id: "synergy",
      icon: <Zap className="w-5 h-5" />,
      labelKey: "navigation.synergy",
    },
    {
      id: "aiocci",
      icon: <Target className="w-5 h-5" />,
      labelKey: "navigation.aiocci",
    },
  ];

  const tags = [
    t("tags.maritimeHub"),
    t("tags.financialCenter"),
    t("tags.tradeGateway"),
  ];

  const bottomStats = [
    {
      icon: <MapPin className="w-4 h-4" />,
      value: "54+",
      labelKey: "stats.africanCountries",
    },
    {
      icon: <Ship className="w-4 h-4" />,
      value: "20+",
      labelKey: "stats.indianOceanNations",
    },
    {
      icon: <Handshake className="w-4 h-4" />,
      value: "70+",
      labelKey: "stats.partnerCountries",
    },
    {
      icon: <Users className="w-4 h-4" />,
      value: "2B+",
      labelKey: "stats.peopleRepresented",
    },
  ];

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

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const progress = scrollTop / (scrollHeight - clientHeight);
        setScrollProgress(progress);

        const sectionProgress = progress * navigationSections.length;
        setActiveSection(
          Math.min(Math.floor(sectionProgress), navigationSections.length - 1)
        );
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [navigationSections.length]);

  const scrollToSection = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const targetScroll = (scrollHeight / navigationSections.length) * index;
      container.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-stone-50 via-amber-50/50 to-orange-50/30 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl" />

        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="dots-pattern"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="1"
                  cy="1"
                  r="0.5"
                  fill="currentColor"
                  className="text-amber-900"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* ========== HEADER ========== */}
          <div
            className={`text-center mb-8 md:mb-12 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-200 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span className="text-sm font-semibold text-amber-800">
                {t("badge")}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
              {t("title")}
            </h2>

            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-0.5 bg-gradient-to-r from-transparent to-amber-500" />
              <CircleDot className="w-4 h-4 text-amber-600" />
              <div className="w-10 h-0.5 bg-gradient-to-l from-transparent to-amber-500" />
            </div>
          </div>

          {/* ========== MAIN CONTENT LAYOUT ========== */}
          <div
            className={`flex flex-col lg:flex-row gap-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Navigation Sidebar */}
            <div className="lg:w-48 flex-shrink-0">
              <div className="lg:sticky lg:top-8">
                {/* Progress Bar - Mobile */}
                <div className="lg:hidden mb-4">
                  <div className="h-1 bg-amber-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
                      style={{ width: `${scrollProgress * 100}%` }}
                    />
                  </div>
                </div>

                {/* Navigation Items */}
                <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
                  {navigationSections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(index)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        activeSection === index
                          ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg"
                          : "bg-white/60 text-amber-800 hover:bg-amber-100"
                      }`}
                    >
                      <span
                        className={`transition-transform duration-300 ${
                          activeSection === index ? "scale-110" : ""
                        }`}
                      >
                        {section.icon}
                      </span>
                      <span className="hidden sm:inline">
                        {t(section.labelKey)}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Progress Bar - Desktop */}
                <div className="hidden lg:block mt-6">
                  <div className="w-1 h-32 bg-amber-100 rounded-full mx-auto overflow-hidden">
                    <div
                      className="w-full bg-gradient-to-b from-amber-500 to-orange-500 transition-all duration-300"
                      style={{ height: `${scrollProgress * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div
              ref={containerRef}
              className="flex-1 max-h-[600px] overflow-y-auto pr-2 space-y-6 custom-scrollbar"
            >
              {/* Section 1: Introduction */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-100 shadow-lg p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-md mb-3">
                      {t("paragraph1.highlight")}
                    </span>
                    <p className="text-amber-800 text-sm leading-relaxed mb-3">
                      {t("paragraph1.text")}
                    </p>
                    <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-xl border-l-4 border-amber-400">
                      <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-700 italic">
                        {t("paragraph1.subtext")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Africa */}
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl shadow-lg p-5 md:p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">
                      {t("paragraph2.highlight")}
                    </h3>
                    <p className="text-amber-100 text-sm leading-relaxed">
                      {t("paragraph2.text")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3: Indian Ocean */}
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl shadow-lg p-5 md:p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Ship className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">
                      {t("paragraph3.highlight")}
                    </h3>
                    <p className="text-orange-100 text-sm leading-relaxed">
                      {t("paragraph3.text")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4: Synergy */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-100 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-amber-800 to-stone-800 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {t("paragraph4.title")}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-amber-800 text-sm leading-relaxed mb-4">
                    {t("paragraph4.text")}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-4 h-4 text-amber-600" />
                        <span className="text-xs font-semibold text-amber-800">
                          {t("synergy.africaOffers")}
                        </span>
                      </div>
                      <p className="text-xs text-amber-700">
                        {t("synergy.africaDescription")}
                      </p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Ship className="w-4 h-4 text-orange-600" />
                        <span className="text-xs font-semibold text-orange-800">
                          {t("synergy.indianOceanProvides")}
                        </span>
                      </div>
                      <p className="text-xs text-orange-700">
                        {t("synergy.indianOceanDescription")}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-amber-600 italic border-l-2 border-amber-300 pl-3">
                    {t("paragraph5.text")}
                  </p>
                </div>
              </div>

              {/* Section 5: AIOCCI */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-100 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {t("paragraph6.title")}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-amber-800 text-sm leading-relaxed mb-3">
                    {t("paragraph6.text")}
                  </p>

                  <div className="flex items-start gap-2 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl mb-3">
                    <Handshake className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-700">
                      {t("paragraph6.details")}
                    </p>
                  </div>

                  <p className="text-xs text-amber-700 leading-relaxed">
                    {t("paragraph7.text")}
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="relative bg-gradient-to-br from-stone-800 via-amber-900 to-stone-900 rounded-2xl p-5 md:p-6 text-white overflow-hidden">
                <Quote className="absolute top-3 left-3 w-10 h-10 text-white/10" />

                <div className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-4">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span className="text-xs text-amber-200">
                          {t("conclusion.badge")}
                        </span>
                      </div>

                      <blockquote className="text-base md:text-lg font-semibold mb-3 leading-relaxed">
                        "{t("conclusion.highlight")}"
                      </blockquote>

                      <p className="text-amber-200 text-sm mb-6">
                        {t("conclusion.text")}
                      </p>

                      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                        <div>
                          <p className="text-xs text-amber-300/60">
                            {t("footer")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Image
                        src={
                          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768221284/ocean_itnjs2.jpg"
                        }
                        alt=""
                        width={450}
                        height={450}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAIOCCI;
