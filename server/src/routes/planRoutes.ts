import { Router } from "express";

import {
  createPlan,
  getPlans,
} from "../controllers/planController";

const router = Router();

// Create a plan
router.post("/", createPlan);

// Get all plans
router.get("/", getPlans);

export default router;