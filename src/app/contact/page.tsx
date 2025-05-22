'use client';
import React from 'react';
import { Meteors } from '@/components/ui/meteors';

const page = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
      <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-2 w-2 text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
          />
        </svg>
        <Meteors number={20} />
      </div>
      <div className=" mt-24 w-6/12 mx-auto">
        <h2 className="text-center text-white text-2xl md:text-6xl font-bold">
          Contact Us
        </h2>
        <p className="text-neutral-400 py-5 text-center">
          Machine learning is a branch of artificial intelligence that enables
          computers to learn from data without being explicitly programmed. It
          allows systems to improve their performance over time through
          experience.
        </p>
        <div>
          <form>
            <div className="flex flex-col gap-2 w-full mt-5 ">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full py-4 border border-cyan-600 px-4 rounded-xl"
                placeholder="Your email address"
              />
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="text">Description</label>
              <textarea
                name="text"
                id="text"
                placeholder="Your message"
                className="w-full border border-cyan-400 rounded-xl py-12 px-3"
              ></textarea>
            </div>
            <div className="mt-5">
              <input
                type="submit"
                value="Send Message"
                className="bg-cyan-600 text-white rounded-xl py-2 px-5"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
