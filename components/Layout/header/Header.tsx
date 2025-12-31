"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Icon from "@/components/ui/AppIcon";

interface NavigationItem {
  key: string;
  href: string;
  icon?: string;
}

const Header = () => {
  const t = useTranslations("header");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems: NavigationItem[] = [
    { key: "home", href: "home", icon: "HomeIcon" },
    { key: "about", href: "about", icon: "InformationCircleIcon" },
    { key: "services", href: "services", icon: "BriefcaseIcon" },
    { key: "events", href: "events", icon: "CalendarIcon" },
    { key: "membership", href: "membership", icon: "UserGroupIcon" },
    { key: "contact", href: "contact", icon: "PhoneIcon" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card shadow-md" : "bg-card"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/logo.png" alt="Logo" width={200} height={150} />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all group text-textPrimary hover:text-primary"
              >
                <span className="relative z-10">
                  {t(`navigation.${item.key}`)}
                </span>
                <span className="absolute inset-0 bg-surface rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:flex">
            <Link
              href="/membership"
              className="px-6 py-2.5 text-sm font-semibold bg-cta text-cta-foreground rounded-lg transition-all hover:shadow-elevated hover:-translate-y-0.5"
            >
              {t("actions.joinNow")}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={t("aria.toggleMenu")}
            className="lg:hidden p-2 text-textPrimary hover:text-primary"
          >
            <Icon
              name={isMobileMenuOpen ? "XMarkIcon" : "Bars3Icon"}
              size={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-card z-40">
          <nav className="container mx-auto px-4 py-6 space-y-2">
            {navigationItems.map((item) => (
              <div
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all text-textPrimary hover:text-primary"
              >
                {t(`navigation.${item.key}`)}
              </div>
            ))}

            <div className="pt-4">
              <Link
                href="/membership"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-6 py-3 text-base font-semibold bg-cta text-cta-foreground rounded-lg"
              >
                {t("actions.joinNow")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
