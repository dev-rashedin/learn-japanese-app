import { Helmet } from 'react-helmet-async';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { ImSpinner9 } from 'react-icons/im';
import { postVocabularyInfo } from '../../api/userApi';
import { useNavigate } from 'react-router-dom';

const AddVocabularies = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { user } = useAuth();
  

  const handleAddVocabulary = async (e) => {
    e.preventDefault();
    const vocabularyData = {
      Word: e.target.word.value,
      Pronunciation: e.target.pronunciation.value,
      Meaning: e.target.meaning.value,
      WhenToSay: e.target.whenToSay.value,
      LessonNo: e.target.lessonNo.value,
      AdminEmail: user?.email || 'ading@example.com',
    };

    try {
      setLoading(true);
     {user && postVocabularyInfo(vocabularyData);}
  
      setLoading(false);
      // Clear form
      e.target.reset();
      navigate('/dashboard/vocabulary-management');

    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='-mt-8 overflow-x-auto min-h-screen flex justify-center items-center'>
      <Helmet>
        <title>Learn Japanese || Add Vocabularies</title>
      </Helmet>
      <div className='md:w-5/6 xl:w-2/3 md:mx-auto rounded-xl'>
        <form
          onSubmit={handleAddVocabulary}
          className='space-y-4 bg-green-heaven/30 p4 md:p-6 mt-8 rounded-3xl drop-shadow-2xl'
        >
          <div className='form-control'>
            <label
              htmlFor='word'
              className='block text-base font-medium text-zen-charcoal mb-1'
            >
              Japanese Word
            </label>
            <input
              type='text'
              id='word'
              name='word'
              placeholder='こんにちは'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>
          {/* pronunciation */}
          <div className='form-control'>
            <label
              htmlFor='pronunciation'
              className='block text-base font-medium text-zen-charcoal mb-1'
            >
              Pronunciation
            </label>
            <input
              type='text'
              id='pronunciation'
              name='pronunciation'
              placeholder='Konnichiwa'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          {/* meaning */}
          <div className='form-control'>
            <label
              htmlFor='meaning'
              className='block text-base font-medium text-zen-charcoal mb-1'
            >
              Meaning
            </label>
            <input
              type='text'
              id='meaning'
              name='meaning'
              placeholder='Hello'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          {/* lesson no */}
          <div className='form-control'>
            <label
              htmlFor='lessonNo'
              className='block text-base font-medium text-zen-charcoal mb-1'
            >
              Lesson Number
            </label>
            <input
              type='number'
              id='lessonNo'
              name='lessonNo'
              placeholder='1'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          {/* when to say */}
          <div className='form-control'>
            <label
              htmlFor='whenToSay'
              className='block text-base font-medium text-zen-charcoal mb-1'
            >
              When to Say
            </label>
            <textarea
              id='whenToSay'
              name='whenToSay'
              placeholder='Used for greeting'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              rows='3'
            />
          </div>

          <div className='form-control pt-2'>
            <button
              disabled={loading}
              type='submit'
              className='w-full bg-green-heaven text-white py-3 px-4 rounded-md hover:bg-green-800 transition-colors disabled:opacity-50'
            >
              {loading ? (
                <ImSpinner9 className='animate-spin m-auto text-deep-ocean' />
              ) : (
                'Add Vocabulary'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVocabularies;
