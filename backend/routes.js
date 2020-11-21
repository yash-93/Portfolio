const express = require("express");
const router = express.Router();
const createProject = require("./controller");

router.post("/createProject", createProject.createProject);

module.exports = router;
