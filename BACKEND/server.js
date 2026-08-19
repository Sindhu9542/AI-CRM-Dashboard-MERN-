console.log("SERVER.JS STARTED");
import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import { connectDB } from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/error.middleware.js";

import authRoutes from "./routes/auth.route.js";
import leadRoutes from "./routes/lead.route.js";
import contactRoutes from "./routes/contact.route.js";
import noteRoute from "./routes/note.route.js";
import taskRoute from "./routes/task.route.js";
import aiRoutes from "./routes/ai.route.js";
import analyticsRoutes from "./routes/analytics.route.js";
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

/* ---------------------------------- Routes ---------------------------------- */
app.get("/api/health", (req, res) =>
  res.json({ success: true, status: "ok", service: "TTP CRM API" })
);

app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/notes", noteRoute);
app.use("/api/tasks", taskRoute);
app.use("/api/ai", aiRoutes);
app.use("/api/analytics", analyticsRoutes);


/* -------------------------- Error handling (last) --------------------------- */
app.use(notFound);
app.use(errorHandler);

/* ----------------------------------- Boot ----------------------------------- */
const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () =>
      console.log(`✅ TTP CRM API running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  }
};

start();

export default app;