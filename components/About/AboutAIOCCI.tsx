// components/AboutAIOCCI.tsx
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-300 hover:-translate-y-1">
    <div className="w-14 h-14 bg-gradient-to-br from-amber-700 to-amber-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-amber-900 mb-2">{title}</h3>
    <p className="text-amber-800/70 text-sm leading-relaxed">{description}</p>
  </div>
);

const AboutAIOCCI: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 py-20 px-4">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-800 via-amber-700 to-orange-800 bg-clip-text text-transparent">
              À propos de l'AIOCCI
            </span>
          </h1>

          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full" />
        </div>

        {/* Main Content Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-amber-200/50 overflow-hidden mb-16">
          {/* Top Accent Bar */}
          <div className="h-2 bg-gradient-to-r from-amber-600 via-amber-700 to-orange-700" />

          <div className="p-8 md:p-12 lg:p-16">
            {/* First Paragraph */}
            <div className="flex gap-6 mb-10">
              <div className="hidden md:flex flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg text-amber-900 leading-relaxed font-light">
                  <span className="font-bold text-amber-800">L'AIOCCI</span> est
                  une organisation économique indépendante orientée vers le
                  développement des relations d'affaires, réunissant des{" "}
                  <span className="font-semibold text-amber-700">
                    acteurs du secteur privé
                  </span>
                  , des{" "}
                  <span className="font-semibold text-amber-700">
                    institutions
                  </span>
                  , des{" "}
                  <span className="font-semibold text-amber-700">
                    entrepreneurs
                  </span>{" "}
                  et des{" "}
                  <span className="font-semibold text-amber-700">
                    investisseurs
                  </span>{" "}
                  engagés dans la construction de partenariats économiques
                  solides entre l'Afrique et la région de l'Océan Indien.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
              <div className="flex gap-1.5">
                <span className="w-2 h-2 bg-amber-400 rounded-full" />
                <span className="w-2 h-2 bg-amber-600 rounded-full" />
                <span className="w-2 h-2 bg-amber-800 rounded-full" />
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
            </div>

            {/* Second Paragraph */}
            <div className="flex gap-6 mb-10">
              <div className="hidden md:flex flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg  text-amber-900 leading-relaxed font-light">
                  Elle agit comme une{" "}
                  <span className="font-bold text-amber-800">
                    plateforme de référence
                  </span>{" "}
                  pour l'accompagnement des projets économiques, la facilitation
                  de l'accès aux marchés, la mise en réseau des acteurs clés et
                  le renforcement de la coopération public-privé.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
              <div className="flex gap-1.5">
                <span className="w-2 h-2 bg-amber-400 rounded-full" />
                <span className="w-2 h-2 bg-amber-600 rounded-full" />
                <span className="w-2 h-2 bg-amber-800 rounded-full" />
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
            </div>

            {/* Third Paragraph */}
            <div className="flex gap-6">
              <div className="hidden md:flex flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg  text-amber-900 leading-relaxed font-light">
                  Par son{" "}
                  <span className="font-semibold text-amber-700">
                    approche inclusive
                  </span>
                  , son{" "}
                  <span className="font-semibold text-amber-700">
                    ancrage régional
                  </span>{" "}
                  et son{" "}
                  <span className="font-semibold text-amber-700">
                    ouverture internationale
                  </span>
                  , l'AIOCCI contribue à structurer des initiatives à fort
                  impact, à encourager les investissements responsables et à
                  soutenir un{" "}
                  <span className="font-bold text-amber-800">
                    développement économique durable et partagé
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAIOCCI;
