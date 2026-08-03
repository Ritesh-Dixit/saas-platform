import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ProjectCard from "../../components/project/ProjectCard";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  type Project,
} from "../../services/projectService";

import ProjectForm from "../../components/project/ProjectForm";


function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch {
      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = async (
  title: string,
  description: string
) => {
  try {
    await createProject({
      title,
      description,
    });

    await fetchProjects();

    toast.success("Project created successfully");
  } catch (error: any) {
    console.error(error);

    const errors = error.response?.data?.errors;

    if (errors?.length) {
      toast.error(errors[0].message);
    } else {
      toast.error(
        error.response?.data?.message || "Failed to create project"
      );
    }
  }
};

const handleEditProject = async (project: Project) => {
  const title = prompt("Edit project title", project.title);

  if (!title) return;

  const description = prompt(
    "Edit project description",
    project.description
  );

  if (!description) return;

  try {
    await updateProject(project.id, {
      title,
      description,
    });

    toast.success("Project updated successfully");

    await fetchProjects();
  } catch (error: any) {
    toast.error(
      error.response?.data?.message || "Failed to update project"
    );
  }
};

const handleDeleteProject = async (id: number) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this project?"
  );

  if (!confirmDelete) return;

  try {
    await deleteProject(id);

    toast.success("Project deleted successfully");

    await fetchProjects();
  } catch (error: any) {
    toast.error(
      error.response?.data?.message || "Failed to delete project"
    );
  }
};

  if (loading) {
    return (
      <h2 className="p-6 text-xl">
        Loading projects...
      </h2>
    );
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">
        My Projects
      </h1>

     <ProjectForm onSubmit={handleCreateProject} />

      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
            key={project.id}
            project={project}
             onEdit={handleEditProject}
             onDelete={handleDeleteProject}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;