import { z } from "zod";

export const createSubscriptionSchema = z.object({
  planId: z
    .number("Plan ID must be a number")
    .int("Plan ID must be an integer")
    .positive("Plan ID must be positive"),
});