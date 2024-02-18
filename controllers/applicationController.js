const express = require('express');

const {
    getAllApplications,
    getApplicationById,
    createApplication,
    updateApplication,
    deleteApplication,
} = require('./queries/jobApplicationsQueries');

const { validateApp } = require('../middleware/validationMiddleware');
// const { validateId } = require('../middleware/validationMiddleware');
const { applicationStatuses } = require('../constants');


const getAll = async (req, res) => {
    try {
        const applications = await getAllApplications();
        res.status(200).json({ data: applications });
    } catch (error) {
        res.status(500).json({ error: '500 Internal Server Error'});
    }
};

const getId = async (req, res) => {
    const { id } = req.params;
    try {
        const application = await getApplicationById(id);
        if(!application) {
            return res.status(404).json({ error: '404 Not Found' })
        }
        res.status(200).json({ data: application });
    } catch (error) {
        res.status(500).json({ error: '500 Internal Server Error' })
    }
};

const create = async(req, res) => {
    const { company, url, status } = req.body;
    const newApp = { company, url, status };
    try {
        // validate app data
        const errors = validateApp(newApp);
        if(errors.length > 0) {
            return res.status(400).json({ error: errors.join(', ') });
        }
        // check if status is valid
        if(!applicationStatuses[status]) {
            const allowed = Object.keys(applicationStatuses).join(', ');
            return res.status(400).json({ error: `Bad request. Allowed status are: ${allowed}`});
        }
        // create a new application
        const createApp = await updateApplication(id, updatedApplication)
    }
}
