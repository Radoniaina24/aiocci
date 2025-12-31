"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Events() {
  const t = useTranslations("events");

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("section.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300">{t("section.subtitle")}</p>
        </div>

        {/* Flagship events */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 text-white hover:shadow-2xl transition-all hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                {t("flagship.expoMauritius.title")}
              </CardTitle>
              <CardDescription className="text-blue-100">
                {t("flagship.expoMauritius.location")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-blue-50 leading-relaxed">
                {t("flagship.expoMauritius.description")}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-600 to-red-700 border-0 text-white hover:shadow-2xl transition-all hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                {t("flagship.expoDubai.title")}
              </CardTitle>
              <CardDescription className="text-red-100">
                {t("flagship.expoDubai.location")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-red-50 leading-relaxed">
                {t("flagship.expoDubai.description")}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-600 to-green-700 border-0 text-white hover:shadow-2xl transition-all hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                {t("flagship.aiSummit.title")}
              </CardTitle>
              <CardDescription className="text-green-100">
                {t("flagship.aiSummit.location")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-green-50 leading-relaxed">
                {t("flagship.aiSummit.description")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Previous initiatives */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-10">
            {t("section.previousTitle")}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {["emploi", "educationExpo"].map((key) => (
              <Card
                key={key}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    {t(`initiatives.${key}.title`)}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {t(`initiatives.${key}.location`)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    {t(`initiatives.${key}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors md:col-span-2">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  {t("initiatives.ceoForum.title")}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {t("initiatives.ceoForum.location")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  {t("initiatives.ceoForum.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
