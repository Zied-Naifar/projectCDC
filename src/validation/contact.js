const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateContactInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.subject = !isEmpty(data.subject) ? data.subject : "";
  data.contain = !isEmpty(data.contain) ? data.contain : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.subject)) {
    errors.subject = "Subject field is required";
  }

  if (Validator.isEmpty(data.contain)) {
    errors.contain = "Contain field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
