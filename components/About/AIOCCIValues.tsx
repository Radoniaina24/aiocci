"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Handshake,
  Shield,
  Leaf,
  Lightbulb,
  Users,
  GraduationCap,
  TrendingUp,
  Building2,
  Globe,
  Calendar,
  Rocket,
  Target,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const AIOCCIValues: React.FC = () => {
  const t = useTranslations("AIOCCIValues");

  const [activeTab, setActiveTab] = useState<"values" | "objectives">("values");
  const [expandedValue, setExpandedValue] = useState<number | null>(null);

  const coreValues = [
    { icon: <Handshake className="w-4 h-4" /> },
    { icon: <Shield className="w-4 h-4" /> },
    { icon: <Leaf className="w-4 h-4" /> },
    { icon: <Lightbulb className="w-4 h-4" /> },
    { icon: <Users className="w-4 h-4" /> },
    { icon: <GraduationCap className="w-4 h-4" /> },
  ];

  const objectiveIcons = [
    <TrendingUp className="w-4 h-4" />,
    <Building2 className="w-4 h-4" />,
    <Globe className="w-4 h-4" />,
    <Calendar className="w-4 h-4" />,
    <Rocket className="w-4 h-4" />,
    <Target className="w-4 h-4" />,
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-100 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-800 p-4">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("values")}
            className={`flex-1 py-2 px-3 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "values"
                ? "bg-white text-amber-800 shadow-md"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            {t("tabs.values")}
          </button>
          <button
            onClick={() => setActiveTab("objectives")}
            className={`flex-1 py-2 px-3 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "objectives"
                ? "bg-white text-amber-800 shadow-md"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            {t("tabs.objectives")}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-h-[500px] overflow-y-auto custom-scrollbar">
        {activeTab === "values" && (
          <div className="space-y-2">
            <p className="text-xs text-amber-700 mb-3 leading-relaxed">
              {t("valuesIntro")}
            </p>

            {coreValues.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    setExpandedValue(expandedValue === index ? null : index)
                  }
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                    expandedValue === index
                      ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white"
                      : "bg-amber-50 hover:bg-amber-100 text-amber-900"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-200 text-amber-800 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <span className="flex-1 text-sm font-semibold">
                    {t(`values.${index}.title`)}
                  </span>

                  {expandedValue === index ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                <div
                  className={`transition-all overflow-hidden ${
                    expandedValue === index ? "max-h-24" : "max-h-0"
                  }`}
                >
                  <p className="px-3 py-2 text-xs text-amber-700 bg-amber-50/50">
                    {t(`values.${index}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "objectives" && (
          <div className="space-y-2">
            <p className="text-xs text-amber-700 mb-3 leading-relaxed">
              {t("objectivesIntro")}
            </p>

            {objectiveIcons.map((icon, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl"
              >
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="w-8 h-8 rounded-lg bg-amber-200 text-amber-800 flex items-center justify-center">
                  {icon}
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  {t(`objectives.${index}`)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400" />
    </div>
  );
};

export default AIOCCIValues;
