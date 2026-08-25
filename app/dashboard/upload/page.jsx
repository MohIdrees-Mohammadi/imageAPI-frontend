"use client";

import { useState } from "react";
import api from "@/lib/axios";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setMessage("");
  };

  const handleUpload = async () => {
    if (!title.trim()) {
      setMessage("Please enter a title.");
      return;
    }

    if (!description.trim()) {
      setMessage("Please enter a description.");
      return;
    }

    if (!file) {
      setMessage("Please select an image.");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", file);
  
    try {
      setUploading(true);
      setMessage("");

      const response = await api.post(
        "/api/photos/",
        formData
      );

    

      setMessage("Image uploaded successfully!");

      // Reset form
      setTitle("");
      setDescription("");
      setFile(null);

      // Reset file input
      document.getElementById("image-upload").value = "";
    } catch (error) {
      console.error(error);

      setMessage(
        error?.response?.data?.message ||
          "Failed to upload image."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Upload Image
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Add an image with a title and description.
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="text-sm font-semibold text-slate-900"
            >
              Title
            </label>

            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter image title"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Description */}
          <div className="mt-5">
            <label
              htmlFor="description"
              className="text-sm font-semibold text-slate-900"
            >
              Description
            </label>

            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter image description"
              rows={4}
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Image */}
          <div className="mt-5">
            <label
              htmlFor="image-upload"
              className="text-sm font-semibold text-slate-900"
            >
              Image
            </label>

            <label
              htmlFor="image-upload"
              className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center transition hover:border-blue-400 hover:bg-blue-50/50"
            >
              {file ? (
                <>
                  <div className="h-48 w-full overflow-hidden rounded-xl">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Selected preview"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="mt-4 truncate text-sm font-medium text-slate-700">
                    {file.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>

                  <span className="mt-3 text-xs font-medium text-blue-600">
                    Click to change image
                  </span>
                </>
              ) : (
                <>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-600">
                    ↑
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-slate-900">
                    Choose an image
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    PNG, JPG or JPEG
                  </p>
                </>
              )}

              <input
                id="image-upload"
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Message */}
          {message && (
            <div className="mt-5 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
              {message}
            </div>
          )}

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
        </div>
      </div>
    </div>
  );
}