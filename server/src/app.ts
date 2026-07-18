import express from "express";
import path from "path";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

import authRoutes from "./routes/auth.routes";
import projectRoutes from "./routes/project.routes";
import uploadRoutes from "./routes/upload.routes";

import { errorHandler } from "./middleware/error.middleware";
import logger from "./utils/logger";
import {
  helmetMiddleware,
  corsMiddleware,
  limiter,
  hppMiddleware,
} from "./config/security";

const app = express();

app.use(helmetMiddleware);

app.use(corsMiddleware);

app.use(limiter);

app.use(hppMiddleware);

app.use(express.json());

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
});

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.get("/", (req, res) => {
  res.send("Home Route Working");
});

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/upload", uploadRoutes);

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use(errorHandler);

export default app;