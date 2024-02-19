// { validateApp }, { validateId } --> input validation checks and logic, separate from controllers

const validateApp = (application) => {
  const errors = [];

  if (!application.company) {
    errors.push("Company is required");
  }

  if (!application.status) {
    errors.push("Please provide a company name");
  }

  if (!application.status) {
    errors.push("Please provide a status");
  } else if (!statuses.includes(application.status)) {
    errors.push(
      `Invalid status. Allowed status options are: ${statuses.join(", ")}`
    );
  }

  return errors;
};

module.exports = {
  validateApp,
};
