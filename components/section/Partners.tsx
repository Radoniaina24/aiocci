// components/Partners.tsx
import Image from "next/image";
import { useTranslations } from "next-intl";
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
    <section className="w-full py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            {t("badge")}
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group relative flex items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-1"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={80}
                className="object-contain group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
