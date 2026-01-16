// src/lib/validationSchemas.ts

import * as Yup from "yup";

export const step1Schema = Yup.object({
  membershipType: Yup.string().required("Please select a membership type"),
});

export const step2Schema = Yup.object({
  organizationName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Organization/Individual name is required"),
  legalStatus: Yup.string().required("Legal status is required"),
  legalStatusOther: Yup.string().when("legalStatus", {
    is: "other",
    then: (schema) => schema.required("Please specify your legal status"),
    otherwise: (schema) => schema,
  }),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  businessSector: Yup.string().required("Business sector is required"),
  website: Yup.string().url("Please enter a valid URL").nullable(),
});

export const step3Schema = Yup.object({
  contactFullName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Full name is required"),
  contactPosition: Yup.string().required("Position/Title is required"),
  contactEmail: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  contactPhone: Yup.string()
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
      "Please enter a valid phone number"
    )
    .required("Phone number is required"),
});

export const step4Schema = Yup.object({
  motivation: Yup.string()
    .min(20, "Please provide more details (at least 20 characters)")
    .required("Please tell us why you wish to join AIOCCI"),
  areasOfInterest: Yup.array().min(
    1,
    "Please select at least one area of interest"
  ),
  areasOfInterestOther: Yup.string().when("areasOfInterest", {
    is: (val: string[]) => val?.includes("other"),
    then: (schema) =>
      schema.required("Please specify your other areas of interest"),
    otherwise: (schema) => schema,
  }),
});

export const step5Schema = Yup.object({
  participateInEvents: Yup.string().required("Please select your preference"),
  receiveNewsletter: Yup.boolean(),
});

export const step6Schema = Yup.object({
  declarationName: Yup.string().required("Please enter your name"),
  declarationDate: Yup.string().required("Please enter the date"),
  declarationAgreed: Yup.boolean()
    .oneOf([true], "You must agree to the declaration to proceed")
    .required("You must agree to the declaration"),
});

export const validationSchemas = [
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
  step6Schema,
];
