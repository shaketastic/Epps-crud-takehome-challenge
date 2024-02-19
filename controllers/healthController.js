const healthCheck = (req, res) => {
  res.status(200).json({ message: "The API is running" });
};

module.exports = {
  healthCheck,
};
