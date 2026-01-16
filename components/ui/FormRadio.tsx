// src/components/membership/ui/FormRadio.tsx

import { useField } from "formik";

interface Option {
  id: string;
  label: string;
  price?: string;
  description?: string;
}

interface FormRadioProps {
  label: string;
  name: string;
  options: Option[];
  variant?: "default" | "card";
}

export default function FormRadio({
  label,
  name,
  options,
  variant = "default",
}: FormRadioProps) {
  const [field, meta, helpers] = useField(name);
  const hasError = meta.touched && meta.error;

  if (variant === "card") {
    return (
      <div className="mb-5">
        <label className="block text-sm font-medium text-stone-700 mb-3">
          {label}
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="grid gap-3">
          {options.map((option) => (
            <label
              key={option.id}
              className={`
                relative flex items-start p-4 rounded-xl border-2 cursor-pointer
                transition-all duration-200 hover:shadow-md
                ${
                  field.value === option.id
                    ? "border-amber-600 bg-amber-50 shadow-md"
                    : "border-stone-200 bg-white hover:border-stone-300"
                }
              `}
            >
              <input
                type="radio"
                name={name}
                value={option.id}
                checked={field.value === option.id}
                onChange={() => helpers.setValue(option.id)}
                className="sr-only"
              />
              <div
                className={`
                flex-shrink-0 w-5 h-5 rounded-full border-2 mr-4 mt-0.5
                flex items-center justify-center transition-all duration-200
                ${
                  field.value === option.id
                    ? "border-amber-600 bg-amber-600"
                    : "border-stone-300"
                }
              `}
              >
                {field.value === option.id && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-medium ${
                      field.value === option.id
                        ? "text-amber-900"
                        : "text-stone-800"
                    }`}
                  >
                    {option.label}
                  </span>
                  {option.price && (
                    <span
                      className={`
                      text-sm font-semibold px-3 py-1 rounded-full
                      ${
                        option.price === "Free"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }
                    `}
                    >
                      {option.price}
                    </span>
                  )}
                </div>
                {option.description && (
                  <p className="mt-1 text-sm text-stone-500">
                    {option.description}
                  </p>
                )}
              </div>
            </label>
          ))}
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

  return (
    <div className="mb-5">
      <label className="block text-sm font-medium text-stone-700 mb-3">
        {label}
        <span className="text-red-500 ml-1">*</span>
      </label>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label
            key={option.id}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg border-2 cursor-pointer
              transition-all duration-200
              ${
                field.value === option.id
                  ? "border-amber-600 bg-amber-50"
                  : "border-stone-200 bg-white hover:border-stone-300"
              }
            `}
          >
            <input
              type="radio"
              name={name}
              value={option.id}
              checked={field.value === option.id}
              onChange={() => helpers.setValue(option.id)}
              className="sr-only"
            />
            <div
              className={`
              w-4 h-4 rounded-full border-2 flex items-center justify-center
              ${
                field.value === option.id
                  ? "border-amber-600"
                  : "border-stone-300"
              }
            `}
            >
              {field.value === option.id && (
                <div className="w-2 h-2 rounded-full bg-amber-600" />
              )}
            </div>
            <span
              className={`text-sm font-medium ${
                field.value === option.id ? "text-amber-900" : "text-stone-700"
              }`}
            >
              {option.label}
            </span>
          </label>
        ))}
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
