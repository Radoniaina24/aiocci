// src/components/membership/steps/Step1MembershipType.tsx

import FormRadio from "@/components/ui/FormRadio";
import { membershipTypes } from "@/lib/types/type";

export default function Step1MembershipType() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-stone-800 mb-2">
          Membership Type
        </h2>
        <p className="text-stone-600">
          Select the membership category that best fits your organization or
          profile.
        </p>
      </div>

      <FormRadio
        label="Type of Membership"
        name="membershipType"
        options={membershipTypes}
        variant="card"
      />

      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="text-sm text-amber-800">
            <p className="font-medium mb-1">Membership Benefits</p>
            <p className="text-amber-700">
              All members gain access to our network of African and Indian Ocean
              business leaders, exclusive events, and trade opportunities.
              Premium tiers include additional strategic benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
