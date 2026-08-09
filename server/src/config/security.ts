import helmet from "helmet";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import cors from "cors";

export const helmetMiddleware = helmet();

export const corsMiddleware = cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
});

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
    max: 100,
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const hppMiddleware = hpp();