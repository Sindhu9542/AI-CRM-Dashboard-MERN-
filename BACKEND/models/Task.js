import mongoose from "mongoose";

export const TASK_STATUSES = ["Pending", "In Progress", "Completed"];
export const TASK_PRIORITIES = ["Low", "Medium", "High"];

const taskSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
    },
    description: { type: String, default: "" },
    dueDate: { type: Date, default: null },
    status: {
      type: String,
      enum: TASK_STATUSES,
      default: "Pending",
      index: true,
    },
    priority: { type: String, enum: TASK_PRIORITIES, default: "Medium" },
    relatedLead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
      default: null,
    },
    relatedContact: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contact",
      default: null,
    },
    completedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

// Auto-set completedAt
taskSchema.pre("save", function (next) {
  if (this.isModified("status")) {
    if (this.status === "Completed" && !this.completedAt) {
      this.completedAt = new Date();
    }
    if (this.status !== "Completed") {
      this.completedAt = null;
    }
  }
  next();
});

taskSchema.index({ owner: 1, status: 1, dueDate: 1 });

export const Task = mongoose.model("Task", taskSchema);