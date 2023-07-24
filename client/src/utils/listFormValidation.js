import { useState } from "react";

function empty(value) {
  return !value || value.trim() === "" || value == 0;
}

function isNumber(value) {
  return /^[0-9]+$/.test(value);
}

function minMax(value, min, max) {
  return value < min || value > max;
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

let errors = {};

function listFormValidation(formData) {
  errors = {};
  const required = ["category", "title", "offer_type", "price"];
  required.forEach((field) => {
    if (empty(formData.offer[field])) {
      errors[field] = ` is required`;
    }
  });
  if (empty(formData.offer.location.voivodeship)) {
    errors["voivodeship"] = " is required";
  }

  if (empty(formData.offer.location.city)) {
    errors["city"] = " is required";
  }

  if (minMax(formData.offer.title.length, 0, 255)) {
    errors.title = " should be between 0-255 characters";
  }

  if (!isNumber(formData.offer.price)) {
    errors.price = " should be a number";
  } else {
    const price = parseInt(formData.offer.price, 10);
    if (minMax(price, 0, 999999)) {
      errors.price = "Price should be between 0-999999";
    }
  }

  if (formData.images_url && formData.images_url.length > 10) {
    errors.images_url = "Cannot have more than 10 image URLs";
  }

  if (formData.description && formData.description.length > 1000) {
    errors.description = " cannot be more than 1000 characters";
  }

  return errors;
}

export default listFormValidation;
