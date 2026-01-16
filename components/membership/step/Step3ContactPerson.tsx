// src/components/membership/steps/Step3ContactPerson.tsx

import FormInput from "@/components/ui/FormInput";

export default function Step3ContactPerson() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-stone-800 mb-2">
          Contact Person
        </h2>
        <p className="text-stone-600">
          Provide the details of the primary contact person for this membership.
        </p>
      </div>

      <FormInput
        label="Full Name"
        name="contactFullName"
        placeholder="Enter your full name"
        required
      />

      <FormInput
        label="Position / Title"
        name="contactPosition"
        placeholder="e.g., CEO, Director, Manager"
        required
      />

      <FormInput
        label="Email Address"
        name="contactEmail"
        type="email"
        placeholder="your.email@example.com"
        required
      />

      <FormInput
        label="Phone / WhatsApp"
        name="contactPhone"
        type="tel"
        placeholder="+1 234 567 8900"
        required
        helperText="Include country code for international numbers"
      />

      <div className="mt-6 p-4 bg-stone-50 border border-stone-200 rounded-xl">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-stone-500 mt-0.5 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <div className="text-sm text-stone-600">
            <p className="font-medium mb-1">Data Protection</p>
            <p>
              Your contact information will be kept confidential and used only
              for AIOCCI membership communications and activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
