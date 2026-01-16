// src/components/membership/steps/Step7Submission.tsx

import { MembershipFormValues, membershipTypes } from "@/lib/types/type";

interface Step7SubmissionProps {
  values: MembershipFormValues;
  isSubmitting: boolean;
}

export default function Step7Submission({
  values,
  isSubmitting,
}: Step7SubmissionProps) {
  const selectedMembership = membershipTypes.find(
    (m) => m.id === values.membershipType
  );

  if (isSubmitting) {
    return (
      <div className="animate-fadeIn text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
          <div className="w-16 h-16 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin" />
        </div>
        <h2 className="text-2xl font-bold text-stone-800 mb-2">
          Submitting Your Application
        </h2>
        <p className="text-stone-600">
          Please wait while we process your membership application...
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-stone-800 mb-2">
          Application Submitted Successfully!
        </h2>
        <p className="text-stone-600">
          Thank you for applying to join AIOCCI. We've received your
          application.
        </p>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-amber-900 mb-4">
          Application Summary
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between py-2 border-b border-amber-200">
            <span className="text-amber-700">Membership Type</span>
            <span className="font-medium text-amber-900">
              {selectedMembership?.label}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b border-amber-200">
            <span className="text-amber-700">Organization</span>
            <span className="font-medium text-amber-900">
              {values.organizationName}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b border-amber-200">
            <span className="text-amber-700">Contact Person</span>
            <span className="font-medium text-amber-900">
              {values.contactFullName}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b border-amber-200">
            <span className="text-amber-700">Email</span>
            <span className="font-medium text-amber-900">
              {values.contactEmail}
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-amber-700">Annual Fee</span>
            <span className="font-bold text-amber-900">
              {selectedMembership?.price}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-stone-800 mb-4">
          What's Next?
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-8 h-8 bg-amber-100 rounded-full text-amber-700 font-bold text-sm flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="font-medium text-stone-800">Application Review</h4>
              <p className="text-sm text-stone-600">
                Your application will be reviewed by the AIOCCI Secretariat
                within 5-7 business days.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-8 h-8 bg-amber-100 rounded-full text-amber-700 font-bold text-sm flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="font-medium text-stone-800">Confirmation Email</h4>
              <p className="text-sm text-stone-600">
                You'll receive an email with the outcome of your application and
                payment instructions (if applicable).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-8 h-8 bg-amber-100 rounded-full text-amber-700 font-bold text-sm flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="font-medium text-stone-800">Welcome to AIOCCI</h4>
              <p className="text-sm text-stone-600">
                Upon approval, you'll gain access to our member portal and
                exclusive benefits.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-6 bg-stone-800 rounded-xl text-white">
        <h4 className="font-semibold mb-2">Need Assistance?</h4>
        <p className="text-stone-300 mb-4">
          Contact our membership team for any questions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:contact@aiocci.org"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
          >
            <svg
              className="w-5 h-5"
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
            contact@aiocci.org
          </a>
          <a
            href="https://www.aiocci.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
          >
            <svg
              className="w-5 h-5"
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
            www.aiocci.org
          </a>
        </div>
      </div>
    </div>
  );
}
