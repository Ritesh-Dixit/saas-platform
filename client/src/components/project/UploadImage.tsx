import { useState } from "react";
import toast from "react-hot-toast";
import { uploadImage } from "../../services/uploadService";

interface UploadImageProps {
  onUploadSuccess: (imageUrl: string) => void;
}

function UploadImage({ onUploadSuccess }: UploadImageProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Allow only image files
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image.");
      return;
    }

    // Max size: 5 MB
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be smaller than 5 MB.");
      return;
    }

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select an image first.");
      return;
    }

    try {
      setLoading(true);

      const response = await uploadImage(selectedFile);

      toast.success("Image uploaded successfully!");

      onUploadSuccess(response.file.url);
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Upload failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl border p-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mt-4 h-40 rounded-lg object-cover"
        />
      )}

      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-white disabled:bg-gray-400"
      >
        {loading ? "Uploading..." : "Upload Image"}
      </button>
    </div>
  );
}

export default UploadImage;