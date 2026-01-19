// components/Partners.tsx
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, Handshake } from "lucide-react";
import Link from "next/link";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Partner 1",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811862/1_fstvmg.jpg",
  },
  {
    id: 2,
    name: "Partner 2",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811862/2_rzyjrw.jpg",
  },
  {
    id: 3,
    name: "Partner 3",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811862/3_yblauo.jpg",
  },
  {
    id: 4,
    name: "Partner 4",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811862/4_bpphko.jpg",
  },
  {
    id: 5,
    name: "Partner 5",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811862/5_mpb0xw.jpg",
  },
  {
    id: 6,
    name: "Partner 6",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/6_uhxtpx.jpg",
  },
  {
    id: 7,
    name: "Partner 7",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/8_oirhzl.jpg",
  },
  {
    id: 8,
    name: "Partner 8",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/9_cier4o.jpg",
  },
  {
    id: 9,
    name: "Partner 9",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/10_wfzcfz.jpg",
  },
  {
    id: 10,
    name: "Partner 10",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/11_o0bgob.jpg",
  },
  {
    id: 11,
    name: "Partner 11",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811864/12_ilktfl.jpg",
  },
  {
    id: 12,
    name: "Partner 12",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811864/13_qyg6lm.jpg",
  },
  {
    id: 13,
    name: "Partner 13",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811861/14_ysjkup.jpg",
  },
  {
    id: 14,
    name: "Partner 14",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811862/15_rx8hmb.jpg",
  },
  {
    id: 15,
    name: "Partner 15",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811862/16_f4n1cg.jpg",
  },
  {
    id: 16,
    name: "Partner 16",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/17_qnz3aa.jpg",
  },
  {
    id: 17,
    name: "Partner 17",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/18_mhbb1v.jpg",
  },
  {
    id: 18,
    name: "Partner 18",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/19_e1zcyp.jpg",
  },
  {
    id: 19,
    name: "Partner 19",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/20_gwaral.jpg",
  },
  {
    id: 20,
    name: "Partner 20",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811864/21_gqdadx.jpg",
  },
  {
    id: 21,
    name: "Partner 21",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811864/22_udmjch.jpg",
  },
  {
    id: 22,
    name: "Partner 22",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811864/23_mrjkyj.jpg",
  },
  {
    id: 23,
    name: "Partner 23",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811914/24_rsjufb.jpg",
  },
  {
    id: 24,
    name: "Partner 24",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768812154/25_tapkjj.jpg",
  },
  {
    id: 25,
    name: "Partner 25",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768812154/26_ukejod.jpg",
  },
  {
    id: 26,
    name: "Partner 26",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768812154/27_v6dpvr.jpg",
  },
  {
    id: 27,
    name: "Partner 27",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768812154/28_jixzvy.jpg",
  },
  {
    id: 28,
    name: "Partner 28",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768812154/29_kdzylf.jpg",
  },
  {
    id: 29,
    name: "Partner 29",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768812154/30_x0grvi.jpg",
  },
  {
    id: 30,
    name: "Partner 30",
    logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768812155/31_nuvamo.jpg",
  },
];

const Partners = () => {
  const t = useTranslations("partners");

  return (
    <section className="w-full py-16 md:py-20 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-50/80 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-50/80 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold rounded-full mb-4 border border-blue-200/50">
            <Handshake className="w-4 h-4" />
            {t("badge")}
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {t("title")}
          </h2>

          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            <div className="w-12 h-1 bg-gradient-to-l from-cyan-600 to-cyan-400 rounded-full" />
          </div>
        </div>

        {/* Logos Grid - Compact Version */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 mb-12">
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 md:gap-4">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group relative aspect-square flex items-center justify-center p-2 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/10 group-hover:to-cyan-400/10 transition-all duration-300" />

                {/* Logo Image - Small Size */}
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain rounded-md group-hover:scale-110 transition-transform duration-300"
                    sizes="48px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button Section */}
        <div className="text-center">
          <Link
            href="/membership"
            className="group relative inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-base  rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            {/* Shine Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            {/* Icon */}
            <Handshake className="w-5 h-5 relative z-10" />

            {/* Text */}
            <span className="relative z-10">{t("cta")}</span>

            {/* Arrow */}
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
