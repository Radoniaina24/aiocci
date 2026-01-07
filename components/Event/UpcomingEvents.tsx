"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
  eventsData,
  statsConfig,
  EventData,
  AccentColor,
} from "@/lib/eventsData";

// ============================================
// HELPER FUNCTIONS FOR COLORS
// ============================================

const getBackgroundColor = (color: AccentColor): string => {
  switch (color) {
    case "blue":
      return "bg-blue-50";
    case "emerald":
      return "bg-emerald-50";
    case "purple":
      return "bg-purple-50";
    case "amber":
      return "bg-amber-50";
  }
};

const getTextColor = (color: AccentColor): string => {
  switch (color) {
    case "blue":
      return "text-blue-800";
    case "emerald":
      return "text-emerald-800";
    case "purple":
      return "text-purple-800";
    case "amber":
      return "text-amber-800";
  }
};

const getTextLightColor = (color: AccentColor): string => {
  switch (color) {
    case "blue":
      return "text-blue-700";
    case "emerald":
      return "text-emerald-700";
    case "purple":
      return "text-purple-700";
    case "amber":
      return "text-amber-700";
  }
};

const getBorderColor = (color: AccentColor): string => {
  switch (color) {
    case "blue":
      return "border-blue-200";
    case "emerald":
      return "border-emerald-200";
    case "purple":
      return "border-purple-200";
    case "amber":
      return "border-amber-200";
  }
};

const getGradientClasses = (color: AccentColor): string => {
  switch (color) {
    case "blue":
      return "from-blue-600 to-indigo-700";
    case "emerald":
      return "from-emerald-600 to-teal-700";
    case "purple":
      return "from-purple-600 to-violet-700";
    case "amber":
      return "from-amber-500 to-orange-600";
  }
};

const getShadowColor = (color: AccentColor): string => {
  switch (color) {
    case "blue":
      return "shadow-blue-500/20";
    case "emerald":
      return "shadow-emerald-500/20";
    case "purple":
      return "shadow-purple-500/20";
    case "amber":
      return "shadow-amber-500/20";
  }
};

const getButtonOutlineClasses = (color: AccentColor): string => {
  switch (color) {
    case "blue":
      return "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white";
    case "emerald":
      return "border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white";
    case "purple":
      return "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white";
    case "amber":
      return "border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white";
  }
};

// ============================================
// ICON COMPONENTS
// ============================================

const CalendarIcon: React.FC = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const LocationIcon: React.FC = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const ChevronUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg
    className="w-5 h-5 mr-2 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const UsersIcon: React.FC = () => (
  <svg
    className="w-5 h-5 mr-2 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
  </svg>
);

const ImagePlaceholderIcon: React.FC = () => (
  <svg
    className="w-16 h-16 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

// ============================================
// EVENT IMAGE COMPONENT
// ============================================

interface EventImageProps {
  src: string;
  alt: string;
  title: string;
  badge: string | null;
  accentColor: AccentColor;
  imagePlaceholderText: string;
}

const EventImage: React.FC<EventImageProps> = ({
  src,
  alt,
  title,
  badge,
  accentColor,
  imagePlaceholderText,
}) => {
  const [imageError, setImageError] = useState(false);

  const gradientClasses = getGradientClasses(accentColor);
  const shadowClasses = getShadowColor(accentColor);
  const borderClasses = getBorderColor(accentColor);
  const textClasses = getTextColor(accentColor);

  return (
    <div
      className={`
        relative rounded-3xl overflow-hidden shadow-2xl
        transform hover:scale-[1.02] transition-all duration-500
        ${shadowClasses}
      `}
    >
      <div className="aspect-[4/3] relative">
        {!imageError ? (
          <img
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div
            className={`
              w-full h-full flex flex-col items-center justify-center
              bg-gradient-to-br ${gradientClasses}
            `}
          >
            <ImagePlaceholderIcon />
            <span className="mt-4 text-white/80 text-sm font-medium">
              {imagePlaceholderText}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {badge && (
          <div className="absolute top-4 left-4">
            <span
              className={`
                px-4 py-2 rounded-full text-sm font-semibold
                bg-white/90 backdrop-blur-sm shadow-lg
                ${textClasses}
              `}
            >
              {badge}
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-lg">
            {title}
          </h3>
        </div>
      </div>

      <div
        className={`
          absolute inset-0 rounded-3xl 
          border-2 ${borderClasses} opacity-50
          pointer-events-none
        `}
      />
    </div>
  );
};

// ============================================
// EXPANDED CONTENT COMPONENT
// ============================================

interface ExpandedContentProps {
  eventData: EventData;
  translationKey: string;
}

const ExpandedContent: React.FC<ExpandedContentProps> = ({
  eventData,
  translationKey,
}) => {
  const t = useTranslations(`upcomingEvents.events.${translationKey}`);
  const tLabels = useTranslations("upcomingEvents.labels");

  const bgClasses = getBackgroundColor(eventData.accentColor);
  const textClasses = getTextColor(eventData.accentColor);
  const textLightClasses = getTextLightColor(eventData.accentColor);

  // Helper function to get array of translations
  const getTranslatedArray = (key: string, count: number): string[] => {
    return Array.from({ length: count }, (_, i) => t(`${key}.${i}`));
  };

  const objectives = getTranslatedArray(
    "objectives",
    eventData.objectivesCount
  );
  const participants =
    eventData.hasParticipants && eventData.participantsCount
      ? getTranslatedArray("participants", eventData.participantsCount)
      : null;
  const details = eventData.hasDetails ? t("details") : null;

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Details */}
      {details && <p className="text-gray-600 leading-relaxed">{details}</p>}

      {/* Participants */}
      {participants && (
        <div className="bg-gray-50 rounded-xl p-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
            <UsersIcon />
            {tLabels("participants")}
          </h5>
          <ul className="space-y-2">
            {participants.map((participant, idx) => (
              <li key={idx} className="flex items-start text-gray-600 text-sm">
                <span className="w-2 h-2 mt-1.5 mr-3 bg-gray-400 rounded-full flex-shrink-0" />
                {participant}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Objectives */}
      <div className={`rounded-xl p-4 ${bgClasses}`}>
        <h5 className={`font-semibold mb-3 ${textClasses}`}>
          {t("objectivesLabel")}
        </h5>
        <ul className="space-y-2">
          {objectives.map((objective, idx) => (
            <li
              key={idx}
              className={`flex items-start text-sm ${textLightClasses}`}
            >
              <CheckIcon />
              <span>{objective}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ============================================
// EVENT CARD COMPONENT
// ============================================

interface EventCardProps {
  eventData: EventData;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ eventData, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations(
    `upcomingEvents.events.${eventData.translationKey}`
  );
  const tButtons = useTranslations("upcomingEvents.buttons");
  const tLabels = useTranslations("upcomingEvents.labels");

  const isEven = index % 2 === 0;

  const gradientClasses = getGradientClasses(eventData.accentColor);
  const buttonOutlineClasses = getButtonOutlineClasses(eventData.accentColor);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Get translated content
  const title = t("title");
  const date = t("date");
  const location = t("location");
  const badgeText = t("badge");
  const badge = badgeText && badgeText.length > 0 ? badgeText : null;
  const description = t("description");
  const imageAlt = t("imageAlt");

  return (
    <div
      className={`
        relative flex flex-col lg:flex-row gap-8 
        ${isEven ? "" : "lg:flex-row-reverse"}
      `}
    >
      {/* Timeline connector for desktop */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 -translate-x-1/2" />
      <div
        className={`
          hidden lg:block absolute left-1/2 top-8 w-4 h-4 
          rounded-full bg-gradient-to-r ${gradientClasses}
          -translate-x-1/2 z-10 shadow-lg
        `}
      />

      {/* Left Section - Event Image */}
      <div className={`lg:w-1/2 ${isEven ? "lg:pr-16" : "lg:pl-16"}`}>
        <EventImage
          src={eventData.image}
          alt={imageAlt}
          title={title}
          badge={badge}
          accentColor={eventData.accentColor}
          imagePlaceholderText={tLabels("imagePlaceholder")}
        />
      </div>

      {/* Right Section - Content Card */}
      <div className={`lg:w-1/2 ${isEven ? "lg:pl-16" : "lg:pr-16"}`}>
        <div
          className="
            bg-white rounded-2xl shadow-lg 
            hover:shadow-xl transition-all duration-300 
            overflow-hidden border border-gray-100
          "
        >
          {/* Header - Always Visible */}
          <div className="p-6">
            {/* Date & Location Tags */}
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg text-sm">
                <CalendarIcon />
                <span className="ml-2 font-medium">{date}</span>
              </div>
              <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg text-sm">
                <LocationIcon />
                <span className="ml-2 font-medium">{location}</span>
              </div>
            </div>

            {/* Title */}
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-4">
              {title}
            </h4>

            {/* Description - Always Visible */}
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Expanded Content */}
          <div
            className={`
              overflow-hidden transition-all duration-500 ease-in-out
              ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <div className="px-6 pb-2">
              <div className="border-t border-gray-100 pt-4">
                <ExpandedContent
                  eventData={eventData}
                  translationKey={eventData.translationKey}
                />
              </div>
            </div>
          </div>

          {/* Toggle Button */}
          <div className="px-6 pb-6 pt-4">
            <button
              onClick={toggleExpand}
              className={`
                group w-full flex text-sm items-center justify-center 
                px-6 py-3 rounded-xl font-semibold
                transition-all duration-300 
                border-2 ${buttonOutlineClasses}
              `}
              aria-expanded={isExpanded}
              aria-label={
                isExpanded ? tButtons("showLess") : tButtons("learnMore")
              }
            >
              {isExpanded ? (
                <>
                  {tButtons("showLess")}
                  <ChevronUpIcon className="w-5 h-5 ml-2 transition-transform group-hover:-translate-y-0.5" />
                </>
              ) : (
                <>
                  {tButtons("learnMore")}
                  <ChevronDownIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-0.5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// STATS SECTION COMPONENT
// ============================================

const StatsSection: React.FC = () => {
  const t = useTranslations("upcomingEvents.stats");

  return (
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {statsConfig.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
        >
          <div className="text-3xl font-bold text-white">{stat.number}</div>
          <div className="text-sm text-gray-400">{t(stat.labelKey)}</div>
        </div>
      ))}
    </div>
  );
};

// ============================================
// HEADER SECTION COMPONENT
// ============================================

const HeaderSection: React.FC = () => {
  const t = useTranslations("upcomingEvents.header");

  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* AIOCCI Logo placeholder */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 border border-white/20">
          <span className="text-2xl font-bold text-white">A</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {t("title")}
        </h1>
        <p className="text-xl md:text-2xl text-blue-200 font-light">
          {t("subtitle")}
        </p>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          {t("description")}
        </p>

        {/* Stats */}
        <StatsSection />
      </div>
    </header>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

const UpcomingEvents: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* CSS for animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

      {/* Header Section */}
      <HeaderSection />

      {/* Events Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {eventsData.map((eventData, index) => (
            <EventCard key={eventData.id} eventData={eventData} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default UpcomingEvents;
