const express = require("express");

const {
  getAllApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
} = require("./queries/jobApplicationsQueries");

const { validateApp } = require("../middleware/validationMiddleware");
// const { validateId } = require('../middleware/validationMiddleware');
const { applicationStatuses } = require("../constants");

const getAll = async (req, res) => {
  try {
    const applications = await getAllApplications();
    res.status(200).json({ data: applications });
  } catch (error) {
    res.status(500).json({ error: "500 Internal Server Error" });
  }
};

const getId = async (req, res) => {
  const { id } = req.params;
  try {
    const application = await getApplicationById(id);
    if (!application) {
      return res.status(404).json({ error: "404 Application not found" });
    }
    res.status(200).json({ data: application });
  } catch (error) {
    res.status(500).json({ error: "500 Internal Server Error" });
  }
};

const create = async (req, res) => {
  const { company, url, status } = req.body;
  const newApp = { company, url: url || null, status };
  try {
    // validate app data
    const errors = validateApp(newApp);
    if (errors.length > 0) {
      return res.status(400).json({ error: errors.join(", ") });
    }
    // check if status is valid
    if (!applicationStatuses[status]) {
      const allowed = Object.keys(applicationStatuses).join(", ");
      return res
        .status(400)
        .json({ error: `Bad request. Allowed status options are: ${allowed}` });
    }
    // create a new application
    const createdApplication = await createApplication(newApp);
    res.status(201).json({ data: createdApplication });
  } catch (error) {
    res.status(500).json({ error: "500 Internal Server Error" });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { company, url, status } = req.body;
  const updatedApplication = { company, url: url || null, status };
  try {
    const errors = validateApp(updatedApplication);
    if (errors.length > 0) {
      return res.status(400).json({ error: errors.join(", ") });
    }
    if (!applicationStatuses[status]) {
      const allowed = Object.keys(applicationStatuses).join(", ");
      return res
        .status(400)
        .json({ error: `Bad request. Allowed status options are: ${allowed}` });
    }
    const application = await updateApplication(id, updatedApplication);
    if (!application) {
      return res.status(404).json({ error: "404 Application not found" });
    }
    res.status(200).json({ data: application });
  } catch (error) {
    res.status(500).json({ error: "500 Internal Server Error" });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const application = await deleteApplication(id);
    if (!application) {
      return res.status(404).json({ error: "404 Application not found" });
    }
    res.status(200).json({ data: application });
  } catch (error) {
    res.status(500).json({ error: "500 Internal Server Error" });
  }
};

module.exports = {
  getAll,
  getId,
  create,
  update,
  remove,
};
