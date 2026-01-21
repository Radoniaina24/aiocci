import { MembershipCard, MembershipType } from "./MembershipCard";
import { useTranslations } from "next-intl";

export const MembershipSection: React.FC = () => {
  const t = useTranslations("member.membership");

  const membershipTypes = t.raw("types") as MembershipType[];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-stone-50">
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

        {/* Membership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {membershipTypes.map((membership, index) => (
            <MembershipCard
              key={membership.id}
              membership={membership}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
