import dotenv from "dotenv";
dotenv.config();

import "./config/env";

import app from "./app";
import logger from "./utils/logger";

const PORT = process.env.PORT || 5000;

logger.info("Environment variables loaded successfully");

app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
  logger.info(`Environment: ${process.env.NODE_ENV}`);
});