"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";

export default function SettingsPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await api.get("/api/auth/me");

        setUser(response.data);
      } catch (error) {
        console.error("Failed to load user:", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white py-20">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Settings
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Manage your account information and preferences.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Information */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Profile Information
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Your account information
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Full Name
              </p>

              <p className="mt-2 font-medium text-slate-900">
                {user.name}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Email Address
              </p>

              <p className="mt-2 font-medium text-slate-900">
                {user.email}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Account Role
              </p>

              <p className="mt-2 font-medium capitalize text-slate-900">
                {user.role || "User"}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Account Status
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />

                <span className="font-medium text-green-600">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Account */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Account
          </h3>

          <div className="mt-5 space-y-4">
            <div className="rounded-xl bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-700">
                Active Account
              </p>

              <p className="mt-1 text-xs text-green-600">
                Your account is currently active.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-700">
                Authentication
              </p>

              <p className="mt-1 text-xs text-blue-600">
                You are securely authenticated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}