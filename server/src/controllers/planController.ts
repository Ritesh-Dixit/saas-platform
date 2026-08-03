import { Request, Response } from "express";
import prisma from "../config/prisma";

// Create a new plan
export const createPlan = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      description,
      price,
      duration,
    } = req.body;

    const plan = await prisma.plan.create({
      data: {
        name,
        description,
        price,
        duration,
      },
    });

    res.status(201).json({
      success: true,
      message: "Plan created successfully",
      plan,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create plan",
    });
  }
};

// Get all active plans
export const getPlans = async (
  req: Request,
  res: Response
) => {
  try {
    const plans = await prisma.plan.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        price: "asc",
      },
    });

    res.status(200).json({
      success: true,
      plans,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch plans",
    });
  }
};