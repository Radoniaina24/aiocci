import Link from "next/link";
import { Icons } from "../MembershipPage";
import { useTranslations } from "next-intl";

export const HeroSection: React.FC = () => {
  const t = useTranslations("member.hero");

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900">
        {/* Decorative Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-amber-600/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-800/50 backdrop-blur-sm border border-amber-700/50 rounded-full px-5 py-2.5 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
            </span>
            <span className="text-amber-200 text-sm font-medium tracking-wide">
              {t("badge")}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            {t("titlePrefix")}{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                AIOCCI
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-50"></span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-amber-100/90 mb-6 leading-relaxed max-w-3xl mx-auto">
            {t("description1")}
          </p>

          <p className="text-base lg:text-lg text-amber-100/70 mb-10 leading-relaxed max-w-3xl mx-auto">
            {t("description2")}
          </p>

          {/* Annual Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-900/60 to-amber-800/60 backdrop-blur-sm rounded-xl px-6 py-3 mb-12 border border-amber-700/40">
            <Icons.Calendar className="w-5 h-5 text-amber-400" />
            <span className="text-amber-100 font-semibold">{t("annual")}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/subscribe"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 overflow-hidden rounded-xl font-bold text-base transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center text-amber-900">
                <Icons.CreditCard className="w-5 h-5 mr-2" />
                {t("ctaSubscribe")}
                <Icons.ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            <Link
              href="/apply"
              className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              <Icons.Document className="w-5 h-5 mr-2" />
              {t("ctaApply")}
              <Icons.ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#fafaf9"
          />
        </svg>
      </div>
    </section>
  );
};
