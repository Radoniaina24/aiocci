"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/AppIcon";
import Image from "next/image";

interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = [
    { label: "Home", href: "home", icon: "HomeIcon" },
    { label: "About", href: "about", icon: "InformationCircleIcon" },
    { label: "Services", href: "services", icon: "BriefcaseIcon" },
    { label: "Events", href: "events", icon: "CalendarIcon" },
    { label: "Membership", href: "membership", icon: "UserGroupIcon" },
    { label: "Contact", href: "contact", icon: "PhoneIcon" },
  ];

  // const moreItems: NavigationItem[] = [
  //   { label: "Contact", href: "/contact", icon: "PhoneIcon" },
  // ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card shadow-md" : "bg-card"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src={"./images/logo.png"}
              alt="logo"
              width={200}
              height={150}
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                onClick={() => scrollToSection(item.href)}
                key={item.href}
                className={`relative hover:cursor-pointer  px-4 py-2 font-montserrat font-medium text-sm transition-all duration-300 rounded-lg group text-textPrimary hover:text-primary`}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`absolute inset-0 bg-surface rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100
                  `}
                />
              </div>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/membership"
              className="px-6 py-2.5 font-montserrat font-semibold text-sm bg-cta text-cta-foreground rounded-lg transition-all duration-300 hover:shadow-elevated hover:-translate-y-0.5 hover:rounded-3xl"
            >
              Join Now
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-textPrimary hover:text-primary transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon
              name={isMobileMenuOpen ? "XMarkIcon" : "Bars3Icon"}
              size={24}
            />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-card z-40 overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 space-y-2">
            {[...navigationItems].map((item) => (
              <div
                onClick={() => {
                  scrollToSection(item.href);
                  setIsMobileMenuOpen(false);
                }}
                key={item.href}
                className={`relative hover:cursor-pointer px-4 py-2 font-montserrat font-medium text-sm transition-all duration-300 rounded-lg group text-textPrimary hover:text-primary`}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`absolute inset-0 bg-surface rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100
                  `}
                />
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/membership"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-6 py-3 font-montserrat font-semibold text-base bg-cta text-cta-foreground rounded-lg transition-all duration-300 hover:shadow-elevated"
              >
                Join Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
