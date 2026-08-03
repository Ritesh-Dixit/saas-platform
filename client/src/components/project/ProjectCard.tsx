import type { Project } from "../../services/projectService";

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
}

function ProjectCard({
  project,
  onEdit,
  onDelete,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-bold">
        {project.title}
      </h2>

      <p className="mb-4 text-gray-600">
        {project.description}
      </p>

      <p className="mb-6 text-sm text-gray-500">
        Created:{" "}
        {new Date(project.createdAt).toLocaleDateString()}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => onEdit(project)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(project.id)}
          className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;