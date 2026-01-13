"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Award,
  Handshake,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Globe,
  Shield,
  Target,
  Layers,
  Network,
  BadgeCheck,
  Building,
  Users2,
  Landmark,
  Briefcase,
  GraduationCap,
} from "lucide-react";

// Composant pour le pattern de fond
const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Gradient de base */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

    {/* Cercles décoratifs */}
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-amber-100/40 to-rose-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

    {/* Pattern de grille */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  </div>
);

// Composant pour les lignes connectées animées
const ConnectionLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg
      className="absolute w-full h-full opacity-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,200 Q400,100 800,200 T1600,200"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        className="animate-pulse"
      />
      <path
        d="M0,400 Q400,300 800,400 T1600,400"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        className="animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </svg>
  </div>
);

// Badge de section
const SectionBadge = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-900/5 to-gray-900/10 border border-gray-200 shadow-sm">
    <Icon className="w-4 h-4 text-blue-600" />
    <span className="text-sm font-medium text-gray-700">{text}</span>
  </div>
);

// Composant List Item amélioré
const PartnerListItem = ({
  item,
  index,
  accentColor,
}: {
  item: string;
  index: number;
  accentColor: string;
}) => {
  const colorClasses: Record<
    string,
    { bg: string; text: string; border: string }
  > = {
    amber: {
      bg: "bg-gradient-to-br from-amber-500 to-orange-500",
      text: "text-amber-600",
      border: "border-amber-200",
    },
    blue: {
      bg: "bg-gradient-to-br from-blue-500 to-indigo-500",
      text: "text-blue-600",
      border: "border-blue-200",
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <li
      className="group flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <CheckCircle2 className="w-4 h-4 text-white" />
      </div>
      <span className="text-gray-700 leading-relaxed pt-1 group-hover:text-gray-900 transition-colors">
        {item}
      </span>
    </li>
  );
};

// Icônes des partenaires
const PartnerIcons = () => {
  const icons = [Building, Users2, Landmark, Briefcase, GraduationCap, Globe];

  return (
    <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-gray-100">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-white hover:shadow-md hover:border-gray-200 transition-all duration-300 cursor-pointer group"
        >
          <Icon className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </div>
      ))}
    </div>
  );
};

// Carte de partenariat principale
const PartnershipCard = ({
  icon: Icon,
  title,
  intro,
  items,
  conclusion,
  accentColor,
  gradient,
  index,
}: {
  icon: React.ElementType;
  title: string;
  intro: string;
  items: string[];
  conclusion: string;
  accentColor: string;
  gradient: string;
  index: number;
}) => {
  const isLeft = index === 0;

  return (
    <div className="group relative">
      {/* Glow effect */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
      />

      <Card className="relative h-full bg-white/80 backdrop-blur-xl border border-gray-200/80 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-gray-300 rounded-2xl">
        {/* Top gradient bar */}
        <div
          className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradient}`}
        />

        {/* Corner decoration */}
        <div
          className={`absolute ${
            isLeft ? "top-0 right-0" : "top-0 left-0"
          } w-40 h-40 bg-gradient-to-br ${gradient} opacity-5 blur-2xl`}
        />

        <CardHeader className="relative pb-4 pt-8">
          {/* Icon container */}
          <div className="relative mb-6">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-lg opacity-30`}
            />
            <div
              className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center shadow-xl`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>

          <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </CardTitle>

          <p className="text-gray-600 leading-relaxed text-lg">{intro}</p>
        </CardHeader>

        <CardContent className="relative">
          {/* Items list */}
          <ul className="space-y-3 mb-6">
            {items.map((item: string, idx: number) => (
              <PartnerListItem
                key={idx}
                item={item}
                index={idx}
                accentColor={accentColor}
              />
            ))}
          </ul>

          {/* Conclusion */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 border border-gray-100">
            <p className="text-gray-700 leading-relaxed italic">
              "{conclusion}"
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Section statistiques
const PartnershipsStats = () => {
  const t = useTranslations("partnerships.stats");

  const stats = [
    { value: "150+", label: t("partners"), icon: Handshake },
    { value: "30+", label: t("countries"), icon: Globe },
    { value: "€50M+", label: t("funding"), icon: Target },
    { value: "95%", label: t("satisfaction"), icon: BadgeCheck },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="group relative p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-xl hover:border-gray-300 transition-all duration-300 text-center"
        >
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-100 mb-4 group-hover:scale-110 transition-transform duration-300">
            <stat.icon className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

// Trusted by section

// Composant principal
export default function Partnerships() {
  const t = useTranslations("partnerships");

  const cardsData = [
    {
      key: "collaboration",
      icon: Handshake,
      accentColor: "amber",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      itemsKey: "partners",
    },
    {
      key: "governance",
      icon: Award,
      accentColor: "blue",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      itemsKey: "principles",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <BackgroundPattern />
      <ConnectionLines />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge icon={Network} text={t("badge")} />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6">
            <span className="text-gray-900">{t("heading.line1")} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              {t("heading.highlight")}
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
              <Sparkles className="relative w-5 h-5 text-white" />
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("heading.description")}
          </p>
        </div>

        {/* Stats */}
        {/* <PartnershipsStats /> */}

        {/* Main Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cardsData.map((card, index) => (
            <PartnershipCard
              key={card.key}
              icon={card.icon}
              title={t(`${card.key}.title`)}
              intro={t(`${card.key}.intro`)}
              items={t.raw(`${card.key}.${card.itemsKey}`)}
              conclusion={t(`${card.key}.conclusion`)}
              accentColor={card.accentColor}
              gradient={card.gradient}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
