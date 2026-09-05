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



const page = () => {
  return (
    <div>
    <main className='flex flex-col mx-80 mt-10'>

      {/* Hero section */}
      <section className="relative mx-auto">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}

        >
          <CarouselContent className="w-[1300px]">
            <CarouselItem>
              <div className="relative bg-amber-200 ">
                <div className='w-[1300px] h-[500px] absolute z-30 flex flex-col justify-center items-center  rounded-[40px]'>
                  <h1 className="text-5xl text-white font-bold ">Find Your Dream Home</h1>
                  <p className="text-2xl text-white">Luxury apartments with unparalleled architecture</p>
                </div>
                <div className="relative w-325 h-325">
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
                  <div className=" flex gap-2 justify-center ">
                    <Button>Vehicle</Button>
                    <Button>Property</Button>
                  </div>

                  <div className="relative  w-[95%]">
                  <Search size={20} color="blue" className="absolute top-[18px] left-5" />
                  <input className="w-[100%] bg-white py-4 px-13 rounded-[40px]" type="text" placeholder='search' />
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
    </div>
  );
};

export default page;
