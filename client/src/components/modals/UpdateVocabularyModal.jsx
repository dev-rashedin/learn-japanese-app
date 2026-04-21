import PropTypes from 'prop-types';
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { Fragment, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { ImSpinner9 } from 'react-icons/im';
import { toast } from 'react-toastify';
import PageTitle from '../PageTitle';
import { axiosApi } from '../../api/axiosApi';

const UpdateVocabularyModal = ({
  isOpen,
  closeModal,
  vocabularyData,
  refetch,
}) => {
  const [loading, setLoading] = useState(false);

  console.log(vocabularyData);
  

  const handleUpdateVocabulary = async (e) => {
    e.preventDefault();
    const updatedVocabularyData = {
      Word: e.target.word.value,
      Pronunciation: e.target.pronunciation.value,
      Meaning: e.target.meaning.value,
      LessonNo: e.target.lessonNo.value,
      WhenToSay: e.target.whenToSay.value,
    };

    try {
      const res = await axiosApi.patch(
        `/update-vocabulary/${vocabularyData._id}`,
        updatedVocabularyData
      );

      if (res.data.modifiedCount) {
        toast.success('Vocabulary Updated Successfully');
        refetch();
        closeModal();
      }
    } catch (error) {
      console.error(error);
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={closeModal} className='relative z-50'>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-1000'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-600'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>
        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <DialogPanel className='w-96 md:w-[500px] lg:w-[600px] space-y-4 border bg-green-100 px-4 pb-4 relative drop-shadow-xl rounded-xl'>
            <button
              onClick={closeModal}
              className='absolute -top-3 -right-3 bg-green-heaven rounded-full p-2 cursor-pointer'
            >
              <MdClose color='black' size={28} />
            </button>
            <DialogTitle className='text-2xl pb-4 text-center'>
              <PageTitle title='Update Vocabulary' />
            </DialogTitle>

            <form
              onSubmit={handleUpdateVocabulary}
              className='space-y-2 bg-green-heaven bg-opacity-20 p-4 lg:p-6 rounded-xl drop-shadow-2xl mt-8'
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
                  defaultValue={vocabularyData?.Word}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                />
              </div>

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
                  defaultValue={vocabularyData?.Pronunciation}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                />
              </div>

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
                  defaultValue={vocabularyData?.Meaning}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                />
              </div>

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
                  defaultValue={vocabularyData?.LessonNo}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                />
              </div>

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
                  defaultValue={vocabularyData?.WhenToSay}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                  rows='3'
                />
              </div>

              <div className='form-control pt-2'>
                <button
                  disabled={loading}
                  type='submit'
                  className='w-full bg-green-heaven text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50'
                >
                  {loading ? (
                    <ImSpinner9 className='animate-spin m-auto text-white' />
                  ) : (
                    'Update Vocabulary'
                  )}
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};

UpdateVocabularyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
  vocabularyData: PropTypes.shape({
    _id: PropTypes.string,
    word: PropTypes.string,
    pronunciation: PropTypes.string,
    meaning: PropTypes.string,
    lessonNo: PropTypes.number,
    whenToSay: PropTypes.string,
  }),
};

export default UpdateVocabularyModal;
