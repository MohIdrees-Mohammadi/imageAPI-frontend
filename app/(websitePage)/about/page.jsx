"use client"
import React from 'react'
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@base-ui/react';
import { ArrowUpRight } from 'lucide-react';
import { Clock2 } from 'lucide-react';
import { House } from 'lucide-react';
import { Star } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { Award } from 'lucide-react';
import { Target } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Building2 } from 'lucide-react';

const page = () => {
  return (
    <main className='flex flex-col gap-40'>
      {/* the hero section */}
      <section className='flex items-center justify-center gap-10 mt-10 '>
        <div className='flex flex-col items-start justify-end mt-25 gap-4'>
          <span className='flex gap-2 rounded-2xl border border-gray-400 px-3 py-1 bg-gray-200 text-blue-600'><Heart className='text-blue-600' size={20} />with you since 2009</span>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-black to-blue-500">Building a Better Future<br /> in the World of Luxury<br /> Real Estate</h1>
          <p className='text-xl'>We are more than a real estate company. We are your trusted<br /> partner in finding a home worthy of your lifestyle.</p>
          <div className='flex gap-4'>
            <Button className='px-6 py-2 bg-blue-600 rounded-2xl text-white hover:bg-blue-700 cursor-pointer'>View properties</Button>
            <Button className='px-6 py-2 bg-white rounded-2xl text-black border border-gray-200 shadow hover:bg-gray-300 cursor-pointer'>Contact us </Button>
          </div>
        </div>
        <div className=' relative flex flex-col items-center justify-center gap-4 mt-15 pl-10'>
          <div className='absolute bg-white w-145 h-22 bottom-2 rounded-xl flex items-center p-2 gap-4'>
            <div className='bg-blue-600 w-15 h-15 rounded-full flex items-center justify-center text-white'><ArrowUpRight /></div>
            <div>
              <h1 className='text-2xl font-bold'>+2500</h1>
              <p>Successfull sales across the country</p>
            </div>
          </div>
          <Image src="/slide1.jpg" alt="About Us" width={600} height={400} className='rounded-xl' />
        </div>
      </section>
      {/* the rating section */}
      <section className='flex justify-center h-[20vh] gap-10 '>
        <div className='flex flex-col items-center gap-3 py-3 w-[18%] rounded-2xl border border-gray-300 shadow'>
          <div className='bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center'><Clock2 className='text-blue-600' /></div>
          <h1 className='text-2xl font-bold'>+15</h1>
          <p>Years experiance</p>
        </div>
        <div className='flex flex-col items-center gap-3 py-3 w-[18%] rounded-2xl border border-gray-300 shadow'>
          <div className='bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center'><House className='text-blue-600' /></div>
          <h1 className='text-2xl font-bold'>+2500</h1>
          <p>Properties sold</p>
        </div>
        <div className='flex flex-col items-center gap-3 py-3 w-[18%] rounded-2xl border border-gray-300 shadow'>
          <div className='bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center' ><Star className='text-blue-600' /></div>
          <h1 className='text-2xl font-bold'>+98%</h1>
          <p>Client Satisfaction</p>
        </div>
        <div className='flex flex-col items-center gap-3 py-3 w-[18%] rounded-2xl border border-gray-300 shadow'>
          <div className='bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center'><UsersRound className='text-blue-600' /></div>
          <h1 className='text-2xl font-bold'>+50</h1>
          <p>Expert Consultants</p>
        </div>

        {/* our values part */}
      </section>
      <section className='flex flex-col items-center gap-3 pt-5 '>
        <div className='flex gap-3 bg-gray-200 px-4 py-2 rounded-xl '><Award className='text-blue-600' /> Our values</div>
        <h1 className='text-3xl font-bold'>Why choose ArianaHub?</h1>
        <p>Principles that set us apart and have earned the trust of thousands of clients</p>
        <div className='w-7xl h-60 flex gap-3'>
          <div className='flex flex-col items-start px-5 gap-3 py-5 rounded-2xl border border-gray-300 shadow w-78'>
            <div className='bg-gray-200 w-12 h-12 rounded-xl flex items-center justify-center' ><Award className='text-blue-600' /></div>
            <h1 className='text-xl font-bold'>Commitment to quality</h1>
            <p>We only offer the finest quality<br /> properties to our clients</p>
          </div>
          <div className='flex flex-col items-start px-5 gap-3 py-5 rounded-2xl border border-gray-300 shadow w-78'>
            <div className='bg-gray-200 w-12 h-12 rounded-xl flex items-center justify-center' ><Target className='text-blue-600' /></div>
            <h1 className='text-xl font-bold'>Client Focus</h1>
            <p>Client satisfaction is our proiority<br /> and are always by your side</p>
          </div>
          <div className='flex flex-col items-start px-5 gap-3 py-5 rounded-2xl border border-gray-300 shadow w-78'>
            <div className='bg-gray-200 w-12 h-12 rounded-xl flex items-center justify-center' ><Shield className='text-blue-600' /></div>
            <h1 className='text-xl font-bold'>Expertise and Professionlism</h1>
            <p>Our team consists of experienced<br /> professionals in the real estate<br /> industory</p>
          </div>
          <div className='flex flex-col items-start px-5 gap-3 py-5 rounded-2xl border border-gray-300 shadow w-78'>
            <div className='bg-gray-200 w-12 h-12 rounded-xl flex items-center justify-center' ><Heart className='text-blue-600' /></div>
            <h1 className='text-xl font-bold'>Honesty and transperancy</h1>
            <p>We are commited to the honesty and <br /> transperancy in all transactions</p>
          </div>
        </div>
      </section>

      {/* our team section */}

      <section className='flex flex-col items-center gap-3 pt-5'>
        <div className='flex gap-3 bg-gray-200 px-3 py-1 rounded-xl '><UsersRound className='text-blue-600' /> Expert Team</div>
        <h1 className='text-3xl font-bold'>Meet out professional team</h1>
        <p>A collection of the best consultants and experts in the real estate industory</p>
        <div className='flex gap-10 justify-center mt-5 w-7xl h-90'>
          <div className='relative w-90 rounded-2xl overflow-hidden'>
            <div  className='absolute px-4 flex flex-col justify-end align-baseline w-90 h-90 pb-3 hover:backdrop-blur'>
              <h1 className='text-xl font-bold text-white'>ENG Mohammad Mustafa Chamtoo</h1>
              <p className='text-white'>Sales Manager</p>
            </div>
            <Image src="/df.jpg" alt="me" width={416} height={8} />
          </div>
          <div className='relative w-90 rounded-2xl overflow-hidden'>
            <div  className='absolute px-4 flex flex-col justify-end align-baseline w-90 h-90 pb-3 hover:backdrop-blur'>
              <h1 className='text-xl font-bold text-white'>ENG Mohammad Mustafa Chamtoo</h1>
              <p className='text-white'>Sales Manager</p>
            </div>
            <Image src="/df.jpg" alt="About Us" width={416} height={8} />
          </div>
          <div className='relative w-90 rounded-2xl overflow-hidden'>
            <div className='absolute px-4 flex flex-col justify-end align-baseline w-90 h-90 pb-3 hover:backdrop-blur'>
              <h1 className='text-xl font-bold text-white'>ENG Mohammad Mustafa Chamtoo</h1>
              <p className='text-white'>Sales Manager</p>
            </div>
            <Image src="/df.jpg" alt="About Us" width={416} height={8}/>
          </div>
        </div>
      </section>

      {/* last section */}
      <section className='flex flex-col items-center gap-3 pt-5'>
        <div className='w-200 rounded-2xl bg-blue-600 p-20 flex flex-col gap-2 items-center'>
          <h1 className='text-3xl font-bold text-white'>Ready to start working together?</h1>
          <p className='text-white'>Let's build a home worthy of you. Oue team is ready to answer your questions</p>
          <div className='flex gap-3 mt-3 border-b border-b-gray-50 pb-6 w-180 justify-center mb-5'>
            <Button className='bg-white flex items-center px-7 py-2 rounded-3xl gap-2 hover:bg-gray-200 cursor-pointer'><Phone/>Contact us</Button>
            <Button className='flex items-center px-7 py-2 rounded-3xl gap-2 border border-white text-white hover:bg-blue-700 cursor-pointer '><Building2/>View properties</Button>
          </div>
          <div className='flex gap-6 '>
            <p className='flex gap-2 items-center justify-center text-white'><Phone/>0778241599</p>
            <p className='flex gap-2 items-center justify-center text-white'><Building2/>info@gmail.com</p>
          </div>
        </div>
      </section>
      <Heart />
    </main>
  )
}

export default page