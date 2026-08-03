import { z } from "zod";

export const createPlanSchema = z.object({
  name: z
    .string()
    .min(2, "Plan name must be at least 2 characters")
    .max(50, "Plan name cannot exceed 50 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description cannot exceed 500 characters"),

  price: z
    .number()
    .min(0, "Price cannot be negative"),

  duration: z
    .string()
    .min(2, "Duration is required")
    .max(20, "Duration cannot exceed 20 characters"),

  isActive: z
    .boolean()
    .optional(),
});

export const updatePlanSchema = z.object({
  name: z
    .string()
    .min(2, "Plan name must be at least 2 characters")
    .max(50, "Plan name cannot exceed 50 characters")
    .optional(),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description cannot exceed 500 characters")
    .optional(),

  price: z
    .number()
    .min(0, "Price cannot be negative")
    .optional(),

  duration: z
    .string()
    .min(2, "Duration is required")
    .max(20, "Duration cannot exceed 20 characters")
    .optional(),

  isActive: z
    .boolean()
    .optional(),
});