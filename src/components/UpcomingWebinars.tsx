'use client';
import Link from 'next/link';
import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';

const UpcomingWebinars = () => {
  const featuredWebinars = [
    {
      title: 'Introduction to Machine Learning',
      description:
        'Learn the basics of machine learning, including supervised and unsupervised learning techniques.',
      slug: 'intro-to-machine-learning',
      isFeatured: true,
    },
    {
      title: 'Deep Learning with Neural Networks',
      description:
        'Explore the structure and function of deep neural networks and how they are used in AI tasks.',
      slug: 'deep-learning-neural-networks',
      isFeatured: true,
    },
    {
      title: 'Data Preprocessing Techniques',
      description:
        'Understand the importance of cleaning and transforming raw data before model training.',
      slug: 'data-preprocessing-techniques',
      isFeatured: false,
    },
    {
      title: 'Model Evaluation Metrics',
      description:
        'Learn how to evaluate the performance of machine learning models using key metrics like accuracy, precision, and recall.',
      slug: 'model-evaluation-metrics',
      isFeatured: false,
    },
    {
      title: 'Feature Engineering Fundamentals',
      description:
        'Discover how to extract the most informative features from raw data to improve model accuracy.',
      slug: 'feature-engineering-fundamentals',
      isFeatured: true,
    },
    {
      title: 'Building a Spam Classifier',
      description:
        'Hands-on project to build a simple spam detection system using logistic regression and NLP.',
      slug: 'building-a-spam-classifier',
      isFeatured: false,
    },
    {
      title: 'Hyperparameter Tuning',
      description:
        'Learn strategies for finding the best parameters for your machine learning models.',
      slug: 'hyperparameter-tuning',
      isFeatured: true,
    },
    {
      title: 'Overfitting and Underfitting',
      description:
        'Understand the causes of poor generalization and how to balance model complexity.',
      slug: 'overfitting-vs-underfitting',
      isFeatured: false,
    },
    {
      title: 'Deploying ML Models with Flask',
      description:
        'Deploy your trained machine learning models as web services using Python Flask.',
      slug: 'deploy-ml-models-with-flask',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Machine Learning Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar, index) => ({
              key: index,
              title: webinar.title,
              description: webinar.description,
              link: `/`,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={'/'}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
