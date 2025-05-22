'use client';
import React from 'react';
import { Boxes } from '@/components/ui/background-boxes';
import { cn } from '@/utils/lib/utils';
import CompareTheory from '@/components/CompareTheory';
import TheoryDetails from '@/components/TheoryDetails';

const page = () => {
  return (
    <div>
      <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <div className="w-8/12 mx-auto text-center">
          <h1
            className={cn(
              'md:text-5xl text-xl text-white relative z-20 uppercase'
            )}
          >
            Programming Roadmap Theory
          </h1>
          <p className="text-center text-xl mt-10 text-neutral-300 relative z-20">
            Programming theory is the foundation of understanding how code works
            and how software systems are designed and built. It includes core
            principles like logic, algorithms, data structures, and
            computational thinking. A strong grasp of programming theory helps
            developers write efficient, maintainable, and scalable code. It also
            covers abstraction, problem-solving methods, and the theoretical
            limits of computation.
          </p>
        </div>
      </div>
      <CompareTheory></CompareTheory>
      <TheoryDetails></TheoryDetails>
    </div>
  );
};

export default page;
