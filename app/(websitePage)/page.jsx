"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const page = () => {
  return (
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
          <CarouselContent>
            <CarouselItem>
               <div className="relative">
                <div className='w-[1300px] h-[500px] absolute z-10 flex justify-center items-center  rounded-[40px]'>
                  <h1 className="text-3xl font-bold">Hello world</h1>
                </div>
                <div className="relative w-[1300px] h-[500px]">
                  <div className="absolute z-20 top-0 bottom-0 left-0 right-0 rounded-[40px]  bg-linear-to-t from-gray-900/80 to-gray-50/10"></div>
                <img src={"/slide1.jpg"} className='w-[1300px] h-[500px] object-cover blur-[2px] rounded-[40px]' alt='slide1' />
                </div>
               </div>
             

            </CarouselItem>
            <CarouselItem>
                <div>
                <div className='w-[1300px] h-[500px] bg-gray-200 rounded-[40px]'>
                  <h1 className="text-3xl font-bold">Hello world</h1>
                </div>
                <img src={"/slide2.jpg"} className='w-[1300px] h-[500px] object-cover blur-[2px] rounded-[40px]' alt='slide2' />
                </div>
           
            </CarouselItem>
            <CarouselItem>
                <div>
                  <div className='w-[1300px] h-[500px] bg-gray-200 rounded-[40px]'>
                  <h1 className="text-3xl font-bold">Hello world</h1>
                </div>
                <img src={"/slide3.jpg"} className='w-[1300px] h-[500px] object-cover blur-[2px] rounded-[40px]' alt='slide3' />
                </div>
          
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
};

export default page;
