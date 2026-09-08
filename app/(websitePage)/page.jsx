"use client";

import React from "react";
import ExploreCategories from "@/components/ExploreCategories";
import WhyAshyaana from "@/components/WhyAshyaana";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SearchField from "@/components/SearchField"
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import { FiUsers, FiBriefcase, FiTrendingUp } from "react-icons/fi";
import Card from "@/components/ui/Card";
import Card2 from "@/components/ui/Card2";
import react, { useEffect, useRef, useState } from "react";
import { House } from "lucide-react";
import { Building2 } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { Car } from "lucide-react";
import Property from "../../components/Property";
import Vehicle from "../../components/Vehicle";





const page = () => {

  const [toggle, setToggle] = useState(false);
  const [isVehicle, setIsVehicle] = useState(true);
  const [plceHolder, setPlceHolder] = useState(false)

  const buttonHandleChangeTrue = () => {
    setToggle(true)
    setIsVehicle(false)
    setPlceHolder(true)
  }
  const buttonHandleChangeFalse = () => {
    setToggle(false)
    setIsVehicle(true)
    setPlceHolder(false)
  }

  return (
    <div>
      <main className='flex flex-col mx-80 mt-10 '>

        {/* Hero section */}
        <section className="relative mx-auto ">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}

          >
            <CarouselContent className="w-[1300px]">
              <CarouselItem>
                <div className="relative">
                  <div className='w-[1300px] h-[500px] absolute z-30 flex flex-col justify-center items-center  rounded-[40px]'>
                    <h1 className="text-5xl text-white font-bold ">Find Your Dream Home</h1>
                    <p className="text-2xl text-white">Luxury apartments with unparalleled architecture</p>
                  </div>
                  <div className="relative w-[1300px] h-[500px]">
                    <div className="absolute z-20 top-0 bottom-0 left-0 right-0 rounded-[40px]  bg-linear-to-t from-gray-900/80 to-gray-50/10"></div>
                    <img src={"/slide1.jpg"} className='w-[1300px] h-[500px] object-cover blur-[2px] rounded-[40px]' alt='slide1' />
                  </div>

                </div>


              </CarouselItem>
              <CarouselItem>
                <div className="relative">
                  <div className='w-[1300px] h-[500px] absolute z-30 flex flex-col justify-center items-center  rounded-[40px]'>
                    <h1 className="text-5xl text-white font-bold ">Find Your Dream Home</h1>
                    <p className="text-2xl text-white">Luxury apartments with unparalleled architecture</p>
                  </div>
                  <div className="relative w-[1300px] h-[500px]">
                    <div className="absolute z-20 top-0 bottom-0 left-0 right-0 rounded-[40px]  bg-linear-to-t from-gray-900/80 to-gray-50/10"></div>
                    <img src={"/slide2.jpg"} className='w-[1300px] h-[500px] object-cover blur-[2px] rounded-[40px]' alt='slide1' />
                  </div>

                </div>


              </CarouselItem>
              <CarouselItem>
                <div className="relative">
                  <div className='w-[1300px] h-[500px] absolute z-30 flex flex-col justify-center items-center  rounded-[40px]'>
                    <h1 className="text-5xl text-white font-bold ">Find Your Dream Home</h1>
                    <p className="text-2xl text-white">Luxury apartments with unparalleled architecture</p>
                  </div>
                  <div className="relative w-[1300px] h-[500px]">
                    <div className="absolute z-20 top-0 bottom-0 left-0 right-0 rounded-[40px]  bg-linear-to-t from-gray-900/80 to-gray-50/10"></div>
                    <img src={"/slide3.jpg"} className='w-[1300px] h-[500px] object-cover blur-[2px] rounded-[40px]' alt='slide1' />
                  </div>

                </div>

              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>


          <div className="flex flex-col gap-4 absolute top-80 z-40 left-[30%] w-[600px]">

            <div className=" flex gap-2 justify-center mr-10 ">
              <Button
                onClick={buttonHandleChangeFalse}
                className={`px-7 py-5 rounded-full text-1xl text-white transition ${isVehicle
                  ? "bg-blue-600 hover:bg-blue-600/90"
                  : "bg-gray-400/40 hover:bg-gray-400/70"
                  }`}
              >
                Vehicle
              </Button>

              <Button
                onClick={buttonHandleChangeTrue}
                className={`px-7 py-5 rounded-full text-1xl text-white transition ${!isVehicle
                  ? "bg-blue-600 hover:bg-blue-600/90"
                  : "bg-gray-400/40 hover:bg-gray-400/70"
                  }`}
              >
                Property
              </Button>
            </div>

            <div className="relative  w-[95%] ">

              <Search size={20} color="blue" className="absolute top-[18px] left-5" />
              <input className="w-[100%] bg-white py-4 px-13 rounded-[40px] " type="text"
                placeholder={
                  plceHolder
                    ? "Search location in Kabul..."
                    : "Car Name Model or Brand..."
                }

              />

              {
                toggle ? <Property /> : <Vehicle />

              }



              <Button className=" px-12  py-6   rounded-full text-white text-1xl bg-blue-600 hover:bg-blue-600/90 absolute right-4 top-[3]">
                <Search size={20} color="white" className=" absolute left-3 " />
                Vehicle
              </Button>
            </div>
          </div>

        </section>

      </main>
      <div>
        <ExploreCategories />
      </div>
      <div>
        <WhyAshyaana />
      </div>
      <section className="relative mb-20  mt-15 w-[1200px] left-1/2 -translate-x-1/2">



        <div className="absolute inset-0 z-10 rounded-[40px] bg-gradient-to-r from-gray-950/90 to-gray-950/50">
          <div className="z-20 w-full h-[360px]">
            <div className="w-[50%] h-full flex items-center ml-7">
              <div className="flex gap-3">

                <Card
                  icon={<FiUsers className="text-[#405cff] text-xl" />}
                  number="+15,000"
                  text="مشتری راضی"
                />

                <Card
                  icon={<FiBriefcase className="text-[#405cff] text-xl" />}
                  number="+2,500"
                  text="مالکیت فعال"
                />

                <Card
                  icon={<FiTrendingUp className="text-[#405cff] text-xl" />}
                  number="98%"
                  text="موفقیت معاملات"
                />

              </div>
            </div>
            <Card2 />

          </div>

        </div>
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?fm=jpg&q=60&w=3000&auto=format&fit=crop"
          alt="vila section"
          className="w-[1200px] h-[360px] object-cover rounded-[40px]"
        />

      </section>
    </div>
  );
};

export default page;
