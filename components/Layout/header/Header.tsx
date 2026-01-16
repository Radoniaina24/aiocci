"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Icon from "@/components/ui/AppIcon";
import FlagIcon from "@/components/ui/FlagIcon";

interface NavigationItem {
  key: string;
  href: string;
  icon?: string;
}

interface Language {
  code: string;
  name: string;
  flag: string;
  shortName: string;
}

const languages: Language[] = [
  { code: "fr", name: "Français", flag: "🇫🇷", shortName: "FR" },
  { code: "en", name: "English", flag: "🇬🇧", shortName: "EN" },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    const segments = pathname.split("/");
    segments[1] = langCode;
    const newPath = segments.join("/");

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative z-[999999]" ref={dropdownRef}>
      {/* Bouton principal - Thème Marron */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Sélectionner la langue"
      >
        <FlagIcon
          country={currentLanguage.code as "fr" | "en"}
          className="w-5 h-5"
        />
      </button>

      {/* Menu déroulant - Thème Marron */}
      <div
        className={`absolute right-0 mt-2 w-44 bg-amber-50 rounded-xl shadow-lg shadow-amber-900/10 border border-amber-200 overflow-hidden transition-all duration-200 origin-top-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
        role="listbox"
        aria-label="Langues disponibles"
      >
        <div className="p-1">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-150 ${
                language.code === locale
                  ? "bg-amber-200 text-amber-900"
                  : "text-amber-800 hover:bg-amber-100"
              }`}
              role="option"
              aria-selected={language.code === locale}
            >
              <FlagIcon
                country={language.code as "fr" | "en"}
                className="w-5 h-5"
              />
              <span className="flex-1 text-sm font-medium">
                {language.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const t = useTranslations("header");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems: NavigationItem[] = [
    { key: "home", href: "/#home", icon: "HomeIcon" },
    { key: "about", href: "/#about", icon: "InformationCircleIcon" },
    { key: "services", href: "/#services", icon: "BriefcaseIcon" },
    { key: "events", href: "/#events", icon: "CalendarIcon" },
    { key: "membership", href: "/membership", icon: "UserGroupIcon" },
    { key: "contact", href: "/#contact", icon: "PhoneIcon" },
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
        isScrolled
          ? "bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 shadow-md shadow-amber-900/10"
          : "bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1767782198/logo-removebg-preview_qhrsem.png"
              alt="Logo"
              width={200}
              height={150}
            />
          </Link>

          {/* Desktop navigation - Thème Marron */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                className="relative px-4 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all group text-amber-800 hover:text-amber-950"
                href={item.href}
              >
                <span className="relative z-10">
                  {t(`navigation.${item.key}`)}
                </span>
                <span className="absolute inset-0 bg-amber-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>

          {/* CTA + Language Selector desktop - Thème Marron */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSelector />

            {/* CTA Button - Marron */}
            <Link
              href={"/membership"}
              // onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 hover:cursor-pointer text-sm font-semibold bg-gradient-to-r from-amber-700 to-amber-800 text-amber-50 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-800/30 hover:-translate-y-0.5 hover:from-amber-800 hover:to-amber-900"
            >
              {t("actions.joinNow")}
            </Link>
          </div>

          {/* Mobile: Language Selector + Toggle - Thème Marron */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSelector />

            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={t("aria.toggleMenu")}
              className="p-2 text-amber-800 hover:text-amber-950 transition-colors"
            >
              <Icon
                name={isMobileMenuOpen ? "XMarkIcon" : "Bars3Icon"}
                size={24}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Thème Marron */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-gradient-to-b from-amber-50 to-orange-50 z-40">
          <nav className="container mx-auto px-4 py-6 space-y-2">
            {navigationItems.map((item) => (
              <div
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg cursor-pointer transition-all text-amber-800 hover:text-amber-950 hover:bg-amber-100"
              >
                {item.icon && (
                  <Icon name={item.icon} size={20} className="text-amber-600" />
                )}
                {t(`navigation.${item.key}`)}
              </div>
            ))}

            <div className="pt-6 border-t border-amber-200 mt-4">
              <Link
                href="/membership"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-6 py-3.5 text-base font-semibold bg-gradient-to-r from-amber-700 to-amber-800 text-amber-50 rounded-lg hover:from-amber-800 hover:to-amber-900 transition-all"
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
