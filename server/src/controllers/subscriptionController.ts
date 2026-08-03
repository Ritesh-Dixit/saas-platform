import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create a subscription
export const createSubscription = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = (req as any).user?.id;
    const { planId } = req.body;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const plan = await prisma.plan.findUnique({
      where: {
        id: planId,
      },
    });

    if (!plan || !plan.isActive) {
      return res.status(404).json({
        success: false,
        message: "Plan not found or inactive",
      });
    }
    const existingSubscription =
  await prisma.subscription.findFirst({
    where: {
      userId,
      status: "ACTIVE",
    },
  });

if (existingSubscription) {
  return res.status(400).json({
    success: false,
    message:
      "You already have an active subscription",
  });
}

    const subscription =
      await prisma.subscription.create({
        data: {
          userId,
          planId,
          status: "ACTIVE",
        },
        include: {
          plan: true,
        },
      });

    return res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      subscription,
    });
  } catch (error) {
    console.error(
      "Create subscription error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to create subscription",
    });
  }
};

// Get current user's active subscription
export const getMySubscription = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = (req as any).user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const subscription =
      await prisma.subscription.findFirst({
        where: {
          userId,
          status: "ACTIVE",
        },
        include: {
          plan: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: "No active subscription found",
      });
    }

    return res.status(200).json({
      success: true,
      subscription,
    });
  } catch (error) {
    console.error(
      "Get subscription error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to get subscription",
    });
  }
};