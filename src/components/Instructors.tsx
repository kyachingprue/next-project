'use client';
import React from 'react';
import { WavyBackground } from './ui/wavy-background';
import { AnimatedTooltip } from './ui/animated-tooltip';

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: 'Dennis Ritchie',
      designation: 'Creator of the C Programming Language',
      image: 'https://i.ibb.co/VPJsg62/images.jpg',
    },
    {
      id: 2,
      name: 'James Gosling',
      designation: 'Creator of the Java Programming Language',
      image:
        'https://i.ibb.co/Kpt3cRN7/05-19-Efemerides-de-Tecnologia-James-Gosling.jpg',
    },
    {
      id: 3,
      name: 'Guido van Rossum',
      designation: 'Creator of the Python Programming Language',
      image: 'https://i.ibb.co/hxkM8Gbt/guido-van-rossum.webp',
    },
    {
      id: 4,
      name: 'Bjarne Stroustrup',
      designation: 'Creator of the C++ Programming Language',
      image: 'https://i.ibb.co/WWkYKC6n/images-1.jpg',
    },
    {
      id: 5,
      name: 'Tim Berners-Lee',
      designation: 'Inventor of the World Wide Web',
      image: 'https://i.ibb.co/JwxmDRxz/images-2.jpg',
    },
    {
      id: 6,
      name: 'Brendan Eich',
      designation: 'Creator of JavaScript',
      image:
        'https://i.ibb.co/9HVgJt96/a9e6e14c-4ccb-4b51-b579-3159f0f7f27c.jpg',
    },
  ];

  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-4">
          Meet Our Instructors
        </h2>
        <p className="text-base mb:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;
