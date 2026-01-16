// src/components/membership/steps/Step6Declaration.tsx

import FormCheckbox from "@/components/ui/FormCheckbox";
import FormInput from "@/components/ui/FormInput";

export default function Step6Declaration() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-stone-800 mb-2">Declaration</h2>
        <p className="text-stone-600">
          Please review and confirm your agreement to our terms.
        </p>
      </div>

      <div className="mb-6 p-6 bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl border border-stone-200">
        <h3 className="text-lg font-semibold text-stone-800 mb-4">
          Terms & Conditions
        </h3>
        <div className="prose prose-sm prose-stone max-w-none">
          <p className="text-stone-600 mb-4">
            By submitting this application, I hereby declare that:
          </p>
          <ul className="space-y-2 text-stone-600">
            <li className="flex items-start gap-2">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>The information provided is accurate and complete.</span>
            </li>
            <li className="flex items-start gap-2">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                I agree to comply with the statutes, internal regulations, and
                code of ethics of AIOCCI.
              </span>
            </li>
            <li className="flex items-start gap-2">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                I commit to upholding principles of integrity, transparency,
                neutrality, and ethical conduct.
              </span>
            </li>
            <li className="flex items-start gap-2">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                I understand that membership is subject to validation by the
                AIOCCI Secretariat.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormInput
          label="Full Name"
          name="declarationName"
          placeholder="Enter your full name as signature"
          required
        />
        <FormInput label="Date" name="declarationDate" type="date" required />
      </div>

      <div className="mt-6 p-4 border-2 border-amber-200 bg-amber-50 rounded-xl">
        <FormCheckbox
          label="Agreement"
          name="declarationAgreed"
          singleLabel="I have read, understood, and agree to the terms and conditions above. I confirm that all information provided is true and accurate."
        />
      </div>
    </div>
  );
}
