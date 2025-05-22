'use client';
import React from 'react';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

const CompareTheory = () => {
  const testimonials = [
    {
      quote:
        'The computer was born to solve problems that did not exist before.',
      name: 'Bill Gates',
      designation: 'Co-founder of Microsoft',
      src: 'https://i.ibb.co/ZzkpNy21/Chesnot-Getty-Images-543265518-bf14a89a12d348ab9757462246569ee3.jpg',
    },
    {
      quote:
        'Programs must be written for people to read, and only incidentally for machines to execute.',
      name: 'Harold Abelson',
      designation:
        'Professor of Electrical Engineering and Computer Science at MIT',
      src: 'https://i.ibb.co/5gMTbmYH/Deomdk-Wk-AAjvg8.jpg',
    },
    {
      quote: 'Talk is cheap. Show me the code.',
      name: 'Linus Torvalds',
      designation: 'Creator of Linux and Git',
      src: 'https://i.ibb.co/Q74cbB6j/1-G0-RGl-Qm-ZD7-Khgazoh53-U-g.jpg',
    },

    {
      quote: 'Good code is its own best documentation.',
      name: 'Steve McConnell',
      designation: "Software Engineer and Author of 'Code Complete'",
      src: 'https://i.ibb.co/RTgVGfnY/1-P5-A9458.jpg',
    },
    {
      quote:
        'Any sufficiently advanced bug is indistinguishable from a feature.',
      name: 'Rich Kulawiec',
      designation: 'Computer Scientist and Internet Engineer',
      src: 'https://i.ibb.co/9HrL88G3/kulawiec.png',
    },
    {
      quote: 'Simplicity is prerequisite for reliability.',
      name: 'Edsger W. Dijkstra',
      designation: 'Pioneer of Structured Programming',
      src: 'https://i.ibb.co/Z6zHntrJ/speaker1.jpg',
    },
  ];

  return (
    <div className="bg-black h-full mx-auto min-w-6xl">
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default CompareTheory;
