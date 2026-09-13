"use client";

import React, { useState } from "react";
import HeroSearch from "@/components/HeroSearch";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Home,
  Building2,
  Store,
  DollarSign,
  BedDouble,
  ArrowDownUp,
} from "lucide-react";

import { items, houses } from "@/constant/data";
import Image from "next/image";

const statusButton = ["All", "Buy", "Rent", "Mortgage"];

const Page = () => {
  const [filters, setFilters] = useState({
    search: "",
    propertyType: "All",
    status: "All",
    currency: "Any",
    price: "price",
    bedrooms: "All",
    sort: "price-low",
  });

  const filteredItems = houses
    .filter((item) => {

      if (
        filters.search &&
        !item.title.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      if (filters.propertyType !== "All" &&
        item.propertyType !== filters.propertyType) return false;

      if (filters.status !== "All" &&
        item.status !== filters.status) return false;

      if (filters.currency !== "Any" &&
        item.currency !== filters.currency) return false;

      if (filters.bedrooms !== "All" &&
        item.bedrooms !== Number(filters.bedrooms)) return false;

      if (filters.price !== "price") {
        const [min, max] = filters.price.split("-").map(Number);

        if (filters.price === "250000+" && item.price < 250000)
          return false;

        if (max && (item.price < min || item.price > max))
          return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (filters.sort === "price-low") return a.price - b.price;
      if (filters.sort === "price-high") return b.price - a.price;

      return 0;
    });

  return (
    <>
      <HeroSearch
        value={filters.search}
        onSearchChange={(value) =>
          setFilters((prev) => ({
            ...prev,
            search: value,
          }))
        }
      />

      <div className="mx-80 flex flex-col mh-[80vh]">

        <Select
          value={filters.propertyType}
          onValueChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              propertyType: value,
            }))
          }
        >
          <SelectTrigger className="w-[230px] rounded-xl border-gray-200 shadow-none bg-white p-5">
            <SelectValue placeholder="All Properties" />
          </SelectTrigger>

          <SelectContent className="bg-white absolute top-0 -left-27 ">
            <SelectItem value="All Properties">
              <div className="flex items-center gap-2">
                <Home size={16} />
                <span>All Properties</span>
              </div>
            </SelectItem>

            <SelectItem value="House">
              <div className="flex items-center gap-2">
                <Home size={16} />
                <span>House</span>
              </div>
            </SelectItem>

            <SelectItem value="Apartment">
              <div className="flex items-center gap-2">
                <Building2 size={16} />
                <span>Apartment</span>
              </div>
            </SelectItem>

            <SelectItem value="Commercial">
              <div className="flex items-center gap-2">
                <Store size={16} />
                <span>Commercial</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>


        <div className="mt-3 flex items-center gap-2">


          <div className="flex h-10 items-center rounded-xl bg-gray-300/40  p-1">
            {statusButton.map((button) => (
              <button
                key={button}
                type="button"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    status: button,
                  }))
                }
                className={`h-8 rounded-lg px-3 text-sm transition ${filters.status === button
                  ? "bg-white font-medium text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
                  }`}
              >
                {button}
              </button>
            ))}
          </div>


          <div className="flex h-10 items-center rounded-xl bg-gray-300/40 p-1">
            <button
              type="button"
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  currency: "Any",
                }))
              }
              className={`flex h-8 items-center gap-1 rounded-lg px-3 text-sm transition ${filters.currency === "Any"
                ? "bg-white font-medium text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-900"
                }`}
            >
              <DollarSign size={15} />
              Any
            </button>
            <button
              type="button"
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  currency: "USD",
                }))
              }
              className={`flex h-8 items-center gap-1 rounded-lg px-3 text-sm transition ${filters.currency === "USD"
                ? "bg-white font-medium text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-900"
                }`}
            >
              <DollarSign size={15} />
              USD
            </button>

            <button
              type="button"
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  currency: "AFN",
                }))
              }
              className={`flex h-8 items-center gap-1 rounded-lg px-3 text-sm transition ${filters.currency === "AFN"
                ? "bg-white font-medium text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-900"
                }`}
            >
              ؋ AFN
            </button>
          </div>


          <Select

            value={filters.price}
            onValueChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                price: value,
              }))
            }
          >
            <SelectTrigger className=" w-[130px] rounded-xl border-gray-200 shadow bg-white">
              <div className="flex items-center gap-2">
                <DollarSign size={16} />
                <SelectValue placeholder="Price" />
              </div>
            </SelectTrigger>

            <SelectContent className="bg-white absolute top-1 -left-15 p-2">
              <SelectItem value="price">Price</SelectItem>

              <SelectItem value="0-50000">
                Under 50,000
              </SelectItem>

              <SelectItem value="50000-100000">
                50,000 - 100,000
              </SelectItem>

              <SelectItem value="100000-250000">
                100,000 - 250,000
              </SelectItem>

              <SelectItem value="250000+">
                250,000+
              </SelectItem>
            </SelectContent>
          </Select>


          <Select
            value={filters.bedrooms}
            onValueChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                bedrooms: value,
              }))
            }
          >
            <SelectTrigger className="h-10 w-[120px] rounded-xl border-gray-200 shadow bg-white">
              <div className="flex items-center gap-2">
                <BedDouble size={16} />

                <SelectValue placeholder="All" />
              </div>
            </SelectTrigger>

            <SelectContent className="bg-white absolute top-1 -left-15">
              <SelectItem value="All">All</SelectItem>

              <SelectItem value="1">
                1 Bedroom
              </SelectItem>

              <SelectItem value="2">
                2 Bedrooms
              </SelectItem>

              <SelectItem value="3">
                3 Bedrooms
              </SelectItem>

              <SelectItem value="4">
                4 Bedrooms
              </SelectItem>

              <SelectItem value="5+">
                5+ Bedrooms
              </SelectItem>
            </SelectContent>
          </Select>


          <Select
            value={filters.sort}
            onValueChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                sort: value,
              }))
            }
          >
            <SelectTrigger className="h-10 w-[130px] rounded-xl border-gray-200 shadow bg-white">
              <div className="flex items-center gap-2">
                <ArrowDownUp size={16} />

                <SelectValue placeholder="Newest" />
              </div>
            </SelectTrigger>

            <SelectContent className="bg-white absolute top-1 -left-15">


              <SelectItem value="price-low">
                Price: Low to High
              </SelectItem>

              <SelectItem value="price-high">
                Price: High to Low
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {
          filteredItems.length > 0 ? (
            filteredItems.map((house) => (
              <div key={house.id}>
                <h1>{house.title}</h1>
                <h2>{house.price}</h2>
              </div>
            ))
          ) : (
            <div>
              <h1>Nothing Found!</h1>
            </div>
          )
        }

        <Image src ="https://plus.unsplash.com/premium_photo-1789052897449-3ad438f675d9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width = {200} height={200} />

      </div>
    </>
  );
};

export default Page;