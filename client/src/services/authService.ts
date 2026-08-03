import api from "../api/axios";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (
  data: RegisterData
) => {
  const response = await api.post(
    "/auth/register",
    data
  );

  return response.data;
};