const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    status: {
      type: String,
      enum: ["Todo", "Inprogress", "UnderReview", "Completed"],
      required: true,
    },
    priority: { type: String, required: true },
    deadline: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);
const TaskModal = mongoose.model("tasks", taskSchema);
module.exports = { TaskModal };
