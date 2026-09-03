"use client";

import { Search, MapPin, Sparkles } from "lucide-react";

const locations = [
  "Shahr-e-Naw",
  "Khairkhana",
  "Karte Char",
  "Taimani",
  "Darulaman",
  "Wazir Akbar Khan",
];

export default function HeroSearch() {
  return (
    <section className="h-70 bg-linear-to-b from-[#E8EAFA] via-[#f4f5fa] to-[#fafafa] px-auto mt-24">
      
      <div className="mx-auto flex  max-w-6xl py-6 flex-col items-center justify-center">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 rounded-full border border-[#cbd2ec] bg-[#D9DCFC] px-3 py-1 text-sm font-semibold text-[#3B4BF7]  shadow-sm">
          <Sparkles size={16} />

          <span>More than 2 property active</span>
        </div>


        {/* Title */}
        <h1 className="mb-5 text-center font-Playfair Display, Georgia, serif text-[1px] font-bold tracking-tight text-[#1d2533] md:text-3xl">
          Smart Choices for{" "}

          <span className="text-[#5266c8]">
            Your Future
          </span>
        </h1>


        {/* Search Box */}
        <div className="flex w-full max-w-140 h-12 overflow-hidden rounded-[26px] border border-[#e1e3ea] bg-gray-100 shadow-[0_8px_30px_rgba(30,40,90,0.08)]">

          {/* Input */}
          <div className="flex flex-1 items-center px-4">

            <Search
              size={24}
              className=" text-[#8b95a7] text-sense"
            />

            <input
              type="text"
              placeholder="Search area... (e.g., Shahr-e-Naw, Khairkhana)"
              className="w-full bg-transparent py-5 text-lg text-gray-400 outline-none placeholder:text-[#9aa2b1]"
            />

          </div>


          {/* Button */}
          <button
            className="flex items-center gap-2 bg-[#4E5CF7] px-8 text-sm font-semibold text-white transition hover:bg-[#3444aa]"
          >
            <Search size={20} />

            <span className="hidden sm:block  font-sans-serif">
              Search
            </span>
          </button>

        </div>


        {/* Locations */}
        <div className="mt-4 flex max-w-200 flex-wrap justify-center gap-2">

          {locations.map((location) => (
            <button
              key={location}
              className="flex items-center gap-2 max-w-50 rounded-full border border-[#e0e3ea] bg-white/50 px-2 py-1 text-sm text-[#747d8c] transition hover:border-[#bfc6e8] hover:bg-white hover:text-[#3f51bd]"
            >
              <MapPin size={15} />

              {location}
            </button>
          ))}

        </div>

      </div>

    </section>
  );
}