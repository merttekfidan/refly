import {
  isEmpty,
  isNumber,
  containsOnlyDigits,
  isInRange,
  isValidUrl,
} from "./validationFunctions";

// Validation schema for the form
const validationSchema = {
  username: [
    {
      validate: (value) => !isEmpty(value),
      message: "Username is required",
    },
  ],
  email: [
    {
      validate: (value) => !isEmpty(value),
      message: "Email is required",
    },
  ],
  password: [
    {
      validate: (value) => value.length >= 6,
      message: "Your password must be at least 6 characters long.",
    },
  ],
  consent: [
    {
      validate: (value) => value === true && value,
      message:
        "You must agree Term Of Service and Acknowledge our Privacy Policy",
    },
  ],
};

// Helper function to check if a nested field exists in the formData
function fieldExists(formData, fieldPath) {
  const fieldKeys = fieldPath.split(".");
  let currentField = formData;

  for (const key of fieldKeys) {
    if (!currentField.hasOwnProperty(key)) {
      return false;
    }
    currentField = currentField[key];
  }

  return true;
}

// Generic validation function to validate the formData against the validation schema
function signUpValidation(formData) {
  const errors = {};

  for (const field in validationSchema) {
    if (fieldExists(formData, field)) {
      for (const validation of validationSchema[field]) {
        const { validate, message } = validation;
        const value = field.split(".").reduce((acc, key) => acc[key], formData);
        if (!validate(value)) {
          errors[field] = message;
          break;
        }
      }
    }
  }

  return errors;
}

export default signUpValidation;
