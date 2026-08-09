import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  JWT_SECRET: z.string().min(10),
  EMAIL_USER: z.string().email(),
  EMAIL_PASS: z.string().min(1),
  FRONTEND_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);