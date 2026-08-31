"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <header className='flex items-center justify-between w-[50%] py-4 px-5 rounded-4xl mt-4 mx-auto bg-white shadow-'>
      <Image src={"/logo.png"} width={50} height={50} className='rounded-full border border-gray-200' />
      <nav className='relative flex items-center gap-4'>

        <Link href="/">Home</Link>
        <h1>Listing</h1>
        <Link href={"/about"}>About us</Link>
        <Link href={"/contact"}>Contact</Link>
        {
          isOpen && (
            <div className='absolute top-7 left-13 w-25 bg-white py-2 px- 4 flex flex-col gap-4'>
              <Link className='border-b border-gray-300 text-center ' href={"/houses"}>Houses</Link>
              <Link className='border-b border-gray-300 text-center ' href={"/cars"}>Cars</Link>
            </div>
          )
        }

      </nav>

      <Button>Login</Button>


    </header>
  )
}

export default Header