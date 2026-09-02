"use client";

import { Button } from "@/components/ui/button";
import { IoCallOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { MdOutlineNightlight } from "react-icons/md";
import { LuHouse } from "react-icons/lu";
import { LuCar } from "react-icons/lu";
import { FiInfo } from "react-icons/fi";
import { LuBuilding2 } from "react-icons/lu";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
// import { FaChevronUp } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex items-center justify-between w-[50%] py-4 px-5 rounded-4xl mt-4 mx-auto bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <Image
        src={"/logo.png"}
        width={48}
        height={48}
        className="rounded-full border border-gray-100"
        alt="Logo"
      />
      <nav className="relative flex items-center gap-4  text-gray-700">
        <Link
          href="/"
          className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-xl transition px-4 py-1"
        >
          <LuHouse />
          <span>Home</span>
        </Link>
        <h1
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 cursor-pointer hover:bg-gray-100   rounded-xl transition px-4 py-1 "
        >
          <LuBuilding2 size={19} />
          <span>Listing</span>
          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </h1>
        {isOpen && (
          <div className="absolute border top-10 left-28 w-45 h-35 bg-white py-2 px-4 flex flex-col justify-center items-center gap-4 shadow-xl rounded-xl transition-all z-10">
            <Link
              className="border-b cursor-pointer w-full h-[62%] border-gray-300 text-center p-2"
              href={"/houses"}
            >
              <LuHouse
                className="rounded absolute top-8 left-2 fill-white"
                size={20}
              />

              <span className="mr-4">Houses</span>
              <p className="text-[12px] text-gray-400 ">
                Properites & aparatments
              </p>
            </Link>
            <Link
              className=" border-gray-300 cursor-pointer text-center w-full ml-2 mb-2"
              href={"/cars"}
            >
              <LuCar className="absolute bottom-5 left-2" size={20} />
              <span className="mr-11">Cars</span>
              <p className="text-[12px] text-gray-400">cars & vehicles</p>
            </Link>
          </div>
        )}
        <Link
          href={"/about"}
          className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-xl  transition px-10 "
        >
          <FiInfo /> <span>About us</span>
        </Link>
        <Link
          className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-xl  transition  "
          href={"/contact"}
        >
          <IoCallOutline /> <span>Contact</span>
        </Link>
      </nav>

      <div className="flex items-center gap-2">
        <Link href="">
          <GoDownload />
        </Link>
        <Link href="">
          <TbWorld />
        </Link>
        <Link href="">
          <MdOutlineNightlight />
        </Link>

        <Button>Login</Button>
      </div>
    </header>
  );
};

export default Header;
