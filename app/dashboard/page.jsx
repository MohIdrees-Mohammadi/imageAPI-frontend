"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";

export default function DashboardPage() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const response = await api.get("/api/photos/my");

        setPhotos(response.data.photos || []);
      } catch (error) {
        console.error("Failed to load photos:", error);
      } finally {
        setLoading(false);
      }
    };

    getPhotos();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          My Images
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          View all images uploaded to your account.
        </p>
      </div>

      {loading && (
        <div className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white py-20">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

            <p className="mt-4 text-sm text-slate-500">
              Loading your images...
            </p>
          </div>
        </div>
      )}

      {!loading && photos.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
            🖼️
          </div>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">
            No images yet
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            You haven't uploaded any images yet.
          </p>
        </div>
      )}

      {!loading && photos.length > 0 && (
        <>
          <div className="mb-5">
            <p className="text-sm font-medium text-slate-900">
              Your collection
            </p>

            <p className="text-xs text-slate-500">
              {photos.length} image{photos.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {photos.map((photo, index) => (
              <div
                key={photo._id || photo.publicId || index}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={photo.imageUrl}
                    alt={`Uploaded image ${index + 1}`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <p className="truncate text-sm font-medium text-slate-900">
                    Image {index + 1}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Uploaded image
                  </p>
                  
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}