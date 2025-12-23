import React from "react";
import ServiceCard from "./ServiceCard";
interface Service {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  color: "blue" | "green" | "red";
}

export default function Services() {
  const services: Service[] = [
    {
      icon: "BriefcaseIcon",
      title: "Business & Trade Facilitation",
      description:
        "We assist companies in identifying business opportunities, partners, and markets across Africa and the Indian Ocean region.",
      color: "blue",
    },
    {
      icon: "ArrowTrendingUpIcon",
      title: "Investment Promotion",
      description:
        "AIOCCI promotes investment opportunities and connects investors with high-potential projects, enterprises, and strategic initiatives.",
      color: "green",
    },
    {
      icon: "UsersIcon",
      title: "Networking & Representation",
      description:
        "AIOCCI provides a structured platform for networking, representation, and advocacy for its members at national, regional, and international levels.",
      color: "red",
    },
  ];

  return (
    <div id="services" className="bg-background">
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-textPrimary mb-4">
              What We Do
            </h2>
            <p className="font-sourceSans text-lg text-textSecondary max-w-2xl mx-auto">
              Des solutions adaptées à chaque étape de votre développement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="mt-8">
            <ServiceCard
              icon={"CalendarIcon"}
              title={"Corporate & Economic Events"}
              description={
                " AIOCCI designs and delivers high-level events, including:"
              }
              color={"blue"}
              features={[
                "Economic forums and summits",
                "Corporate conferences and roundtables",
                "B2B and B2G meetings",
                "Trade missions and business delegations",
                "Investment and sector-focused events",
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
