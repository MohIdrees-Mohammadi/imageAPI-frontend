"use client";

import React from "react";

import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { Clock4 } from "lucide-react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
const Contact = () => {
  
  return (
    <main className="flex flex-col justify-center  mx-10 lg:mx-80 py-2 ">
      {/* Contact Info */}
      <div className="flex flex-col mb-4 mt-5">
        <h1 className="text-[26px] font-semibold lg:text-[32px]">
          Contact Information
        </h1>
        <p className="text-gray-400">
          Get in touch with us through the channels below
        </p>
      </div>

      {/* Grid part */}
      <div className="grid grid-cols-2 gap-2  *:bg-gray-100 *:rounded-lg lg:grid-cols-4 ">
        {/* Support Phone */}
        <div className="border hover:border-indigo-500 transition-colors duration-300 rounded-lg  flex flex-col items-center justify-center gap-2">
          <span className="bg-indigo-100 p-2 rounded-full text-indigo-500 mt-6 ">
            <Phone size={24} />
          </span>
          <h2 className="text-gray-400 -mb-3 text-[16px] lg:text-[14px]">Support Phone</h2>
          <p className="font-bold text-[15px] lg:text-[14px]">۰۷۹۰۱۱۵۹۵۷</p>
        </div>

        {/* Support Email */}
        <div className="border hover:border-indigo-500 transition-colors duration-300  rounded-lg  flex flex-col justify-center items-center gap-2">
          <span className="bg-indigo-100 p-2 rounded-full text-indigo-500 mt-6">
            <Mail size={24} />
          </span>
          <h2 className="text-gray-400 -mb-3 text-[16px] lg:text-[14px]">Email</h2>
          <p className="font-bold mb-2 text-[15px] lg:text-[14px]">info@ashyaana.com</p>
        </div>

        {/* Address */}
        <div className="border hover:border-indigo-500 transition-colors duration-300 rounded-lg flex flex-col items-center justify-center gap-2 ">
          <span className="bg-indigo-100 p-2 rounded-full text-indigo-500 mt-6">
            <MapPin size={24} />
          </span>
          <h2 className="text-gray-400 -mb-3 text-[16px] lg:text-[14px]">Head Office Address</h2>
          <p className="font-bold mb-2 text-[15px] lg:text-[13px]">Kabul, Shahr-e-Naw, Tower 15</p>
        </div>

        {/* Working Hours */}
        <div className="border hover:border-indigo-500 transition-colors duration-300 rounded-lg flex flex-col items-center justify-center gap-2">
          <span className="bg-indigo-100 p-2 rounded-full text-indigo-500 mt-4">
            <Clock4 size={24} />
          </span>
          <h2 className="text-gray-400 -mb-3 text-[16px] lg:text-[14px]">Working Hours</h2>
          <p className="font-bold  text-[15px] lg:text-[14px]">Saturday to Thursday</p>
        </div>
      </div>

      {/* Form + Location */}
      <div className="flex flex-col lg:flex-row gap-4 mt-5 w-full">
        {/* Message Form */}
        <form className="border mt-5 mb-5  lg:mb-5 p-4 rounded-2xl w-full lg:w-[60%]">
          <h2 className="text-[20px] font-semibold">
            <span className="border-l-4 mr-2 border-l-indigo-600 rounded-2xl"></span>{" "}
            Send Message
          </h2>

          <p className="mb-4 text-[15px] text-gray-400">
            Fill out the form below, our team will contact you shortly
          </p>

          {/* First 4 Inputs */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-gray-400 text-[14px] lg:text-[15px]">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                className="border p-2 rounded-lg bg-gray-200/25 w-full focus:outline-3 focus:outline-indigo-500 text-[15px] lg:text-[16px]"
                placeholder="First Name"
              />
            </div>

            <div>
              <label className="text-gray-400 text-[14px] lg:text-[15px]">Last Name</label>
              <input
                className="border p-2 rounded-lg bg-gray-200/25 w-full focus:outline-3 focus:outline-indigo-500 text-[15px] lg:text-[16px]"
                placeholder="Last Name"
              />
            </div>

            <div>
              <label className="text-gray-400 text-[14px] lg:text-[15px]">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className="border p-2 rounded-lg bg-gray-200/25 w-full focus:outline-3 focus:outline-indigo-500 text-[15px] lg:text-[16px]"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="text-gray-400 text-[14px] lg:text-[15px]">Support Phone</label>
              <input
                className="border p-2 rounded-lg bg-gray-200/25 w-full focus:outline-3 focus:outline-indigo-500 text-[15px] lg:text-[16px]"
                placeholder="07XXXXXXXX"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="mt-3">
            <label className="text-gray-400 text-[14px] lg:text-[15px]">Subject</label>
            <input
              className="border p-2 rounded-lg bg-gray-200/25 w-full focus:outline-3 focus:outline-indigo-500 text-[15px] lg:text-[16px]"
              type="text"
              placeholder="What is your message about?"
            />
          </div>

          {/* Message */}
          <div className="mt-3">
            <label className="text-gray-400 text-[14px] lg:text-[15px]">Message  <span className="text-red-500">*</span></label>
            <textarea
              className="border p-2 rounded-lg bg-gray-200/25 w-full focus:outline-3 focus:outline-indigo-500 text-[15px] lg:text-[16px] resize-none"
              style={{ resize: "none" }}
              name="Message"
              rows="4"
              placeholder="Write your message here..."
            />
          </div>

          {/* Button */}
          <Button
            variant="loginVariant"
            className="w-full py-5 rounded-xl mt-3 text-[16px] font-semibold font-mono"
          >
            <Send />
            Send Message
          </Button>
        </form>

        {/* Location */}
        <div className="w-full lg:w-[40%] lg:mt-5 border rounded-2xl overflow-hidden mb-10 lg:mb-5">
          {/* Google Map */}
          <div className="w-full h-110 object-cover">
            <iframe
              src="https://www.google.com/maps?q=34.528111,69.172306&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Location Details */}
          <div className="text-center py-4">
            <h3 className="font-semibold text-[16px]">Ashyaana Head Office</h3>

            <p className="text-gray-500 text-[14px] mt-1">
              Kabul, Shahr-e-Naw, Tower 15
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
