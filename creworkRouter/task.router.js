const { Router } = require("express");
const { createTask, getTask, updateTask, deleteTask } = require("../controller/task.controller");
const { Authorization } = require("../middleware/Authorization");
const taskRouter = Router();
taskRouter.post("/create", createTask);
taskRouter.get("/read",Authorization, getTask);
taskRouter.put("/update/:id", updateTask);
taskRouter.delete("/delete/:id", deleteTask)

module.exports = {
  taskRouter,
};
