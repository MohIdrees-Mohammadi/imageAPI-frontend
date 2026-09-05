"use client";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Download } from "lucide-react";
import { Globe } from "lucide-react";
import { Moon } from "lucide-react";
import { House } from "lucide-react";
import { Car } from "lucide-react";
import { Info } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { Building2 } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="flex items-center justify-between w-[60%] py-4 px-5 rounded-[40px] mt-4 mx-auto shadow-[0_8px_30px_rgba(0,0,0,0.08)] sticky top-0 backdrop-blur-xl z-20"
    >
      <Image
        src={"/logo.png"}
        width={48}
        height={48}
        className="rounded-full border border-gray-100"
        alt="Logo"
      />

      <nav className="relative flex items-center gap-2 text-gray-700">
        <Link
          href="/"
          className="flex items-center cursor-pointer gap-1 rounded-xl px-4 py-1 hover:bg-gray-100  transition duration-300"
        >
          <House size={16} />
          <span>Home</span>
        </Link>

        <div>
          <h1
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center cursor-pointer gap-1 rounded-xl px-4 py-1 transition duration-300 ${
              isOpen ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
          >
            <Building2 size={16} />
            <span>Listings</span>

            {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </h1>

          {/* Listing Dropdown */}
          <div
            className={`absolute z-100 top-11 left-24 w-45 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-2 invisible pointer-events-none"
            }`}
          >
            {/* Houses */}
            <Link
              href="/houses"
              className="flex items-center gap-3 px-4 py-4 transition hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-50">
                <House size={17} className="text-blue-600" />
              </div>

              <div className="flex flex-col">
                <span className="text-[15px] text-gray-800">Houses</span>
                <p className="text-[12px] text-gray-400">
                  Properties & Apartments
                </p>
              </div>
            </Link>

            {/* Divider */}
            <div className="h-px bg-gray-200 "></div>

            {/* Vehicles */}
            <Link
              href="/cars"
              className="flex items-center gap-3 px-4 py-4 transition  hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-50">
                <Car size={17} className="text-blue-600" />
              </div>

              <div className="flex flex-col">
                <span className="text-[15px] text-gray-800">Vehicles</span>

                <p className="text-[12px] text-gray-400">Cars & Vehicles</p>
              </div>
            </Link>
          </div>
        </div>

        <Link
          href="/about"
          className="flex items-center cursor-pointer hover:bg-gray-100 rounded-xl gap-1 transition duration-300 px-4 py-1"
        >
          <Info size={16} />
          <span>About Us</span>
        </Link>

        <Link
          className="flex items-center cursor-pointer hover:bg-gray-100 rounded-xl gap-1 transition duration-300 px-4 py-1"
          href="/contact"
        >
          <Phone size={16} />
          <span>Contact</span>
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="#">
          <Download size={16} />
        </Link>

        <Link href="#">
          <Globe size={16} />
        </Link>

        <Link href="#">
          <Moon size={16} />
        </Link>

        <Button
          className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow hover:bg-blue-600 transition-normal hover:text-white"
          variant="loginVariant"
          varint="loginVariant"
        >
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
