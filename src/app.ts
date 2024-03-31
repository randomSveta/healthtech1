import express from "express";
import eventController from "./controllers/eventController";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", eventController);

export default app;
