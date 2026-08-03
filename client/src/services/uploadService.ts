import api from "../api/axios";

export interface UploadResponse {
  success: boolean;
  message: string;
  file: {
    filename: string;
    originalname: string;
    size: number;
    mimetype: string;
    url: string;
  };
}

export const uploadImage = async (
  image: File
): Promise<UploadResponse> => {
  const formData = new FormData();

  formData.append("image", image);

  const response = await api.post(
    "/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};