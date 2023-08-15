import {
  isEmpty,
  isNumber,
  containsOnlyDigits,
  isInRange,
  isValidUrl,
} from "./validationFunctions";

// Validation schema for the form
const validationSchema = {
  "offer.category": [
    {
      validate: (value) => !isEmpty(value),
      message: "Category is required",
    },
  ],
  "offer.title": [
    {
      validate: (value) => !isEmpty(value),
      message: "Title is required",
    },
    {
      validate: (value) => value.length <= 255,
      message: "Title should be between 0-255 characters",
    },
  ],
  "offer.location.voivodeship": [
    {
      validate: (value) => !isEmpty(value),
      message: "Voivodeship is required",
    },
  ],
  "offer.location.city": [
    {
      validate: (value) => !isEmpty(value),
      message: "City is required",
    },
  ],
  "offer.offer_type": [
    {
      validate: (value) => !isEmpty(value),
      message: "Offer Type is required",
    },
  ],
  "offer.price": [
    {
      validate: (value) => !isEmpty(value),
      message: "Price is required",
    },
    {
      validate: (value) => isNumber(value),
      message: "Price should be a number",
    },
    {
      validate: (value) => containsOnlyDigits(value),
      message: "Price should NOT contain comma(,) or dot(.)",
    },
    {
      validate: (value) => isInRange(value, 0, 999999),
      message: "Price should be between 0-999999",
    },
  ],
  "offer.images_url": [
    {
      validate: (value) => value && value.length <= 10,
      message: "Cannot have more than 10 image URLs",
    },
  ],
  "offer.description": [
    {
      validate: (value) => !value || value.length <= 1000,
      message: "Description cannot be more than 1000 characters",
    },
  ],
  "offer.consent": [
    {
      validate: (value) => value === true && value,
      message:
        "You must agree Term Of Service and Acknowledge our Privacy Policy",
    },
  ],

  "product_details.brand": [
    {
      validate: (value) => !isEmpty(value),
      message: "Brand is required",
    },
  ],
  "product_details.model": [
    {
      validate: (value) => !isEmpty(value),
      message: "Model is required",
    },
    {
      validate: (value) => value.length >= 1 && value.length <= 25,
      message: "Model should be between 1-25 characters",
    },
  ],
  "product_details.year": [
    {
      validate: (value) => !isEmpty(value),
      message: "Year is required",
    },
    {
      validate: (value) => isNumber(value),
      message: "Year should be a number",
    },
    {
      validate: (value) => isInRange(value, 1990, 2024),
      message: "Year should be between 1990 - 2024",
    },
  ],
  "product_details.mileage": [
    {
      validate: (value) => !isEmpty(value),
      message: "Mileage is required",
    },
    {
      validate: (value) => isNumber(value),
      message: "Mileage should be a number",
    },
    {
      validate: (value) => containsOnlyDigits(value),
      message: "Mileage should NOT contain comma(,) or dot(.)",
    },
    {
      validate: (value) => isInRange(value, 0, 500000),
      message: "Mileage should be between 0 - 500000",
    },
  ],
  "product_details.engine_size": [
    {
      validate: (value) => !isEmpty(value),
      message: "Engine size is required",
    },
    {
      validate: (value) => isNumber(value),
      message: "Engine size should be a number",
    },
    {
      validate: (value) => isInRange(value, 0.5, 5.0),
      message: "Engine size should be between 0.5 - 5",
    },
  ],
  "product_details.transmission": [
    {
      validate: (value) => !isEmpty(value),
      message: "Transmission is required",
    },
  ],
  "product_details.fuel_type": [
    {
      validate: (value) => !isEmpty(value),
      message: "Fuel Type is required",
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
function listFormValidation(formData) {
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

export default listFormValidation;
