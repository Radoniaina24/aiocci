// src/components/membership/steps/Step4Motivation.tsx

import FormCheckbox from "@/components/ui/FormCheckbox";
import FormInput from "@/components/ui/FormInput";
import FormTextarea from "@/components/ui/FormTextarea";
import { areasOfInterestOptions, MembershipFormValues } from "@/lib/types/type";
import { useFormikContext } from "formik";

export default function Step4Motivation() {
  const { values } = useFormikContext<MembershipFormValues>();

  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-stone-800 mb-2">
          Motivation & Interests
        </h2>
        <p className="text-stone-600">
          Help us understand your goals and how we can best support you.
        </p>
      </div>

      <FormTextarea
        label="Why do you wish to join AIOCCI?"
        name="motivation"
        rows={5}
        placeholder="Briefly describe your expectations, objectives, or areas of interest in joining AIOCCI..."
        required
      />

      <FormCheckbox
        label="Key areas of interest (select all that apply)"
        name="areasOfInterest"
        options={areasOfInterestOptions}
        isMultiple
      />

      {values.areasOfInterest.includes("other") && (
        <FormInput
          label="Please specify other areas of interest"
          name="areasOfInterestOther"
          placeholder="Enter your other areas of interest"
          required
        />
      )}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-5 h-5 text-amber-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <span className="font-medium text-amber-800">Global Network</span>
          </div>
          <p className="text-sm text-amber-700">
            Connect with businesses across Africa and the Indian Ocean region.
          </p>
        </div>
        <div className="p-4 bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl border border-stone-200">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-5 h-5 text-stone-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="font-medium text-stone-700">
              Strategic Partnerships
            </span>
          </div>
          <p className="text-sm text-stone-600">
            Build lasting partnerships with industry leaders and innovators.
          </p>
        </div>
      </div>
    </div>
  );
}
