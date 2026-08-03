import { Router } from "express";

import {
  createSubscription,
  getMySubscription,
} from "../controllers/subscriptionController";
import { authenticate } from "../middleware/auth.middleware";
const router = Router();

/**
 * @swagger
 * /api/subscriptions:
 *   post:
 *     summary: Create a subscription
 *     tags:
 *       - Subscriptions
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - planId
 *             properties:
 *               planId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Subscription created successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Plan not found or inactive
 */

router.post(
  "/",
  authenticate,
  createSubscription
);

/**
 * @swagger
 * /api/subscriptions/me:
 *   get:
 *     summary: Get my active subscription
 *     tags:
 *       - Subscriptions
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Active subscription found
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: No active subscription found
 */

router.get(
  "/me",
  authenticate,
  getMySubscription
);

export default router;