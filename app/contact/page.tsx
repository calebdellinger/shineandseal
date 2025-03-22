import React from "react";
import { LiaPhoneSolid } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";

function contact() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-[#2563EB] font-extrabold text-4xl mb-6">
        Contact Us
      </h1>
      <form className="p-7 w-4/12 bg-white rounded-xl shadow-lg">
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full p-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Job Description
          </label>
          <textarea
            id="description"
            className="w-full p-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Describe the job needed"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-bold rounded-2xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
      <div className="flex items-center mt-4 mb-32">
        <LiaPhoneSolid className="text-[#2563EB] text-2xl" />
        <span className="text-[#2563EB] font-semibold text-xl ml-2">
          425-466-5919
        </span>
        <FaFacebook className="text-[#2563EB] text-2xl ml-4" />
        <span className="text-[#2563EB] font-semibold text-xl ml-2">
          shineandseal
        </span>
      </div>
    </div>
  );
}

export default contact;
