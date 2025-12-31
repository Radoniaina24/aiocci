"use client";

import React from "react";
import { useTranslations } from "next-intl";
import ServiceCard from "./ServiceCard";

interface Service {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  color: "blue" | "green" | "red";
}

export default function Services() {
  const t = useTranslations("services");

  const services: Service[] = [
    {
      icon: "BriefcaseIcon",
      title: t("items.businessTrade.title"),
      description: t("items.businessTrade.description"),
      color: "blue",
    },
    {
      icon: "ArrowTrendingUpIcon",
      title: t("items.investment.title"),
      description: t("items.investment.description"),
      color: "green",
    },
    {
      icon: "UsersIcon",
      title: t("items.networking.title"),
      description: t("items.networking.description"),
      color: "red",
    },
  ];

  return (
    <div id="services" className="bg-background">
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-textPrimary mb-4">
              {t("section.title")}
            </h2>

            <p className="font-sourceSans text-lg text-textSecondary max-w-2xl mx-auto">
              {t("section.subtitle")}
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Events service */}
          <div className="mt-8">
            <ServiceCard
              icon="CalendarIcon"
              title={t("items.events.title")}
              description={t("items.events.description")}
              features={t.raw("items.events.features")}
              color="blue"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
