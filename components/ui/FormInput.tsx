// src/components/membership/ui/FormInput.tsx

import { useField } from "formik";
import { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  helperText?: string;
}

export default function FormInput({
  label,
  helperText,
  ...props
}: FormInputProps) {
  const [field, meta] = useField(props.name);
  const hasError = meta.touched && meta.error;

  return (
    <div className="mb-5">
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-stone-700 mb-2"
      >
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        {...field}
        {...props}
        id={props.name}
        className={`
          w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
          bg-white text-stone-800 placeholder-stone-400
          focus:outline-none focus:ring-2 focus:ring-amber-500/20
          ${
            hasError
              ? "border-red-400 focus:border-red-500"
              : "border-stone-200 focus:border-amber-600 hover:border-stone-300"
          }
        `}
      />
      {helperText && !hasError && (
        <p className="mt-1.5 text-sm text-stone-500">{helperText}</p>
      )}
      {hasError && (
        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
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
