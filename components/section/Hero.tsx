import React, { useState } from "react";
import { Button } from "../ui/button";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 text-white py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          African Indian Ocean
          <br />
          Chamber of Commerce & Industry
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-blue-100 font-semibold">
          AIOCCI
        </p>
        <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
          A Business Bridge between Africa and the Indian Ocean
        </p>

        <div className="max-w-4xl mx-auto mb-12 bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Welcome to AIOCCI
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            The African Indian Ocean Chamber of Commerce & Industry (AIOCCI) is
            an independent business platform dedicated to strengthening trade,
            investment, and economic cooperation between Africa and the Indian
            Ocean region.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            AIOCCI connects companies, investors, institutions, and economic
            stakeholders through business facilitation, strategic networking,
            and the organization of high-level corporate and economic events.
          </p>
          <p className="text-lg leading-relaxed">
            Our objective is to foster sustainable growth, cross-border
            partnerships, and regional economic integration across Africa, the
            Indian Ocean, and international markets.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("membership")}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6"
          >
            Become a Member
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            variant="outline"
            className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-6"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
