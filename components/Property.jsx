import React from 'react'
import react, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
const Property = () => {
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    

  return (

    <div>
        <div className="absolute top-[12px] right-45">
                <div className="relative ">


                  
                  <h1
                    onClick={() =>{ setIsOpen2(!isOpen2); setIsOpen3(false)}}
                    className={`flex items-center w-45 cursor-pointer gap-1 rounded-xl px-4 py-1 transition duration-300 ${isOpen2
                      ? "bg-gray-100 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      }`}
                  >
                    <span>Property Type</span>

                    {isOpen2 ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </h1>

                  {/* Office Dropdown */}
                  <div
                    className={`absolute z-50 top-11 left-0 w-45 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen2
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible pointer-events-none"
                      }`}
                  >

                    {/* Apartment */}
                    <Link
                      href="/apartment"
                      onClick={() => setIsOpen2(false)}
                      className="block px-4 py-3 text-[14px] text-gray-700 transition duration-200 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Apartment
                    </Link>

                    {/* Mansion */}
                    <Link
                      href="/mansion"
                      onClick={() => setIsOpen2(false)}
                      className="block px-4 py-3 text-[14px] text-gray-700 transition duration-200 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Mansion
                    </Link>

                    {/* Land */}
                    <Link
                      href="/land"
                      onClick={() => setIsOpen2(false)}
                      className="block px-4 py-3 text-[14px] text-gray-700 transition duration-200 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Land
                    </Link>

                    {/* Office - Selected */}
                    <Link
                      href="/office"
                      onClick={() => setIsOpen2(false)}
                      className="block px-4 py-3 text-[14px] text-blue-600 bg-indigo-50 transition duration-200 hover:bg-indigo-100"
                    >
                      Office
                    </Link>

                    {/* Commercial */}
                    <Link
                      href="/commercial"
                      onClick={() => setIsOpen2(false)}
                      className="block px-4 py-3 text-[14px] text-gray-700 transition duration-200 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Commercial
                    </Link>

                  </div>


                </div>
              </div>
              <div className="absolute top-[9px] right-40">
                <div className="relative">

                  {/* Buy Button */}
                  <h1
                    onClick={() =>{ setIsOpen3(!isOpen3); setIsOpen2(false) }}
                    className={`flex items-center cursor-pointer w-20 gap-1 rounded-xl px-4 py-2
                    transition duration-300 ${isOpen3
                        ? "bg-gray-100 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      }`}
                  >
                    <span>Buy</span>

                    {isOpen3 ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </h1>

                  {/* Buy Dropdown */}
                  <div
                    className={`absolute z-50 top-11 left-0 w-45 bg-white rounded-xl
                    shadow-xl border border-gray-100 overflow-hidden
                    transition-all duration-300 ease-in-out ${isOpen3
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible pointer-events-none"
                      }`}
                  >

                    {/* Buy */}
                    <Link
                      href="/buy"
                      onClick={() => setIsOpen3(false)}
                      className="block px-4 py-3 text-[14px] text-blue-600
                      bg-indigo-50 transition duration-200
                      hover:bg-indigo-100"
                    >
                      Buy
                    </Link>

                    {/* Rent */}
                    <Link
                      href="/rent"
                      onClick={() => setIsOpen3(false)}
                      className="block px-4 py-3 text-[14px] text-gray-700
                      transition duration-200
                     hover:bg-gray-50 hover:text-blue-600"
                    >
                      Rent
                    </Link>

                    {/* Mortgage */}
                    <Link
                      href="/mortgage"
                      onClick={() => setIsOpen3(false)}
                      className="block px-4 py-3 text-[14px] text-gray-700
                      transition duration-200
                     hover:bg-gray-50 hover:text-blue-600"
                    >
                      Mortgage
                    </Link>

                  </div>
                </div>
              </div>
    </div>
  )
}

export default Property