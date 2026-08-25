"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import api from "@/lib/axios";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        const response = await api.get("/api/auth/me");
        setUser(response.data);
      } catch (error) {
        console.error(error);

        localStorage.removeItem("token");
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.replace("/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

          <p className="mt-4 text-sm font-medium text-slate-500">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: "⌂",
    },
    {
      name: "Upload Images",
      href: "/dashboard/upload",
      icon: "↑",
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: "⚙",
    },
  ];

  const isActive = (href) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }

    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ================= SIDEBAR ================= */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white lg:block">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-slate-200 px-6">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
              A
            </div>

            <span className="text-lg font-bold text-slate-900">
              AdminPanel
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 p-4">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition ${
                  active
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="w-5 text-center">{item.icon}</span>

                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 w-full border-t border-slate-200 p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            <span>↪</span>
            Logout
          </button>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <div className="lg:pl-64">
        {/* Top Navbar */}
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Mobile Logo */}
            <Link
              href="/dashboard"
              className="flex items-center gap-3 lg:hidden"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                A
              </div>

              <span className="font-bold text-slate-900">
                AdminPanel
              </span>
            </Link>

            {/* Desktop Title */}
            <div className="hidden lg:block">
              <h1 className="text-lg font-semibold text-slate-900">
                {pathname === "/dashboard"
                  ? "Dashboard"
                  : pathname.startsWith("/dashboard/upload")
                  ? "Upload Images"
                  : "Settings"}
              </h1>

              <p className="text-xs text-slate-500">
                Manage your account
              </p>
            </div>

            {/* User */}
            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold text-slate-900">
                  {user.name}
                </p>

                <p className="text-xs text-slate-500">
                  {user.email}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                {user.name?.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}