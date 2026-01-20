import { Icons } from "../MembershipPage";

export const ImportantNoteSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-stone-50 to-amber-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl border border-amber-200/50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 px-8 py-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Icons.Info className="w-6 h-6 text-amber-200" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  Important Note on Events Participation
                </h3>
                <p className="text-amber-200 text-sm mt-1">
                  Please read carefully before joining
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10">
            <p className="text-stone-700 text-lg leading-relaxed mb-8">
              Membership provides access, visibility, and preferential
              conditions. Participation in events (exhibitions, summits, forums)
              is subject to separate registration, applicable to all
              participants.
            </p>

            {/* Benefits Grid */}
            <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-6 lg:p-8 border border-amber-100">
              <h4 className="font-bold text-amber-900 mb-6 flex items-center gap-2 text-lg">
                <Icons.Star className="w-5 h-5 text-amber-600" />
                Members benefit from:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                {/* Benefit 1 */}
                <div className="group bg-white p-6 rounded-xl border border-amber-200/50 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icons.Dollar className="w-6 h-6 text-amber-700" />
                  </div>
                  <h5 className="font-bold text-stone-800 mb-2">
                    Preferential Conditions
                  </h5>
                  <p className="text-stone-600 text-sm">
                    Special rates and exclusive offers for members
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="group bg-white p-6 rounded-xl border border-amber-200/50 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icons.Lightning className="w-6 h-6 text-amber-700" />
                  </div>
                  <h5 className="font-bold text-stone-800 mb-2">
                    Priority Access
                  </h5>
                  <p className="text-stone-600 text-sm">
                    First access to events and opportunities
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="group bg-white p-6 rounded-xl border border-amber-200/50 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icons.Eye className="w-6 h-6 text-amber-700" />
                  </div>
                  <h5 className="font-bold text-stone-800 mb-2">
                    Enhanced Visibility
                  </h5>
                  <p className="text-stone-600 text-sm">
                    Greater exposure compared to non-members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
