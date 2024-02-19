// routes for handling errors and middleware functions. handles server errors, handles requests for routes that do not exist.
const handleError = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '500 Internal Server Error'});
};

const handleNotFound = (req, res) => {
    res.status(404).json({ '404 Application not found' });
};

module.exports = {
    handleError,
    handleNotFound,
};