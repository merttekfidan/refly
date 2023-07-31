// Helper function to check if a value is empty
function isEmpty(value) {
  return !value || value.trim() === "" || value === "0";
}

// Helper function to check if a value is a valid number
function isNumber(value) {
  return /^[0-9]+$/.test(value);
}

// Helper function to check if a value is within a specified range
function isInRange(value, min, max) {
  return value >= min && value <= max;
}

// Helper function to check if a URL is valid
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

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
      validate: (value) => isInRange(parseInt(value, 10), 0, 999999),
      message: "Price should be between 0-999999",
    },
  ],
  "offer.images_url": [
    {
      validate: (value) => value && value.length <= 10,
      message: "Cannot have more than 10 image URLs",
    },
    {
      validate: (value) => !value || value.every(isValidUrl),
      message: "Invalid image URL",
    },
  ],
  "offer.description": [
    {
      validate: (value) => !value || value.length <= 1000,
      message: "Description cannot be more than 1000 characters",
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
      validate: (value) => value.length >= 5 && value.length <= 25,
      message: "Model should be between 5-25 characters",
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
      validate: (value) => isInRange(parseInt(value, 10), 1990, 2024),
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
      validate: (value) => isInRange(parseInt(value, 10), 0, 500000),
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
      validate: (value) => isInRange(parseInt(value, 10), 0.5, 5),
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
