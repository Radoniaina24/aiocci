// src/components/membership/ui/FormCheckbox.tsx

import { useField } from "formik";

interface Option {
  id: string;
  label: string;
}

interface FormCheckboxProps {
  label: string;
  name: string;
  options?: Option[];
  isMultiple?: boolean;
  singleLabel?: string;
}

export default function FormCheckbox({
  label,
  name,
  options,
  isMultiple = false,
  singleLabel,
}: FormCheckboxProps) {
  const [field, meta, helpers] = useField(name);
  const hasError = meta.touched && meta.error;

  // Pour checkbox simple (boolean)
  if (!isMultiple) {
    const handleSingleChange = () => {
      helpers.setValue(!field.value);
      helpers.setTouched(true);
    };

    return (
      <div className="mb-5">
        <div
          onClick={handleSingleChange}
          className="flex items-start gap-3 cursor-pointer group"
        >
          <div className="relative mt-0.5">
            <input
              type="checkbox"
              checked={!!field.value}
              onChange={handleSingleChange}
              className="sr-only"
            />
            <div
              className={`
              w-5 h-5 rounded border-2 transition-all duration-200
              flex items-center justify-center
              ${
                field.value
                  ? "bg-amber-600 border-amber-600"
                  : "bg-white border-stone-300 group-hover:border-stone-400"
              }
            `}
            >
              {field.value && (
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          </div>
          <span className="text-sm text-stone-700 select-none">
            {singleLabel || label}
          </span>
        </div>
        {hasError && (
          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {meta.error}
          </p>
        )}
      </div>
    );
  }

  // Pour checkbox multiple (array)
  const currentValues: string[] = Array.isArray(field.value) ? field.value : [];

  const handleMultipleChange = (optionId: string) => {
    let newValues: string[];
    if (currentValues.includes(optionId)) {
      newValues = currentValues.filter((v) => v !== optionId);
    } else {
      newValues = [...currentValues, optionId];
    }
    helpers.setValue(newValues);
    helpers.setTouched(true);
  };

  return (
    <div className="mb-5">
      <label className="block text-sm font-medium text-stone-700 mb-3">
        {label}
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options?.map((option) => {
          const isChecked = currentValues.includes(option.id);
          return (
            <div
              key={option.id}
              onClick={() => handleMultipleChange(option.id)}
              className={`
                flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer
                transition-all duration-200 select-none
                ${
                  isChecked
                    ? "border-amber-600 bg-amber-50"
                    : "border-stone-200 bg-white hover:border-stone-300"
                }
              `}
            >
              <div
                className={`
                w-5 h-5 rounded border-2 flex items-center justify-center
                transition-all duration-200 flex-shrink-0
                ${
                  isChecked
                    ? "bg-amber-600 border-amber-600"
                    : "border-stone-300"
                }
              `}
              >
                {isChecked && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span
                className={`text-sm font-medium ${
                  isChecked ? "text-amber-900" : "text-stone-700"
                }`}
              >
                {option.label}
              </span>
            </div>
          );
        })}
      </div>
      {hasError && (
        <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {meta.error}
        </p>
      )}
    </div>
  );
}
