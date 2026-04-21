import React from 'react';
import { Helmet } from 'react-helmet-async';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Duolingo Japanese',
      platform: 'Duolingo',
      description:
        'Free Japanese learning platform perfect for beginners. Features bite-sized lessons, speaking practice with structured curriculum.',
      price: 'Free (Premium: $6.99/month)',
      url: 'https://www.duolingo.com/course/ja/en/Learn-Japanese',
      features: [
        'Gamified Learning',
        'Mobile App',
        'Progress Tracking',
        'Speaking Practice',
      ],
    },
    {
      id: 2,
      title: 'Japanese From Zero!',
      platform: 'YesJapan',
      description:
        'Comprehensive Japanese course covering all aspects of the language. Includes textbooks, video lessons, and online practice.',
      price: '$29/month',
      url: 'https://www.yesjapan.com',
      features: [
        'Video Lessons',
        'Textbook Integration',
        'Writing Practice',
        'Community Support',
      ],
    },
    {
      id: 3,
      title: 'WaniKani',
      platform: 'Tofugu',
      description:
        'Specialized platform for learning Kanji and vocabulary using spaced repetition system (SRS) and memorable mnemonics.',
      price: '$9/month',
      url: 'https://www.wanikani.com',
      features: [
        'Kanji Learning',
        'Vocabulary Building',
        'SRS Technology',
        'Progress Analytics',
      ],
    },
    {
      id: 4,
      title: 'Genki Online',
      platform: 'The Japan Times',
      description:
        'Digital version of the popular Genki textbook series with interactive exercises and audio materials.',
      price: '$89 (one-time)',
      url: 'https://genki3.japantimes.co.jp',
      features: [
        'Interactive Exercises',
        'Audio Materials',
        'JLPT Alignment',
        'Structured Learning',
      ],
    },
    {
      id: 5,
      title: 'Bunpo',
      platform: 'Bunpo App',
      description:
        'Grammar-focused learning app with detailed explanations and practice exercises for all JLPT levels.',
      price: 'Free (Premium: $7.99/month)',
      url: 'https://bunpo.jp',
      features: [
        'Grammar Focus',
        'JLPT Prep',
        'Practice Exercises',
        'Mobile Learning',
      ],
    },
    {
      id: 6,
      title: 'Memrise',
      platform: 'Memrise',
      description:
        'Video-based language learning platform featuring native speakers and spaced repetition for vocabulary.',
      price: 'Free (Premium: $8.99/month)',
      url: 'https://www.memrise.com/japanese',
      features: [
        'Native Videos',
        'Vocabulary Focus',
        'Mobile App',
        'Community Content',
      ],
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <Helmet>
        <title>Learn Japanese || Courses</title>
      </Helmet>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
        {courses.map((course) => (
          <div
            key={course.id}
            className='bg-zen-serenity rounded-lg shadow-2xl p-6 flex flex-col h-full'
          >
            <div className='mb-4'>
              <h2 className='text-xl font-semibold'>{course.title}</h2>
              <p className='text-sm text-gray-600'>
                Platform: {course.platform}
              </p>
            </div>
            <div className='flex-grow'>
              <p className='text-sm mb-4'>{course.description}</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {course.features.map((feature, index) => (
                  <span
                    key={index}
                    className='bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full'
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <p className='text-sm font-semibold text-gray-800'>
                Price: {course.price}
              </p>
            </div>
            <button
              className='mt-4 w-full px-4 py-2 border border-zen-charcoal rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 drop-shadow-lg'
              onClick={() => window.open(course.url, '_blank')}
            >
              Visit Platform
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                <polyline points='15 3 21 3 21 9'></polyline>
                <line x1='10' y1='14' x2='21' y2='3'></line>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
