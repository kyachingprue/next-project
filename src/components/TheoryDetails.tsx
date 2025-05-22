'use client';
import React from 'react';
import { BackgroundGradient } from '@/components/ui/background-gradient';

const TheoryDetails = () => {
  return (
    <div className="w-full h-full py-10 bg-cyan-900 md:py-20 px-4 md:px-8">
      <div>
        <h2 className="text-lg md:text-5xl  bg-clip-text text-transparent bg-linear-to-bl from-violet-500 to-fuchsia-500  pb-6 text-center font-semibold">
          Web Development
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-5">
        <div>
          <BackgroundGradient className="rounded-[22px] max-w-sm mx-auto p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <h2 className="text-lg">Fronted-development(client side)</h2>
            <div className="flex flex-col gap-4 mt-8">
              <div>
                <h2>HTML</h2>
              </div>
              <div>CSS</div>
              <div>Javascript</div>
              <div>TypeScript</div>
              <div>Python</div>
            </div>
          </BackgroundGradient>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default TheoryDetails;
