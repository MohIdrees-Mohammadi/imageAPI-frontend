
import React from 'react'
import Link from "next/link";

function Card2() {
    return (
        <div className="absolute left-[600px] top-14 z-20 flex flex-col items-start">

            {/* Badge */}
            <div className="mb-6 rounded-full border border-[#405cff]/50 bg-[#202b5c]/60 px-4 py-2 text-sm text-white backdrop-blur-sm">
                ✧ Over 500 successful sales last month
            </div>

            {/* Heading */}
            <h1 className="max-w-[600px] text-4xl font-bold leading-[1.05] text-white">
                Ready to Sell Your{" "}
                <span className="text-[#405cff]">Premium</span>
                <br />
                <span className="text-[#405cff]">Property</span>?
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-[570px] text-[15px] leading-6 text-gray-300">
                Join our exclusive network of verified sellers. Showcase your luxury
                property to qualified buyers worldwide.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-3">

                
                <Link
                    href="/become-a-saller"
                    className="rounded-xl bg-[#405cff] px-8 py-4 font-semibold text-white transition hover:bg-[#344be0]"
                >
                    Become a Seller →
                </Link>

                <Link
                    href="/contact"
                    className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                    Learn more
                </Link>

               

            </div>

        </div>
    )
}

export default Card2