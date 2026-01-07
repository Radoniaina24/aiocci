"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  Calendar,
  MapPin,
  Users,
  Globe,
  Sparkles,
  Building2,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Star,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import CeoBusinessForumPage from "../CeoBusinessForum";
import CarrefourPage from "../Carrefour";
import EditorialPrestigePage from "../AIOCCIVision";

// Composant pour les particules décoratives
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        }}
      />
    ))}
  </div>
);

// Badge pour les événements
const EventBadge = ({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "featured" | "upcoming";
}) => {
  const variants = {
    default: "bg-white/10 text-white/80",
    featured: "bg-gradient-to-r from-amber-400 to-orange-500 text-white",
    upcoming: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}
    >
      {variant === "featured" && <Star className="w-3 h-3" />}
      {children}
    </span>
  );
};

// Carte événement flagship
const FlagshipEventCard = ({
  title,
  location,
  description,
  icon: Icon,
  gradient,
  accentColor,
  index,
}: {
  title: string;
  location: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  accentColor: string;
  index: number;
}) => (
  <div
    className="group relative"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    {/* Glow effect */}
    <div
      className={`absolute -inset-0.5 ${gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
    />

    <Card
      className={`relative h-full bg-gray-900/80 backdrop-blur-xl border border-white/10 overflow-hidden 
      hover:border-white/20 transition-all duration-500 hover:-translate-y-2`}
    >
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Corner decoration */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 ${gradient} opacity-20 blur-3xl`}
      />

      <CardHeader className="relative pb-4">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`p-3 rounded-xl ${gradient} shadow-lg shadow-${accentColor}-500/25`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <EventBadge variant="featured">Flagship</EventBadge>
        </div>

        <CardTitle className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
          {title}
        </CardTitle>

        <CardDescription className="flex items-center gap-2 text-gray-400 mt-2">
          <MapPin className="w-4 h-4" />
          {location}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative">
        <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
      </CardContent>

      {/* Bottom gradient line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
      />
    </Card>
  </div>
);

const InitiativeCard = ({
  title,
  location,
  description,
  icon: Icon,
  isFullWidth = false,
  date = "2023",
}: {
  title: string;
  location: string;
  description: string;
  icon: React.ElementType;
  isFullWidth?: boolean;
  date?: string;
}) => (
  <Card
    className={`group relative bg-gray-900/50 backdrop-blur-xl border border-white/10 
    overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-gray-900/70
    ${isFullWidth ? "md:col-span-2" : ""}`}
  >
    {/* Timeline indicator */}
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Hover glow */}
    <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

    <div className="relative p-6 pl-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          {/* Icon container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10">
              <Icon className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Title & Location */}
          <div>
            <h4 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
              {title}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <MapPin className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-sm text-gray-500">{location}</span>
            </div>
          </div>
        </div>

        {/* Date badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <Calendar className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-xs font-medium text-gray-400">{date}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 pl-16">
        {description}
      </p>
    </div>
  </Card>
);
export default function Events() {
  const t = useTranslations("events");

  const flagshipEvents = [
    {
      key: "expoMauritius",
      icon: Globe,
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      accentColor: "blue",
    },
    {
      key: "expoDubai",
      icon: Building2,
      gradient: "bg-gradient-to-br from-rose-500 to-orange-500",
      accentColor: "red",
    },
    {
      key: "aiSummit",
      icon: Sparkles,
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-500",
      accentColor: "emerald",
    },
  ];

  const initiatives = [
    { key: "emploi", icon: Briefcase, date: "2025" },
    { key: "educationExpo", icon: GraduationCap, date: "2026" },
  ];

  return (
    <section
      id="events"
      className="relative py-24 lg:py-32 bg-gray-950 text-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-gray-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <FloatingParticles />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">
              {t("section.title").split(" ")[0]}
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              {t("section.title").split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-500" />
          </div>

          {/* <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            {t("section.subtitle")}
          </p> */}
        </div>
        <CeoBusinessForumPage />
        <CarrefourPage />
        <EditorialPrestigePage />
        {/* Flagship events */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {flagshipEvents.map((event, index) => (
            <FlagshipEventCard
              key={event.key}
              title={t(`flagship.${event.key}.title`)}
              location={t(`flagship.${event.key}.location`)}
              description={t(`flagship.${event.key}.description`)}
              icon={event.icon}
              gradient={event.gradient}
              accentColor={event.accentColor}
              index={index}
            />
          ))}
        </div> */}

        {/* Divider */}
        {/* <div className="relative flex items-center justify-center my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative px-6 bg-gray-950">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-gray-400">
                {t("section.previousTitle")}
              </span>
            </div>
          </div>
        </div> */}

        {/* Previous initiatives */}
        {/* <div className="grid md:grid-cols-2 gap-6">
          {initiatives.map((initiative) => (
            <InitiativeCard
              key={initiative.key}
              title={t(`initiatives.${initiative.key}.title`)}
              location={t(`initiatives.${initiative.key}.location`)}
              description={t(`initiatives.${initiative.key}.description`)}
              icon={initiative.icon}
              date={initiative.date}
            />
          ))}

          <InitiativeCard
            title={t("initiatives.ceoForum.title")}
            location={t("initiatives.ceoForum.location")}
            description={t("initiatives.ceoForum.description")}
            icon={Users}
            isFullWidth
            date="2026"
          />
        </div> */}
      </div>
    </section>
  );
}
