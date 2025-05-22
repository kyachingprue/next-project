import Link from 'next/link';
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:-top-7 md:left-72" fill="blue" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-12 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Explore the world of programming
        </h1>
        <p className="mt-6 text-base/8 font-normal md:text-lg text-neutral-300 max-w-lg mx-auto">
          Programming is the process of writing instructions for a computer to
          follow. It helps create software, websites, and apps. Programmers use
          languages like Python, JavaScript, or C++. Learning to code improves
          problem-solving skills. Programming is used in almost every part of
          modern technology.
        </p>
        <div className="mt-10">
          <Link href={'/courses'}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
