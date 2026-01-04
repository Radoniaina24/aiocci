"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Globe,
  Users,
  Building2,
  TrendingUp,
  ArrowRight,
  Handshake,
  ChevronDown,
} from "lucide-react";

// Composant pour les éléments flottants
const FloatingElement = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <div
    className={`animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

// Composant pour le texte qui s'affiche lettre par lettre (effet machine à écrire)
const TypewriterText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text, started]);

  return <span>{displayedText}</span>;
};

export default function Hero() {
  const t = useTranslations("hero");
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Rotation automatique des features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Points clés extraits des paragraphes
  const features = [
    {
      icon: Globe,
      title: "Plateforme Économique",
      description:
        "Renforcement des échanges commerciaux entre l'Afrique et l'Océan Indien",
      color: "amber",
    },
    {
      icon: Handshake,
      title: "Réseautage Stratégique",
      description: "Connexion des entreprises, investisseurs et institutions",
      color: "orange",
    },
    {
      icon: TrendingUp,
      title: "Croissance Durable",
      description:
        "Partenariats transfrontaliers et intégration économique régionale",
      color: "yellow",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background - Thème Marron */}
      <div className="absolute inset-0">
        {/* Overlay gradient marron */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/95 via-amber-900/90 to-orange-900/95" />

        {/* Motif de points */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Cercles lumineux animés - Tons marron/ambre */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-4000" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Colonne gauche - Texte */}
          <div className="text-white space-y-6 md:space-y-8">
            {/* Badge AIOCCI - Thème Marron */}
            <div
              className={`inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-amber-400/30 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
              </span>
              <span className="text-base font-bold tracking-wider text-amber-300">
                {t("acronym")}
              </span>
            </div>

            {/* Titre principal - Thème Marron */}
            <h1 className="space-y-2">
              <span
                className={`block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight transition-all duration-700 delay-100 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {t("title.line1")}
              </span>
              <span
                className={`block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient transition-all duration-700 delay-200 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {t("title.line2")}
              </span>
            </h1>

            {/* Tagline - Thème Marron */}
            <p
              className={`text-xl md:text-2xl text-amber-200 font-medium border-l-4 border-amber-500 pl-4 transition-all duration-700 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {t("tagline")}
            </p>

            {/* Boutons CTA - Thème Marron */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                onClick={() => scrollToSection("membership")}
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-amber-700/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber-600/40 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t("actions.becomeMember")}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>

              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="group bg-white/5 backdrop-blur-sm border-amber-400/40 text-white hover:bg-white/15 hover:border-amber-300/60 text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                {t("actions.contact")}
              </Button>
            </div>
          </div>

          {/* Colonne droite - Card Welcome */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-y-0 lg:translate-x-0"
                : "opacity-0 translate-y-8 lg:translate-x-12"
            }`}
          >
            {/* Carte principale */}
            <div className="relative">
              {/* Effet de glow derrière la carte - Thème Marron */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-orange-500/20 rounded-3xl blur-2xl" />

              {/* Carte - Thème Marron */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-amber-400/20 overflow-hidden shadow-2xl">
                {/* Header de la carte avec image */}
                <div className="relative h-48 md:h-56">
                  <Image
                    src="/images/footerLogo.jpg"
                    alt="African Business Network"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 via-amber-900/50 to-transparent" />

                  {/* Titre sur l'image */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {t("welcome.title")}
                    </h2>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6 md:p-8 space-y-4">
                  <p className="text-amber-100 leading-relaxed text-sm md:text-base">
                    {t("welcome.paragraph1")}
                  </p>

                  <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

                  <p className="text-amber-200/80 leading-relaxed text-sm md:text-base">
                    {t("welcome.paragraph2")}
                  </p>

                  <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

                  <p className="text-amber-200/80 leading-relaxed text-sm md:text-base">
                    {t("welcome.paragraph3")}
                  </p>
                </div>

                {/* Footer avec icônes - Thème Marron */}
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="flex items-center justify-between pt-4 border-t border-amber-400/20">
                    <div className="flex -space-x-2">
                      {[Globe, Building2, Users, TrendingUp].map((Icon, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600/30 to-orange-500/30 border-2 border-amber-950 flex items-center justify-center"
                        >
                          <Icon className="w-5 h-5 text-amber-400" />
                        </div>
                      ))}
                    </div>
                    <span className="text-amber-400 text-sm font-medium">
                      Afrique • Océan Indien
                    </span>
                  </div>
                </div>
              </div>

              {/* Éléments flottants - Thème Marron */}
              <FloatingElement
                delay={0}
                className="absolute -top-6 -right-6 z-20 hidden md:block"
              >
                <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-4 shadow-lg shadow-amber-600/30">
                  <Globe className="w-8 h-8 text-white" />
                </div>
              </FloatingElement>

              <FloatingElement
                delay={0.5}
                className="absolute top-1/3 -left-6 z-20 hidden md:block"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 shadow-lg shadow-orange-500/30">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
              </FloatingElement>

              <FloatingElement
                delay={1}
                className="absolute -bottom-4 right-16 z-20 hidden md:block"
              >
                <div className="bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl p-4 shadow-lg shadow-yellow-500/30">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
