'use client';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import courseData from '@/data/music_course.json';
import Image from 'next/image';

const page = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h2 className="text-center text-lg md:text-4xl font-bold text-white font-sans mb-8">
        All courses:- ({courseData.courses.length})
      </h2>
      <div className="flex flex-wrap justify-center gap-5 px-3">
        {courseData.courses.map(course => (
          <CardContainer key={course.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default page;
