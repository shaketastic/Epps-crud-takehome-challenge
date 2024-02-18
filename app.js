const express = require("express");
const cors = require("cors");

const app = express();

// TODO: Add application-wide middleware
app.use(cors());

// TODO: Add controller(s)

// TODO: Implement health check route

module.exports = app;


// Resources: https://www.geeksforgeeks.org/rest-api-using-the-express-to-perform-crud-create-read-update-delete/