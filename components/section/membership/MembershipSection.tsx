import { MembershipCard, MembershipType } from "./MembershipCard";
interface Benefit {
  text: string;
}

const membershipTypes: MembershipType[] = [
  {
    id: "platinum",
    title: "Platinum Strategic Member",
    description:
      "Designed for major corporations, investors, multinational groups, and strategic leaders seeking top-level positioning and influence within AIOCCI's ecosystem.",
    benefits: [
      {
        text: "Priority visibility on AIOCCI website, publications, and official communications",
      },
      { text: "Strategic branding at flagship events" },
      { text: "VIP access to B2B, B2G, and investor meetings" },
      {
        text: "Direct engagement with decision-makers, institutions, and partners",
      },
      {
        text: "Speaking and panel participation opportunities (subject to program selection)",
      },
      {
        text: "Invitations to exclusive roundtables and closed-door strategic sessions",
      },
    ],
    isFree: false,
    isPremium: true,
    buttonText: "Subscribe & Pay",
    buttonLink: "/subscribe/platinum",
    iconType: "crown",
  },
  {
    id: "corporate",
    title: "Corporate & Enterprise Member",
    description:
      "For established companies and organizations looking to expand regionally or internationally.",
    benefits: [
      { text: "Visibility on AIOCCI digital platforms and member directory" },
      { text: "Access to business matchmaking (B2B / B2G)" },
      { text: "Participation in AIOCCI events, forums, and exhibitions" },
      {
        text: "Networking with investors, institutions, and strategic partners",
      },
      { text: "Access to market insights and sector-based initiatives" },
    ],
    isFree: false,
    isPremium: false,
    buttonText: "Subscribe & Pay",
    buttonLink: "/subscribe/corporate",
    iconType: "building",
  },
  {
    id: "startup",
    title: "Startups & SMEs Member",
    description:
      "Tailored for startups and small & medium-sized enterprises seeking growth, exposure, and international opportunities.",
    benefits: [
      {
        text: "Access to international economic platforms at an adapted level",
      },
      { text: "Visibility within the AIOCCI startup & SME ecosystem" },
      { text: "Participation in networking sessions and selected forums" },
      { text: "Access to mentorship, partnerships, and business connections" },
      {
        text: "Opportunities to showcase solutions during exhibitions and innovation spaces",
      },
    ],
    isFree: false,
    isPremium: false,
    buttonText: "Subscribe & Pay",
    buttonLink: "/subscribe/startup",
    iconType: "rocket",
  },
  {
    id: "institutional",
    title: "Institutional & Public Partner",
    description:
      "Reserved for public institutions, chambers of commerce, federations, and para-public organizations supporting economic cooperation and development.",
    benefits: [
      { text: "Recognition as an official institutional partner" },
      {
        text: "Participation in policy dialogue and economic cooperation initiatives",
      },
      { text: "Access to AIOCCI international platforms and events" },
      { text: "Co-branding and institutional visibility on selected programs" },
    ],
    isFree: true,
    isPremium: false,
    buttonText: "Apply – Free Membership",
    buttonLink: "/apply/institutional",
    iconType: "institution",
  },
  {
    id: "honorary",
    title: "Honorary & Advisory Member",
    description:
      "For distinguished leaders, experts, and advisors contributing strategic guidance and thought leadership.",
    benefits: [
      { text: "Recognition as an Honorary or Advisory Member of AIOCCI" },
      {
        text: "Participation in advisory boards, panels, and strategic discussions",
      },
      {
        text: "Contribution to vision, policy orientation, and long-term initiatives",
      },
    ],
    isFree: true,
    isPremium: false,
    buttonText: "Apply – Free Membership",
    buttonLink: "/apply/honorary",
    iconType: "award",
  },
  {
    id: "media",
    title: "Media, Journalists & Influencers",
    description:
      "For media professionals and digital voices supporting visibility and outreach of AIOCCI initiatives.",
    benefits: [
      { text: "Accredited access to AIOCCI events and announcements" },
      { text: "Collaboration on content, coverage, and storytelling" },
      { text: "Visibility through official AIOCCI communication channels" },
      { text: "Participation in press briefings and media engagements" },
    ],
    isFree: true,
    isPremium: false,
    buttonText: "Apply – Free Membership",
    buttonLink: "/apply/media",
    iconType: "media",
  },
];
export const MembershipSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 text-amber-700 font-semibold text-sm uppercase tracking-wider mb-4">
            <span className="w-12 h-px bg-amber-400"></span>
            Choose Your Path
            <span className="w-12 h-px bg-amber-400"></span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 mb-6">
            Types of Membership & Benefits
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Select the membership that best fits your organization and unlock
            exclusive benefits
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
