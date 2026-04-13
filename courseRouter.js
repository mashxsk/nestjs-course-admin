const express = require("express");
const courseController = require("../controllers/courseController");
const courseRouter = express.Router();

courseRouter.get("/create", courseController.create);
courseRouter.post("/create", courseController.postCreate);
courseRouter.get("/edit/:id", courseController.edit);
courseRouter.post("/edit", courseController.postEdit);
courseRouter.post("/delete/:id", courseController.delete);

module.exports = courseRouter;