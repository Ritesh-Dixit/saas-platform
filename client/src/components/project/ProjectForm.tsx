import { useState } from "react";
import toast from "react-hot-toast";
interface ProjectFormProps {
  onSubmit: (title: string, description: string) => Promise<void>;
}

function ProjectForm({ onSubmit }: ProjectFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!title.trim()) {
  toast.error("Project title is required");
  return;
}

if (description.trim().length < 10) {
  toast.error("Description must be at least 10 characters");
  return;
}

    await onSubmit(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-xl border bg-white p-6 shadow-sm"
    >
      <h2 className="mb-4 text-xl font-bold">
        Create Project
      </h2>

      <input
        type="text"
        placeholder="Project title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 w-full rounded-lg border p-3"
      />

      <textarea
        placeholder="Project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-4 h-32 w-full rounded-lg border p-3"
      />

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Create Project
      </button>
    </form>
  );
}

export default ProjectForm;