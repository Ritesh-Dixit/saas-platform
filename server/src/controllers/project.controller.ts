import { Request, Response } from "express";
import prisma from "../config/prisma";
import asyncHandler from "express-async-handler";
import {
  createProjectService,
  getProjectsService,
  updateProjectService,
  deleteProjectService,
} from "../services/project.service";
import logger from "../utils/logger";

export const createProject = asyncHandler(
  async (req: Request, res: Response) => {
    const { title, description } = req.body;

    const project = await createProjectService(
      title,
      description,
      (req as any).user.id
    );

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  }
);

export const getProjects = asyncHandler(
  async (req: Request, res: Response) => {
    const search = (req.query.search as string) || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const sort = req.query.sort === "asc" ? "asc" : "desc";

    const result = await getProjectsService(
      (req as any).user.id,
      search,
      page,
      limit,
      sort
    );

    res.status(200).json({
      success: true,
      ...result,
    });
  }
);

export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const project = await prisma.project.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    if (project.userId !== (req as any).user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    const updatedProject = await updateProjectService(
      Number(id),
      title,
      description
    );

    res.status(200).json(updatedProject);
  } catch (error) {
    logger.error(
      error instanceof Error ? error.stack ?? error.message : String(error)
    );

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const project = await prisma.project.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    if (project.userId !== (req as any).user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    await deleteProjectService(Number(id));

    res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    logger.error(
      error instanceof Error ? error.stack ?? error.message : String(error)
    );

    res.status(500).json({
      message: "Server Error",
    });
  }
};