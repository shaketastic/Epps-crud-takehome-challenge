/*
 * Query functions you can use to interact with
 * your application's fake "database" (in-memory JSON object)
 *
 * You should understand how these functions work and what they
 * return, but you should not have to modify them them.
 *
 * If you find that you have to modify the functions, either:
 * a) you have found a bug and you should notify your instructor ASAP
 * or
 * b) you are doing something wrong.
 */
let { jobApplications } = require("../db/data/jobApplicationsData.json");
let lastId = jobApplications.length;

// this function retrieves all job applications stored in the jobApp array, no params, returns an array containing all job applications.
const getAllApplications = async () => {
  return jobApplications;
};

// retrieves a specific job application by its ID, takes 1 param, uses .find() method to search for job app with the ID. If found returns: the job app object, if none: undefined.
const getApplicationById = async (id) => {
  return jobApplications.find((application) => application.id === id);
};

// creates new job app and adds it to the array, takes one param 'applcation'. creates new ID for the job app by incrementing the 'lastId' --> assigns to id property of the new app.
const createApplication = async (application) => {
  jobApplications.push({
    id: ++lastId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...application,
  });
  return jobApplications[jobApplications.length - 1];
};

// updates existing job application with the ID, takes 2 params: 'id' and 'application'. Finds the index, updates to current date and time, uses '...' spread operator to merge updated details, returns updated job app object.
const updateApplication = async (id, application) => {
  const idx = jobApplications.findIndex(
    (currApplication) => currApplication.id === id
  );
  jobApplications[idx] = {
    ...jobApplications[idx],
    updatedAt: new Date().toISOString(),
    ...application,
  };
  return jobApplications[idx];
};

// deletes an existing job app with the ID, takes 1 param 'id' --> id to delete. It then finds the index of the job app with the id, removes it from the array using splice, and returns the dleted job app object. 
const deleteApplication = async (id) => {
  const idx = jobApplications.findIndex(
    (currApplication) => currApplication.id === id
  );
  const deletedjobApplication = jobApplications[idx];
  jobApplications = jobApplications.filter(
    (application) => application.id !== id
  );
  return deletedjobApplication;
};

module.exports = {
  getAllApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
};
