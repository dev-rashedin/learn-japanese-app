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
import { useNavigate } from 'react-router-dom';

const UpdateLessonModal = ({ isOpen, closeModal, lessonData, refetch}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  // console.log(lessonData)
  
  
  

  const handleUpdateLesson = async (e) => {
    e.preventDefault();
    const updatedLessonData = {
      lessonName: e.target.lessonName.value,
      lessonNumber: e.target.lessonNumber.value,
    };
  
    

    try {
      const res = await axiosApi.patch(`/update-lesson/${lessonData._id}`, updatedLessonData);

      if (res.data.modifiedCount) {
        toast.success('Lesson Updated Successfully successfully');
        refetch();
        navigate('/dashboard')
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
          <DialogPanel className='space-y-4 border bg-green-100 px-4 pb-4 relative  drop-shadow-xl rounded-xl'>
            {/* close btn */}
            <button
              onClick={closeModal}
              className='absolute -top-3 -right-3 bg-green-heaven rounded-full p-2 cursor-pointer  '
            >
              <MdClose color='black' size={28} />
            </button>
            <DialogTitle className='text-2xl pb-4 text-center font-wendy'>
             <PageTitle title="Update Lesson"/>
            </DialogTitle>

            <form
              onSubmit={handleUpdateLesson}
              className='space-y-2 bg-green-heaven p-4 md:p-16 lg:p-6 xl:p-16 bg-opacity-20 rounded-xl drop-shadow-2xl mt-8'
            >
              <div className='form-control'>
                <label htmlFor='lessonName' className='font-medium'>
                  Lesson Name
                </label>
                <input
                  type='text'
                  id='lessonName'
                  name='lessonName'
                  placeholder='Lesson Name'
                  defaultValue={lessonData?.lessonName}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                />
              </div>

              <div className='py-1 rounded-md'>
                <label htmlFor='lessonNumber' className='font-medium'>
                  Lesson Number
                </label>
                <input
                  type='number'
                  placeholder='Lesson Number'
                  required
                  defaultValue={lessonData?.lessonNumber}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                  name='lessonNumber'
                  id='lessonNumber'
                />
              </div>

              <div className='form-control mt-6'>
                <button
                  disabled={loading}
                  type='submit'
                  className='btn bg-green-heaven text-white hover:bg-green-600 mt-2'
                >
                  {loading ? (
                    <ImSpinner9 className='animate-spin m-auto text-white' />
                  ) : (
                    'Update Lesson'
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

UpdateLessonModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  lessonData: PropTypes.shape({
    lessonName: PropTypes.string,
    lessonNumber: PropTypes.number,
  }),
};

export default UpdateLessonModal;
