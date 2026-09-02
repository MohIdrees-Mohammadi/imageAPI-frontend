"use client"

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const page = () => {
  return (
    <main className='flex flex-col justify-center mx-50 mt-10'>

      {/* Hero section */}
      <section className=' mx-auto'>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}

        >
          <CarouselContent >
            <CarouselItem>

              <img src={"/slide1.jpg"} className='w-325 h-125 object-fit rounded-[40px]' alt='slide1' />


            </CarouselItem>
            <CarouselItem>

              <img src={"/slide2.jpg"} className='w-325 h-125 object-fit rounded-[40px]' alt='slide2' />

            </CarouselItem>
            <CarouselItem>

              <img src={"/slide3.jpg"} className='w-325 h-125 object-fit rounded-[40px]' alt='slide3' />

            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

    </main>
  )
}

export default page