import React from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "../ui/card";
import { Mail, Globe, MapPin, Building2, TrendingUp } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");

  const contacts = t.raw("details") as Array<{
    icon: string;
    label: string;
    value: string;
    link?: string;
    color: string;
  }>;

  const iconMap: Record<string, React.ElementType> = {
    Mail,
    Globe,
    MapPin,
    Building2,
    TrendingUp,
  };

  // ✅ Mapping complet des couleurs avec les classes Tailwind complètes
  const colorMap: Record<
    string,
    { icon: string; link: string; linkHover: string }
  > = {
    blue: {
      icon: "text-blue-400",
      link: "text-blue-300",
      linkHover: "hover:text-blue-200",
    },
    green: {
      icon: "text-green-400",
      link: "text-green-300",
      linkHover: "hover:text-green-200",
    },
    red: {
      icon: "text-red-400",
      link: "text-red-300",
      linkHover: "hover:text-red-200",
    },
    amber: {
      icon: "text-amber-400",
      link: "text-amber-300",
      linkHover: "hover:text-amber-200",
    },
    purple: {
      icon: "text-purple-400",
      link: "text-purple-300",
      linkHover: "hover:text-purple-200",
    },
    pink: {
      icon: "text-pink-400",
      link: "text-pink-300",
      linkHover: "hover:text-pink-200",
    },
    cyan: {
      icon: "text-cyan-400",
      link: "text-cyan-300",
      linkHover: "hover:text-cyan-200",
    },
    orange: {
      icon: "text-orange-400",
      link: "text-orange-300",
      linkHover: "hover:text-orange-200",
    },
  };

  // Fonction helper pour obtenir les classes de couleur
  const getColorClasses = (color: string) => {
    return colorMap[color] || colorMap.blue; // Fallback to blue
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300">{t("subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <p className="text-lg text-gray-200 mb-8 text-center">
                {t("intro")}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {contacts.map((item, index) => {
                  const Icon = iconMap[item.icon];
                  const colors = getColorClasses(item.color);

                  return (
                    <div key={index} className="flex items-start space-x-4">
                      {/* ✅ Utilisation de la classe complète */}
                      <Icon
                        className={`h-6 w-6 mt-1 flex-shrink-0 ${colors.icon}`}
                      />
                      <div>
                        <p className="font-semibold text-white mb-1">
                          {item.label}
                        </p>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${colors.link} ${colors.linkHover} transition-colors`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-300">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
