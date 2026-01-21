import { useTranslations } from "next-intl";
import { Partner, PartnerLogo } from "./PartnerLogo";

interface PartnerCategory {
  title: string;
  type: "platinum" | "institutional" | "standard";
  partners: Partner[];
}

export const PartnersSection: React.FC = () => {
  const t = useTranslations("member.partners");

  const partnerCategories = t.raw("categories") as PartnerCategory[];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 text-amber-700 font-semibold text-sm uppercase tracking-wider mb-4">
            <span className="w-12 h-px bg-amber-400"></span>
            {t("badge")}
            <span className="w-12 h-px bg-amber-400"></span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 mb-6">
            {t("title")}
          </h2>

          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>

          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Partner Categories */}
        {partnerCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16 last:mb-0">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>

              <h3
                className={`text-lg lg:text-xl font-bold px-6 py-2 rounded-full ${
                  category.type === "platinum"
                    ? "bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border border-amber-300"
                    : category.type === "institutional"
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : "bg-stone-100 text-stone-700 border border-stone-200"
                }`}
              >
                {category.type === "platinum" && "★ "}
                {category.title}
              </h3>

              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
            </div>

            {/* Partners Grid */}
            <div
              className={`grid gap-4 lg:gap-6 ${
                category.type === "platinum"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto"
                  : category.type === "institutional"
                    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                    : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
              }`}
            >
              {category.partners.map((partner, partnerIndex) => (
                <PartnerLogo
                  key={partnerIndex}
                  partner={partner}
                  type={category.type}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
