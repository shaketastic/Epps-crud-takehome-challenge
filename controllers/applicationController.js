const express = require('express');

const {
    getAllApplications,
    getApplicationById,
    createApplication,
    updateApplication,
    deleteApplication,
} = require('./queries/jobApplicationsQueries');