import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface CreatePlanData {
  name: string;
  description: string;
  price: number;
  duration: string;
  isActive?: boolean;
}

interface UpdatePlanData {
  name?: string;
  description?: string;
  price?: number;
  duration?: string;
  isActive?: boolean;
}

// Create a new plan
export const createPlan = async (
  data: CreatePlanData
) => {
  return prisma.plan.create({
    data,
  });
};

// Get all active plans
export const getPlans = async () => {
  return prisma.plan.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      price: "asc",
    },
  });
};

// Get one plan by ID
export const getPlanById = async (
  id: number
) => {
  return prisma.plan.findUnique({
    where: {
      id,
    },
  });
};

// Update a plan
export const updatePlan = async (
  id: number,
  data: UpdatePlanData
) => {
  return prisma.plan.update({
    where: {
      id,
    },
    data,
  });
};

// Delete a plan
export const deletePlan = async (
  id: number
) => {
  return prisma.plan.delete({
    where: {
      id,
    },
  });
};