// src/components/membership/steps/Step2OrganizationDetails.tsx

import FormInput from "@/components/ui/FormInput";
import FormRadio from "@/components/ui/FormRadio";
import { legalStatusOptions, MembershipFormValues } from "@/lib/types/type";
import { useFormikContext } from "formik";

export default function Step2OrganizationDetails() {
  const { values } = useFormikContext<MembershipFormValues>();

  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-stone-800 mb-2">
          Organization Details
        </h2>
        <p className="text-stone-600">
          Tell us about your organization or yourself.
        </p>
      </div>

      <FormInput
        label="Name of Organization / Institution / Individual"
        name="organizationName"
        placeholder="Enter your organization or personal name"
        required
      />

      <div className="mb-5">
        <label className="block text-sm font-medium text-stone-700 mb-3">
          Legal Status <span className="text-red-500">*</span>
        </label>
        <FormRadio label="" name="legalStatus" options={legalStatusOptions} />
      </div>

      {values.legalStatus === "other" && (
        <FormInput
          label="Please specify your legal status"
          name="legalStatusOther"
          placeholder="Enter your legal status"
          required
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormInput
          label="Country"
          name="country"
          placeholder="Enter your country"
          required
        />
        <FormInput
          label="City"
          name="city"
          placeholder="Enter your city"
          required
        />
      </div>

      <FormInput
        label="Business Sector / Activity"
        name="businessSector"
        placeholder="e.g., Technology, Finance, Agriculture"
        required
      />

      <FormInput
        label="Website"
        name="website"
        type="url"
        placeholder="https://www.example.com"
        helperText="Optional - Enter your organization's website"
      />
    </div>
  );
}
