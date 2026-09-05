"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Bike,
  Truck,
  CarFront,
  LayoutGrid,
  Home,
  Building,
  Building2,
  LandPlot,
  Warehouse,
  Store,
} from "lucide-react";

const vehicleCategories = [
  { name: "Heavy", count: "12,345 Ads", icon: Truck },
  { name: "Motorcycle", count: "8,234 Ads", icon: Bike },
  { name: "Pickup Truck", count: "6,542 Ads", icon: Truck },
  { name: "SUV", count: "15,321 Ads", icon: Car },
  { name: "Sedan", count: "18,765 Ads", icon: CarFront },
  { name: "All", count: "61,207 Ads", icon: LayoutGrid },
];

const propertyCategories = [
  { name: "All", count: "2 Listings", icon: Home },
  { name: "Apartment", count: "2 Listings", icon: Building },
  { name: "Office", count: "0 Listings", icon: Building2 },
  { name: "Land", count: "0 Listings", icon: LandPlot },
  { name: "Warehouse", count: "0 Listings", icon: Warehouse },
  { name: "Commercial", count: "0 Listings", icon: Store },
];

export default function ExploreCategories() {
  const [isProperty, setIsProperty] = useState(true);
  const displayedCategories = isProperty ? propertyCategories : vehicleCategories;

  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Explore Categories
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Find what you need faster.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mx-auto mb-6 flex w-fit rounded-3xl bg-gray-200 p-1">
          <button
            onClick={() => setIsProperty(true)}
            className={`rounded-3xl px-5 py-2 text-sm font-medium transition-all ${isProperty
                ? "bg-blue-600 text-white shadow-sm"
                : "text-gray-500 hover:text-gray-900"
              }`}
          >
            <div className="flex gap-2">
              <Home className="h-5 w-5"/>
              <span>Property</span>
            </div>
          </button>
          <button
            onClick={() => setIsProperty(false)}
            className={`rounded-3xl px-5 py-2 text-sm font-medium transition-all ${!isProperty
                ? "bg-blue-600 text-white shadow-sm"
                : "text-gray-500 hover:text-gray-900"
              }`}
          >
            <div className="flex gap-2">
              <Car className="h-5 w-5"/>
              <span>Vehicles</span>
            </div>
          </button>
        </div>

        {/* Animated Categories Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isProperty ? "property" : "vehicles"}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          >
            {displayedCategories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.name}
                  className="group flex min-h-[125px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50/40 hover:shadow-sm"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-white text-blue-600 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {category.name}
                  </span>
                  <span className="mt-1 text-xs text-gray-400">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}