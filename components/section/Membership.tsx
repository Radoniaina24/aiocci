import React from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Award, Building2, ChevronRight, Users } from "lucide-react";

export default function Membership() {
  const t = useTranslations("membership");

  return (
    <section
      id="membership"
      className="py-20 bg-gradient-to-br from-blue-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto" />
        </div>

        {/* Why membership */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {t("whyTitle")}
          </h3>

          <div className="grid md:grid-cols-2 gap-6 ">
            {t.raw("benefits").map((benefit: string, index: number) => (
              <div key={index} className="flex items-start space-x-3 ">
                <ChevronRight className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-md">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Membership types */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-blue-600 hover:shadow-2xl transition-all hover:-translate-y-2">
            <CardHeader>
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-2xl">
                {t("types.founding.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{t("types.founding.description")}</p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-green-600 hover:shadow-2xl transition-all hover:-translate-y-2">
            <CardHeader>
              <Building2 className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle className="text-2xl">
                {t("types.corporate.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                {t("types.corporate.description")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-red-600 hover:shadow-2xl transition-all hover:-translate-y-2">
            <CardHeader>
              <Users className="h-12 w-12 text-red-600 mb-4" />
              <CardTitle className="text-2xl">
                {t("types.institutional.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                {t("types.institutional.description")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
