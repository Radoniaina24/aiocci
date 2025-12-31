import React from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Award, ChevronRight, Handshake } from "lucide-react";

export default function Partnerships() {
  const t = useTranslations("partnerships");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Strategic Collaboration */}
          <Card className="border-l-4 border-amber-700 hover:shadow-xl transition-shadow">
            <CardHeader>
              <Handshake className="h-12 w-12 text-amber-700 mb-4" />
              <CardTitle className="text-3xl">
                {t("collaboration.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{t("collaboration.intro")}</p>

              <ul className="space-y-2 text-gray-700">
                {t
                  .raw("collaboration.partners")
                  .map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-amber-700 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>

              <p className="text-gray-700 mt-4">
                {t("collaboration.conclusion")}
              </p>
            </CardContent>
          </Card>

          {/* Governance */}
          <Card className="border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
            <CardHeader>
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-3xl">
                {t("governance.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{t("governance.intro")}</p>

              <ul className="space-y-2 text-gray-700">
                {t
                  .raw("governance.principles")
                  .map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>

              <p className="text-gray-700 mt-4">{t("governance.conclusion")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
