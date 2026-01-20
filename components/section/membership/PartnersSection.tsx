import { Partner, PartnerLogo } from "./PartnerLogo";

interface PartnerCategory {
  title: string;
  type: "platinum" | "institutional" | "standard";
  partners: Partner[];
}

const partnerCategories: PartnerCategory[] = [
  {
    title: "Platinum Strategic Members",
    type: "platinum",
    partners: [
      {
        name: "Gate Africa Group",
        logo: "/partners/gate-africa-group.png",
        website: "https://www.gateafricagroup.com",
      },
    ],
  },
  {
    title: "Institutional & Public Partners",
    type: "institutional",
    partners: [
      {
        name: "FCCIM",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768826246/fcc_suvb9u.jpg",
        website: "https://www.fccim.org",
      },
      {
        name: "CCIMM",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768826246/cci_lkyyvd.jpg",
        website: "https://www.ccimm.mg",
      },
    ],
  },
  {
    title: "Partners",
    type: "standard",
    partners: [
      {
        website: "#",
        name: "Partner 1",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811862/1_fstvmg.jpg",
      },
      {
        website: "#",
        name: "Partner 2",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811862/2_rzyjrw.jpg",
      },
      {
        website: "#",
        name: "Partner 3",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811862/3_yblauo.jpg",
      },
      {
        website: "#",
        name: "Partner 4",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811862/4_bpphko.jpg",
      },
      {
        website: "#",
        name: "Partner 5",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811862/5_mpb0xw.jpg",
      },
      {
        website: "#",
        name: "Partner 6",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/6_uhxtpx.jpg",
      },
      {
        website: "#",
        name: "Partner 7",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/8_oirhzl.jpg",
      },
      {
        website: "#",
        name: "Partner 8",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/9_cier4o.jpg",
      },
      {
        website: "#",
        name: "Partner 9",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/10_wfzcfz.jpg",
      },
      {
        website: "#",
        name: "Partner 10",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/11_o0bgob.jpg",
      },
      {
        website: "#",
        name: "Partner 11",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811864/12_ilktfl.jpg",
      },
      {
        website: "#",
        name: "Partner 12",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811864/13_qyg6lm.jpg",
      },
      {
        website: "#",
        name: "Partner 13",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811861/14_ysjkup.jpg",
      },
      {
        website: "#",
        name: "Partner 14",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811862/15_rx8hmb.jpg",
      },
      {
        website: "#",
        name: "Partner 15",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811862/16_f4n1cg.jpg",
      },
      {
        website: "#",
        name: "Partner 16",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/17_qnz3aa.jpg",
      },
      {
        website: "#",
        name: "Partner 17",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/18_mhbb1v.jpg",
      },
      {
        website: "#",
        name: "Partner 18",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/19_e1zcyp.jpg",
      },
      {
        website: "#",
        name: "Partner 19",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811863/20_gwaral.jpg",
      },
      {
        website: "#",
        name: "Partner 20",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811864/21_gqdadx.jpg",
      },
      {
        website: "#",
        name: "Partner 21",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811864/22_udmjch.jpg",
      },
      {
        website: "#",
        name: "Partner 22",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811864/23_mrjkyj.jpg",
      },
      {
        website: "#",
        name: "Partner 23",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768811914/24_rsjufb.jpg",
      },
      {
        website: "#",
        name: "Partner 24",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768812154/25_tapkjj.jpg",
      },
      {
        website: "#",
        name: "Partner 25",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768812154/26_ukejod.jpg",
      },
      {
        website: "#",
        name: "Partner 26",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768812154/27_v6dpvr.jpg",
      },
      {
        website: "#",
        name: "Partner 27",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768812154/28_jixzvy.jpg",
      },
      {
        website: "#",
        name: "Partner 28",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768812154/29_kdzylf.jpg",
      },
      {
        website: "#",
        name: "Partner 29",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768812154/30_x0grvi.jpg",
      },
      {
        website: "#",
        name: "Partner 30",
        logo: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768812155/31_nuvamo.jpg",
      },
    ],
  },
];

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 text-amber-700 font-semibold text-sm uppercase tracking-wider mb-4">
            <span className="w-12 h-px bg-amber-400"></span>
            Our Network
            <span className="w-12 h-px bg-amber-400"></span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 mb-6">
            Our Partners & Members
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Join a network of prestigious organizations across Africa and the
            Indian Ocean region
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
