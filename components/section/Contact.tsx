import React from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "../ui/card";
import {
  Mail,
  Globe,
  MapPin,
  Building2,
  TrendingUp,
  ArrowUpRight,
  Landmark,
  Building,
  Phone,
} from "lucide-react";

interface ContactDetail {
  icon: string;
  label: string;
  value: string;
  link?: string;
  color: string;
}

interface Address {
  title: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  phone?: string;
  email?: string;
  mapLink?: string;
}

interface Addresses {
  siege: Address;
  bureau: Address;
}

export default function Contact() {
  const t = useTranslations("contact");

  const contacts = t.raw("details") as ContactDetail[];
  const addresses = t.raw("addresses") as Addresses;

  const iconMap: Record<string, React.ElementType> = {
    Mail,
    Globe,
    MapPin,
    Building2,
    TrendingUp,
    Phone,
    Landmark,
    Building,
  };

  const colorMap: Record<
    string,
    {
      icon: string;
      bg: string;
      border: string;
      glow: string;
    }
  > = {
    blue: {
      icon: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20 hover:border-blue-400/50",
      glow: "group-hover:shadow-blue-500/20",
    },
    green: {
      icon: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20 hover:border-emerald-400/50",
      glow: "group-hover:shadow-emerald-500/20",
    },
    red: {
      icon: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20 hover:border-rose-400/50",
      glow: "group-hover:shadow-rose-500/20",
    },
    amber: {
      icon: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20 hover:border-amber-400/50",
      glow: "group-hover:shadow-amber-500/20",
    },
    purple: {
      icon: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20 hover:border-violet-400/50",
      glow: "group-hover:shadow-violet-500/20",
    },
    pink: {
      icon: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20 hover:border-pink-400/50",
      glow: "group-hover:shadow-pink-500/20",
    },
    cyan: {
      icon: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20 hover:border-cyan-400/50",
      glow: "group-hover:shadow-cyan-500/20",
    },
    orange: {
      icon: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20 hover:border-orange-400/50",
      glow: "group-hover:shadow-orange-500/20",
    },
  };

  const getColorClasses = (color: string) => {
    return colorMap[color] || colorMap.blue;
  };

  // Composant pour afficher une carte d'adresse
  const AddressCard = ({
    address,
    type,
  }: {
    address: Address;
    type: "siege" | "bureau";
  }) => {
    const isSiege = type === "siege";
    const Icon = isSiege ? Landmark : Building;
    const colors = isSiege
      ? getColorClasses("purple")
      : getColorClasses("cyan");

    return (
      <div
        className={`
          group relative flex flex-col p-6 lg:p-8
          rounded-2xl border transition-all duration-300
          bg-white/[0.02] backdrop-blur-sm
          ${colors.border}
          hover:bg-white/[0.04] hover:shadow-xl ${colors.glow}
        `}
      >
        {/* Badge du type d'adresse */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`
              flex-shrink-0 w-14 h-14 rounded-2xl
              flex items-center justify-center
              ${colors.bg}
              transition-transform duration-300
              group-hover:scale-105
            `}
          >
            <Icon className={`h-7 w-7 ${colors.icon}`} />
          </div>
          <div>
            <span
              className={`
                inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider
                ${colors.bg} ${colors.icon}
              `}
            >
              {isSiege ? t("addressLabels.siege") : t("addressLabels.bureau")}
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              {address?.title}
            </h3>
          </div>
        </div>

        {/* Détails de l'adresse */}
        <div className="space-y-4 flex-1">
          {/* Adresse physique */}
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
            <div className="text-gray-300">
              <p className="font-medium">{address?.street}</p>
              <p>
                {address?.postalCode} {address?.city}
              </p>
              <p className="text-gray-400">{address?.country}</p>
            </div>
          </div>

          {/* Téléphone si disponible */}
          {address?.phone && (
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
              <a
                href={`tel:${address?.phone.replace(/\s/g, "")}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {address?.phone}
              </a>
            </div>
          )}

          {/* Email si disponible */}
          {/* {address?.email && (
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
              <a
                href={`mailto:${address?.email}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {address?.email}
              </a>
            </div>
          )} */}
        </div>
      </div>
    );
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background avec gradient sophistiqué */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />

      {/* Motif de grille subtil */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Cercles de gradient décoratifs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header avec badge */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            {t("title")}
          </h2>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400" />
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400" />
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Card principale avec glassmorphism */}
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Section des informations de contact générales */}
          <Card className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 pointer-events-none" />

            <CardContent className="relative p-8 md:p-12">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t("generalInfo")}
                </h3>
                <p className="text-gray-400">{t("intro")}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
                {contacts.map((item, index) => {
                  const Icon = iconMap[item.icon];
                  const colors = getColorClasses(item.color);
                  const isLink = !!item.link;

                  const ContentWrapper = isLink ? "a" : "div";
                  const wrapperProps = isLink
                    ? {
                        href: item.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {};

                  return (
                    <ContentWrapper
                      key={index}
                      {...wrapperProps}
                      className={`
                        group relative flex items-start gap-4 p-5 lg:p-6 
                        rounded-2xl border transition-all duration-300
                        ${colors.border}
                        ${isLink ? "cursor-pointer hover:bg-white/[0.02]" : ""}
                        hover:shadow-xl ${colors.glow}
                      `}
                    >
                      <div
                        className={`
                          flex-shrink-0 w-12 h-12 rounded-xl 
                          flex items-center justify-center
                          ${colors.bg}
                          transition-transform duration-300
                          group-hover:scale-110
                        `}
                      >
                        <Icon className={`h-5 w-5 ${colors.icon}`} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-400 mb-1">
                          {item.label}
                        </p>
                        <p className="text-base lg:text-lg font-semibold text-white truncate group-hover:text-gray-100 transition-colors">
                          {item.value}
                        </p>
                      </div>

                      {isLink && (
                        <div className="flex-shrink-0 self-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <ArrowUpRight className="h-5 w-5 text-gray-400" />
                        </div>
                      )}
                    </ContentWrapper>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Section des adresses - Siège et Bureau */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <AddressCard address={addresses.siege} type="siege" />
            <AddressCard address={addresses.bureau} type="bureau" />
          </div>
        </div>
      </div>
    </section>
  );
}
