import prisma from "../config/prisma";

export const createProjectService = async (
  title: string,
  description: string,
  userId: number
) => {
  return await prisma.project.create({
    data: {
      title,
      description,
      userId,
    },
  });
};

export const getProjectsService = async (
  userId: number,
  search = "",
  page = 1,
  limit = 5,
  sort: "asc" | "desc" = "desc"
) => {
  const skip = (page - 1) * limit;

  const projects = await prisma.project.findMany({
    where: {
      userId,
      title: {
        contains: search,
        mode: "insensitive",
      },
    },
    orderBy: {
      createdAt: sort,
    },
    skip,
    take: limit,
  });

  const totalProjects = await prisma.project.count({
    where: {
      userId,
      title: {
        contains: search,
        mode: "insensitive",
      },
    },
  });

  return {
    projects,
    pagination: {
      total: totalProjects,
      page,
      limit,
      totalPages: Math.ceil(totalProjects / limit),
    },
  };
};

export const updateProjectService = async (
  id: number,
  title: string,
  description: string
) => {
  return await prisma.project.update({
    where: {
      id,
    },
    data: {
      title,
      description,
    },
  });
};

export const deleteProjectService = async (id: number) => {
  return await prisma.project.delete({
    where: {
      id,
    },
  });
};