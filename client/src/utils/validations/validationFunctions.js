// Helper function to check if a value is empty
function isEmpty(value) {
  return !value || value.trim() === "" || value === "0";
}

// Helper function to check if a value is a valid number
function isNumber(value) {
  return !isNaN(value);
}

function containsOnlyDigits(value) {
  const numberRegex = /^\d+$/;
  return numberRegex.test(value);
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

module.exports = {
  isEmpty,
  isNumber,
  containsOnlyDigits,
  isInRange,
  isValidUrl,
};
