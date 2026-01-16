// src/components/membership/Stepper.tsx

interface StepperProps {
  currentStep: number;
  steps: { title: string; description: string }[];
}

export default function Stepper({ currentStep, steps }: StepperProps) {
  return (
    <div className="mb-8">
      {/* Desktop Stepper */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  font-semibold text-sm transition-all duration-300
                  ${
                    index < currentStep
                      ? "bg-amber-600 text-white"
                      : index === currentStep
                      ? "bg-amber-700 text-white ring-4 ring-amber-200"
                      : "bg-stone-200 text-stone-500"
                  }
                `}
                >
                  {index < currentStep ? (
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
                  ) : (
                    index + 1
                  )}
                </div>
                <div className="mt-2 text-center">
                  <p
                    className={`text-xs font-medium ${
                      index <= currentStep ? "text-amber-700" : "text-stone-400"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`
                  h-0.5 w-12 lg:w-20 xl:w-28 mx-2 transition-all duration-300
                  ${index < currentStep ? "bg-amber-600" : "bg-stone-200"}
                `}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Stepper */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-amber-700">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-stone-500">
            {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
          </span>
        </div>
        <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
        <p className="mt-3 text-sm font-medium text-stone-700">
          {steps[currentStep].title}
        </p>
        <p className="text-xs text-stone-500">
          {steps[currentStep].description}
        </p>
      </div>
    </div>
  );
}
