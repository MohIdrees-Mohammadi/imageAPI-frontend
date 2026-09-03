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
import { LuBuilding2 } from "react-icons/lu";

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
      className="flex items-center justify-between w-[80%] py-2 px-4 rounded-[40px] mt-6 mx-auto bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] fixed top-0 left-0 right-0 z-10"
    >
      <Image
        src={"/logo.png"}
        width={48}
        height={48}
        className="rounded-full border-2 border-gray-100"
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
        <h1
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 cursor-pointer hover:bg-gray-100   rounded-xl transition px-4 py-1 "
        >
          <LuBuilding2 size={19} />
          <span>Listing</span>
          {
            isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />
          }
          
          
        </h1>
        {isOpen && (
          <div className="absolute border top-10 left-25 w-46 h-35 bg-white py-2 px-4 flex flex-col justify-center items-center shadow-xl rounded-xl transition-all overflow-hidden">
            <Link
              href="/houses"
              className="flex items-center  gap-3 px-2 py-2 mt-2 transition hover:bg-gray-50 "
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center justify-center w-12 h-8 rounded-[10px] bg-indigo-100 ">
                <House size={16} className="text-blue-600" />
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
              className="flex items-center gap-3 px-2 py-6 w-full h-[70] transition  hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-[10px] bg-indigo-100">
                <Car size={16} className="text-blue-600" />
              </div>

              <div className="flex flex-col">
                <span className="text-[15px] text-gray-800">Vehicles</span>

                <p className="text-[12px] text-gray-400">Cars & Vehicles</p>
              </div>
            </Link>
          </div>
        )}

   

        <Link
          href="/about"
          className="flex items-center cursor-pointer hover:bg-gray-100 rounded-xl gap-1 transition duration-300 px-4 py-1"
        >
          <Info size={16} />
          <span>About Us </span>
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
          className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow"
          variant="loginVariant"
        >
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
