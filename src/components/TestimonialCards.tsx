import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { cn } from '@/utils/lib/utils';

const TestimonialCards = () => {
  const musicSchoolTestimonials = [
    {
      quote:
        "Machine learning is not about making machines intelligent in the human sense, but about creating systems that learn from data to make decisions or predictions. It's a powerful tool that helps us automate complex tasks, uncover hidden patterns, and enhance human capabilities in solving real-world problems.",
      name: 'Andrew Ng',
      title: 'AI Expert & Co-founder of Coursera',
    },
    {
      quote:
        'In the age of information, machine learning provides a lens through which we can see clarity in complexity. It turns raw data into actionable insights, and insights into impactful decisions. With the right data, model, and purpose, machine learning can reshape industries and the way we interact with technology.',
      name: 'Fei-Fei Li',
      title: 'Professor at Stanford University',
    },
    {
      quote:
        "Every time you search the web, use voice assistants, or get recommendations, you're interacting with machine learning. It's silently embedded in our digital experiences. The real challenge is not just building these models, but understanding their implications, limitations, and the responsibilities that come with using them.",
      name: 'Yann LeCun',
      title: 'Chief AI Scientist at Meta',
    },
    {
      quote:
        'Machine learning is a subset of artificial intelligence that focuses on systems that can learn from data, identify patterns, and make decisions with minimal human intervention. It’s changing how businesses operate, how science advances, and how society understands data-driven processes at scale.',
      name: 'Tom Mitchell',
      title: 'Professor at Carnegie Mellon University',
    },
    {
      quote:
        "The power of machine learning lies not just in what it can do, but in how it evolves. A model trained today might not serve tomorrow's needs, which is why continuous learning, ethical considerations, and transparent design are critical in developing responsible and useful ML systems.",
      name: 'Cynthia Rudin',
      title: 'AI Researcher & Explainability Advocate',
    },
    {
      quote:
        'With machine learning, we can teach computers to recognize speech, understand images, translate languages, and even generate art. But behind the scenes, it’s all math, data, and iterative processes. The artistry is in selecting the right problem and applying the right algorithm in a meaningful way.',
      name: 'Ian Goodfellow',
      title: 'Inventor of GANs',
    },
    {
      quote:
        "Training machine learning models isn't just about accuracy—it’s about fairness, bias, transparency, and impact. As we rely more on algorithms in healthcare, law, finance, and education, ensuring these systems work equally well for all groups becomes not just a technical challenge, but a societal one.",
      name: 'Timnit Gebru',
      title: 'AI Ethics Researcher',
    },
    {
      quote:
        'The exciting thing about machine learning is its ability to automate learning itself. We no longer need to program every rule manually. Instead, we provide data and let the machine discover the rules, which can often be more nuanced, complex, and effective than human-defined heuristics.',
      name: 'Pedro Domingos',
      title: "Author of 'The Master Algorithm'",
    },
    {
      quote:
        "The future of machine learning isn't just smarter models, but also more interpretable ones. Black-box systems are powerful but risky. We need systems that not only perform well but explain their reasoning clearly, especially in critical applications like healthcare, law, and autonomous decision-making.",
      name: 'Zachary Lipton',
      title: 'Assistant Professor, CMU',
    },
    {
      quote:
        "Machine learning isn't a crystal ball—it’s a tool. It learns from history, and history can be messy, biased, or incomplete. The key to building useful models lies in understanding both the data and the real-world context in which predictions will be used. Good ML requires good judgment.",
      name: 'Emily Bender',
      title: 'Computational Linguist',
    },
  ];

  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
        )}
      />
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voice of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
