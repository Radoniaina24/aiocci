import { Globe, Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Globe className="h-10 w-10 text-blue-600" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">AIOCCI</span>
              <span className="text-xs text-gray-600 hidden sm:block">
                African Indian Ocean Chamber
              </span>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-gray-700 hover:text-amber-700 font-medium transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("membership")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Membership
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-red-50 rounded-md"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-amber-50 rounded-md"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("membership")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Membership
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
