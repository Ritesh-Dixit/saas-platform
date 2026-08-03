import api from "../api/axios";

export interface Plan {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  isActive: boolean;
  createdAt: string;
}

export const getPlans = async (): Promise<Plan[]> => {
  const response = await api.get("/plans");
  return response.data.plans;
};

export const choosePlan = async (
  planId: number
) => {
  const response = await api.post(
    "/subscriptions",
    {
      planId,
    }
  );

  return response.data;
};