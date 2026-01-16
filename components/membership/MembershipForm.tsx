// src/components/membership/MembershipForm.tsx

"use client";

import { useState, useCallback } from "react";
import { Formik, Form, FormikProps } from "formik";

import { validationSchemas } from "@/lib/validationSchemas";
import Stepper from "./Stepper";
import { initialValues, MembershipFormValues } from "@/lib/types/type";
import Step1MembershipType from "./step/Step1MembershipType";
import Step2OrganizationDetails from "./step/Step2OrganizationDetails";
import Step3ContactPerson from "./step/Step3ContactPerson";
import Step4Motivation from "./step/Step4Motivation";
import Step5Participation from "./step/Step5Participation";
import Step6Declaration from "./step/Step6Declaration";
import Step7Submission from "./step/Step7Submission";

const steps = [
  { title: "Membership", description: "Select your membership type" },
  { title: "Organization", description: "Organization details" },
  { title: "Contact", description: "Contact person information" },
  { title: "Motivation", description: "Your interests and goals" },
  { title: "Engagement", description: "Participation preferences" },
  { title: "Declaration", description: "Review and confirm" },
  { title: "Complete", description: "Application submitted" },
];

export default function MembershipForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isLastStep = currentStep === steps.length - 2; // step 5 (index 5) is last before completion
  const isComplete = currentStep === steps.length - 1;

  const handleNext = useCallback(
    (formikProps: FormikProps<MembershipFormValues>) => {
      // Reset touched state for next step
      formikProps.setTouched({});
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  const handleBack = useCallback(() => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleStepSubmit = async (
    formikProps: FormikProps<MembershipFormValues>
  ) => {
    const errors = await formikProps.validateForm();
    formikProps.setTouched(
      Object.keys(formikProps.values).reduce((acc, key) => {
        acc[key as keyof MembershipFormValues] = true;
        return acc;
      }, {} as Record<keyof MembershipFormValues, boolean>)
    );

    if (Object.keys(errors).length === 0) {
      if (isLastStep) {
        // Final submission
        formikProps.setSubmitting(true);
        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 2000));
          console.log("Form submitted:", formikProps.values);
          setIsSubmitted(true);
          setCurrentStep(steps.length - 1);
        } catch (error) {
          console.error("Submission error:", error);
        } finally {
          formikProps.setSubmitting(false);
        }
      } else {
        handleNext(formikProps);
      }
    }
  };

  const renderStep = (values: MembershipFormValues, isSubmitting: boolean) => {
    switch (currentStep) {
      case 0:
        return <Step1MembershipType />;
      case 1:
        return <Step2OrganizationDetails />;
      case 2:
        return <Step3ContactPerson />;
      case 3:
        return <Step4Motivation />;
      case 4:
        return <Step5Participation />;
      case 5:
        return <Step6Declaration />;
      case 6:
        return <Step7Submission values={values} isSubmitting={isSubmitting} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">AIOCCI</h1>
          <p className="text-amber-300 text-lg mb-1">
            African Indian Ocean Chamber of Commerce & Industry
          </p>
          <p className="text-stone-400 text-sm">
            Building Strong Economic Bridges Beyond Borders
          </p>
        </div>
      </header>

      {/* Form Container */}
      <main className=" mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">
              Membership Application Form
            </h2>
          </div>

          {/* Stepper */}
          <div className="px-6 pt-6">
            <Stepper currentStep={currentStep} steps={steps} />
          </div>

          {/* Form Content */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemas[currentStep]}
            onSubmit={() => {}}
            validateOnMount={false}
            validateOnChange={true}
            validateOnBlur={true}
            enableReinitialize={false}
          >
            {(formikProps) => (
              <Form className="p-6">
                {renderStep(formikProps.values, formikProps.isSubmitting)}

                {/* Navigation Buttons */}
                {!isComplete && (
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-200">
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className={`
                        inline-flex text-sm items-center gap-2 px-6 py-3 rounded-xl font-medium
                        transition-all duration-200
                        ${
                          currentStep === 0
                            ? "text-stone-400 cursor-not-allowed"
                            : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                        }
                      `}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Back
                    </button>

                    <button
                      type="button"
                      onClick={() => handleStepSubmit(formikProps)}
                      disabled={formikProps.isSubmitting}
                      className={`
                        inline-flex text-sm items-center gap-2 px-8 py-3 rounded-xl font-medium
                        transition-all duration-200 shadow-lg
                        ${
                          formikProps.isSubmitting
                            ? "bg-stone-400 cursor-not-allowed text-white"
                            : "bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white hover:shadow-xl transform hover:-translate-y-0.5"
                        }
                      `}
                    >
                      {formikProps.isSubmitting ? (
                        <>
                          <svg
                            className="w-5 h-5 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Processing...
                        </>
                      ) : isLastStep ? (
                        <>
                          Submit Application
                          <svg
                            className="w-5 h-5"
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
                        </>
                      ) : (
                        <>
                          Continue
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* Complete Step - Return to Home */}
                {isComplete && (
                  <div className="mt-8 text-center">
                    <button
                      type="button"
                      onClick={() => window.location.reload()}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-medium hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      Submit Another Application
                    </button>
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-stone-500">
          <p>
            © {new Date().getFullYear()} AIOCCI - African Indian Ocean Chamber
            of Commerce & Industry
          </p>
          <p className="mt-1">All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
