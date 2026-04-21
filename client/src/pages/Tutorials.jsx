import React from 'react';
import { Helmet } from 'react-helmet-async';

const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Learn ALL Hiragana in 1 Hour - How to Write and Read Japanese',
      videoId: '6p9Il_j0zjc',
      description:
        'Comprehensive guide to learning the Japanese Hiragana writing system',
    },
    {
      id: 2,
      title: 'Learn Japanese in 4 Hours - ALL the Japanese Basics You Need',
      videoId: '8YV8KmfBbBM',
      description:
        'Complete Japanese basics course covering essential vocabulary and grammar',
    },
    {
      id: 3,
      title: 'Japanese Numbers & Counting - Complete Japanese From Zero!',
      videoId: '94F5sTXhhjg',
      description:
        'Master Japanese numbers and counting system from basics to advanced',
    },
    {
      id: 4,
      title: '100 Most Important Japanese Phrases You Need to Know',
      videoId: '66P5_R37vek',
      description: 'Essential Japanese phrases for everyday conversations',
    },
    {
      id: 5,
      title: 'Japanese Grammar Made Easy - All About Particles を,に,で,へ',
      videoId: 'H6P3KtT2YyE',
      description:
        'Detailed explanation of basic Japanese particles and their usage',
    },
    {
      id: 6,
      title: 'Japanese Verbs Conjugation - Ultimate Guide',
      videoId: 'FhyrskGBKHE',
      description: 'Complete guide to Japanese verb conjugation patterns',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Learn Japanese || Tutorials</title>
      </Helmet>
      <div className='container mx-auto px-4 py-8'>

        {/* <PageTitle title='Japanese Language Tutorials'/> */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6'>
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className='bg-zen-serenity rounded-lg drop-shadow-2xl overflow-hidden'
            >
              <div className='aspect-w-16 aspect-h-9'>
                <iframe
                  src={`https://www.youtube.com/embed/${tutorial.videoId}`}
                  title={tutorial.title}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='w-full h-full'
                ></iframe>
              </div>
              <div className='p-4'>
                <h3 className='font-semibold text-lg mb-2'>{tutorial.title}</h3>
                <p className='text-zen-charcoal'>{tutorial.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tutorials;
