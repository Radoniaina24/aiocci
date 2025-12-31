"use client";

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import ServiceCard from "./ServiceCard";
import Icon from "@/components/ui/AppIcon";

// Types étendus pour plus de flexibilité
type ColorVariant = "blue" | "green" | "red" | "purple" | "orange";

interface Service {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  color: ColorVariant;
  badge?: string;
  isPopular?: boolean;
}

// Configuration des animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  const t = useTranslations("services");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services: Service[] = [
    {
      icon: "BriefcaseIcon",
      title: t("items.businessTrade.title"),
      description: t("items.businessTrade.description"),
      color: "blue",
      badge: "Business",
    },
    {
      icon: "ArrowTrendingUpIcon",
      title: t("items.investment.title"),
      description: t("items.investment.description"),
      color: "green",
      badge: "Investment",
    },
    {
      icon: "UsersIcon",
      title: t("items.networking.title"),
      description: t("items.networking.description"),
      color: "purple",
      badge: "Networking",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* ═══════════════════════════════════════════════════════════════
          BACKGROUND DECORATIONS
      ═══════════════════════════════════════════════════════════════ */}

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Floating Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />

      {/* ═══════════════════════════════════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════════════════════════════════ */}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─────────────────────────────────────────────────────────────
            SECTION HEADER
        ───────────────────────────────────────────────────────────── */}
        <motion.header
          variants={headerVariants as any}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Main Title */}
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
            <span className="block">{t("section.title")}</span>
            {/* Optional: Highlighted word */}
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t("excellence")}
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-blue-200"
                viewBox="0 0 200 12"
                fill="currentColor"
                preserveAspectRatio="none"
              >
                <path d="M0 12 Q50 0 100 6 T200 12 L200 12 L0 12 Z" />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="font-sourceSans text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("section.subtitle")}
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="h-px w-24 bg-gray-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300" />
          </div>
        </motion.header>

        {/* ─────────────────────────────────────────────────────────────
            SERVICES GRID
        ───────────────────────────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants as any}>
              <ServiceCard {...service} className="h-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            FEATURED SERVICE (EVENTS)
        ───────────────────────────────────────────────────────────── */}
        <motion.div
          variants={itemVariants as any}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
          className="mt-12 lg:mt-16"
        >
          {/* Featured Banner */}
          <div className="relative">
            {/* Background Card */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl transform rotate-1 opacity-10" />

            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />

              {/* Grid Pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <div>
                  {/* Featured Badge */}

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg shadow-blue-500/30 mb-6">
                    <Icon
                      name="CalendarIcon"
                      size={28}
                      className="text-white"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair font-bold text-3xl lg:text-4xl text-white mb-4">
                    {t("items.events.title")}
                  </h3>

                  {/* Description */}
                  <p className="font-sourceSans text-lg text-gray-300 leading-relaxed mb-8">
                    {t("items.events.description")}
                  </p>
                </div>

                {/* Right Content - Features */}
                <div className="space-y-4">
                  {(t.raw("items.events.features") as string[])?.map(
                    (feature, index) => (
                      <div
                        key={index}
                        className="group flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        {/* Number Badge */}
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-xl text-blue-400 font-bold text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* Feature Text */}
                        <div className="flex-1 pt-2">
                          <span className="font-sourceSans text-base text-white/90 group-hover:text-white transition-colors duration-300">
                            {feature}
                          </span>
                        </div>

                        {/* Arrow */}
                        {/* <Icon
                          name="ChevronRightIcon"
                          size={20}
                          className="flex-shrink-0 mt-2 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300"
                        /> */}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
