import { Helmet } from 'react-helmet-async';
import useLoadVocabularies from '../../hooks/useLoadVocabularies';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import LoadingSpinner from './../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import { axiosApi } from '../../api/axiosApi';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import UpdateVocabularyModal from '../../components/modals/UpdateVocabularyModal';

const VocabularyManagement = () => {
  const [filter, setFilter] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [currentId, setCurrentId] = useState(null);

  const [vocabularies, refetch, isLoading, isError, error] =
    useLoadVocabularies(filter);


  
 const handleDelete = (id) => {
   Swal.fire({
     title: 'Are you sure?',
     text: "You won't be able to revert this!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes, delete it!',
   }).then(async (result) => {
     // Make this callback async
     if (result.isConfirmed) {
       try {
         const res = await axiosApi.delete(`/delete-vocabulary/${id}`);

         if (res.data.deletedCount) {
           toast.success('Vocabulary deleted successfully');
           refetch(); // Ensure refetch is available in the scope
          
         }
       } catch (error) {
         console.error(error);
         toast.error(`Error: ${error.message}`);
       }
     }
   });
  };
  
  const closeModal = (id) => {
    setCurrentId(id);
    setIsOpen(!isOpen);
  };


  // handling loading and error
    if (isLoading) return <LoadingSpinner />;
    if (isError) return <ErrorMessage error={error} />;

  return (
    <>
      <Helmet>
        <title>Vocabulary || Vocabulary Management</title>
      </Helmet>

      <div className='overflow-x-auto -mt-4'>
        <table className='table table-sm xl:table-md w-full border border-green-heaven lg:w-3/4 mx-auto mt-8'>
          {/* head */}
          <thead>
            <tr className=' border-b-2 border-green-heaven text-base lg:text-lg text-slate-800 text-center'>
              <th className='border-2 border-green-heaven'>#</th>
              <th className='border-2 border-green-heaven'> Japanese Word</th>
              <th className='border-2 border-green-heaven'> Pronunciation</th>
              <th className='border-2 border-green-heaven'> Meaning</th>
              <th className='border-2 border-green-heaven '>
                Use Case - When to Say
              </th>
              <th className='border-2 border-green-heaven'> Lesson No</th>
              <th className='border-2 border-green-heaven'>Edit</th>
              <th className='border-2 border-green-heaven'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {vocabularies?.map((voc, index) => (
              <tr className='border-b border-green-heaven' key={voc._id}>
                <td className='border border-green-heaven text-sm lg:text-base font-semibold'>
                  {index + 1}
                </td>

                <td className='border border-green-heaven text-sm font-semibold '>
                  {voc?.Word}
                </td>
                <td className='border border-green-heaven text-sm font-semibold'>
                  {voc?.Pronunciation}
                </td>
                <td className='border border-green-heaven text-sm font-semibold'>
                  {voc?.Meaning}
                </td>
                <td
                  className={`border border-green-heaven text-sm font-semibold`}
                >
                  {voc?.WhenToSay}
                </td>
                <td
                  className={`border border-green-heaven text-sm font-semibold text-center`}
                >
                  {voc?.LessonNo}
                </td>
                <td className='border border-green-heaven text-sm font-semibold text-center'>
                  <button onClick={() => closeModal(voc._id)}>
                    <FaEdit
                      size='20'
                      className='cursor-pointer text-autumn-ember ml-1 hover:scale-125 transition duration-300 ease'
                    />
                  </button>
                  {isOpen && currentId === voc._id && (
                    <UpdateVocabularyModal
                      isOpen={isOpen}
                      closeModal={closeModal}
                      vocabularyData={voc}
                      refetch={refetch}
                    />
                  )}
                </td>
                <td className='border- border-green-heaven text-xs font-semibold'>
                  <button onClick={() => handleDelete(voc._id)}>
                    <MdDeleteForever
                      size='24'
                      className=' text-crimson-gate  hover:scale-125 transition duration-300 ease ml-3 mt-[6px]'
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default VocabularyManagement;
