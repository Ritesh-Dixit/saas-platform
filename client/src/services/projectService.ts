import api from "../api/axios";

export interface Project {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  userId: number;
}

export interface CreateProjectData {
  title: string;
  description: string;
}

// GET All Projects
export const getProjects = async (): Promise<Project[]> => {
  const response = await api.get("/projects");
  return response.data.projects;
};

// CREATE Project
export const createProject = async (data: CreateProjectData) => {
  const response = await api.post("/projects", data);
  return response.data;
};

// UPDATE Project
export const updateProject = async (
  id: number,
  data: CreateProjectData
) => {
  const response = await api.put(`/projects/${id}`, data);
  return response.data;
};

// DELETE Project
export const deleteProject = async (id: number) => {
  const response = await api.delete(`/projects/${id}`);
  return response.data;
};