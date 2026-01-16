// src/components/membership/steps/Step5Participation.tsx

import FormCheckbox from "@/components/ui/FormCheckbox";
import FormRadio from "@/components/ui/FormRadio";
import { participationOptions } from "@/lib/types/type";

export default function Step5Participation() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-stone-800 mb-2">
          Participation & Engagement
        </h2>
        <p className="text-stone-600">
          Let us know how you'd like to engage with AIOCCI activities.
        </p>
      </div>

      <div className="mb-6">
        <FormRadio
          label="Are you interested in participating in AIOCCI events and initiatives?"
          name="participateInEvents"
          options={participationOptions}
        />
      </div>

      <FormCheckbox
        label="Newsletter Subscription"
        name="receiveNewsletter"
        singleLabel="Yes, I would like to receive AIOCCI newsletters and official communications"
      />

      <div className="mt-8 space-y-4">
        <h3 className="text-lg font-semibold text-stone-800">
          What to expect:
        </h3>

        <div className="grid gap-4">
          <div className="flex items-start gap-4 p-4 bg-white border border-stone-200 rounded-xl">
            <div className="p-2 bg-amber-100 rounded-lg">
              <svg
                className="w-6 h-6 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-stone-800">Exclusive Events</h4>
              <p className="text-sm text-stone-600">
                Access to conferences, trade missions, and networking events
                across the region.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white border border-stone-200 rounded-xl">
            <div className="p-2 bg-amber-100 rounded-lg">
              <svg
                className="w-6 h-6 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-stone-800">Regular Updates</h4>
              <p className="text-sm text-stone-600">
                Monthly newsletters with market insights, opportunities, and
                member news.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white border border-stone-200 rounded-xl">
            <div className="p-2 bg-amber-100 rounded-lg">
              <svg
                className="w-6 h-6 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-stone-800">Member Directory</h4>
              <p className="text-sm text-stone-600">
                Connect directly with other members through our exclusive member
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
