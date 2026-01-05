// components/PresidentMessage/index.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface PresidentMessageProps {
  presidentName: string;
  title: string;
  organization: string;
  organizationAcronym: string;
  imageSrc: string;
  imageAlt?: string;
  greeting: string[];
  paragraphs: string[];
  closing: string;
  slogan: string;
}

const PresidentMessage: React.FC<PresidentMessageProps> = ({
  presidentName,
  title,
  organization,
  organizationAcronym,
  imageSrc,
  imageAlt = "President portrait",
  greeting,
  paragraphs,
  closing,
  slogan,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const fullContentRef = useRef<HTMLDivElement>(null);

  // Nombre de paragraphes à afficher initialement
  const initialParagraphsCount = 2;
  const hasMoreContent = paragraphs.length > initialParagraphsCount;

  useEffect(() => {
    if (fullContentRef.current) {
      setContentHeight(fullContentRef.current.scrollHeight);
    }
  }, [paragraphs]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const t = useTranslations("president");
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-amber-50/30 py-10 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-amber-100/50 to-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-gradient-to-tr from-blue-100/40 to-indigo-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-br from-emerald-50/40 to-teal-50/30 rounded-full blur-2xl hidden lg:block" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
            <span>{t("sectionBadge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight">
            {t("sectionTitle").split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 bg-clip-text text-transparent">
              {t("sectionTitle").split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <div className="mt-3 sm:mt-4 w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full" />
        </div>

        {/* Main Content Container */}
        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          {/* Decorative Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500" />

          <div className="flex flex-col lg:flex-row">
            {/* Left Side - President Image */}
            <div className="lg:w-2/5 xl:w-[38%] relative">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[600px] xl:min-h-[700px]">
                {/* Image Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 40vw"
                  />
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-slate-900/20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent lg:bg-gradient-to-l lg:from-white/5 lg:to-transparent" />
                </div>

                {/* President Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <div className="relative">
                    {/* Decorative Line */}
                    <div className="w-10 sm:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-amber-400 to-amber-500 mb-3 sm:mb-4 rounded-full" />

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 tracking-tight">
                      {presidentName}
                    </h3>
                    <p className="text-amber-400 font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                      {title}
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {organization}
                      <span className="block text-amber-300/80 font-medium mt-0.5 sm:mt-1">
                        ({organizationAcronym})
                      </span>
                    </p>

                    {/* Signature Effect - Hidden on mobile */}
                    <div className="hidden sm:block mt-4 lg:mt-6 pt-3 lg:pt-4 border-t border-white/10">
                      <svg
                        className="w-24 lg:w-32 h-8 lg:h-12 text-amber-400/60"
                        viewBox="0 0 200 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 35 Q 30 10, 50 30 T 90 25 T 130 35 T 170 20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          fill="none"
                        />
                        <path
                          d="M50 40 Q 70 35, 85 42"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative Corners - Hidden on small screens */}
                <div className="hidden md:block absolute top-4 lg:top-6 left-4 lg:left-6 w-12 lg:w-20 h-12 lg:h-20 border-l-2 border-t-2 border-amber-400/30 rounded-tl-lg" />
              </div>
            </div>

            {/* Right Side - Message Content */}
            <div className="lg:w-3/5 xl:w-[62%] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16">
              {/* Opening Quote Icon */}
              <div className="mb-4 sm:mb-6">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-400/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Greeting */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                {greeting.map((line, index) => (
                  <p
                    key={index}
                    className="text-slate-700 font-medium text-sm sm:text-base md:text-lg italic"
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Message Content with Expand/Collapse */}
              <div className="relative">
                <div
                  ref={fullContentRef}
                  className={`space-y-3 sm:space-y-4 md:space-y-5 text-slate-600 leading-relaxed text-sm sm:text-base lg:text-lg overflow-hidden transition-all duration-500 ease-in-out`}
                  style={{
                    maxHeight: isExpanded
                      ? `${contentHeight + 200}px`
                      : "180px",
                  }}
                >
                  {paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`${
                        index === 0
                          ? "first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl first-letter:font-bold first-letter:text-amber-500 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 first-letter:mt-0.5 sm:first-letter:mt-1"
                          : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}

                  {/* Closing Statement */}
                  <div className="mt-4 sm:mt-6 md:mt-8 p-3 sm:p-4 md:p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl border-l-4 border-amber-400">
                    <p className="text-slate-700 font-medium text-sm sm:text-base md:text-lg leading-relaxed italic">
                      {closing}
                    </p>
                  </div>

                  {/* Slogan */}
                  <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 md:pt-8 border-t border-slate-200">
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-200">
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                          {slogan}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5 sm:mt-1 font-medium tracking-wide uppercase">
                          {t("visionLabel")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Signature Block */}
                  <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                      <p className="font-bold text-slate-800 text-base sm:text-lg">
                        {presidentName}
                      </p>
                      <p className="text-amber-600 font-medium text-sm sm:text-base">
                        {title}
                      </p>
                      <p className="text-slate-500 text-xs sm:text-sm mt-0.5 sm:mt-1">
                        {organizationAcronym}
                      </p>
                    </div>
                    {/* Decorative Element */}
                    <div className="hidden sm:block">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400" />
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500" />
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-600" />
                        <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-amber-400 to-transparent rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gradient Fade Overlay - Only visible when collapsed */}
                {!isExpanded && hasMoreContent && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none" />
                )}
              </div>

              {/* Read More / Read Less Button */}
              {hasMoreContent && (
                <div className="mt-4 sm:mt-6 flex justify-center">
                  <button
                    onClick={toggleExpand}
                    className="group relative inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold text-sm sm:text-base rounded-full shadow-lg shadow-amber-200 hover:shadow-xl hover:shadow-amber-300 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span>{isExpanded ? t("readLess") : t("readMore")}</span>

                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>

                    {/* Ripple effect on hover */}
                    <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 sm:w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400 rounded-full" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-200" />
            <div className="w-10 sm:w-12 md:w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
