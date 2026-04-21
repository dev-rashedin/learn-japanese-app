import { Helmet } from "react-helmet-async";
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { axiosApi } from "../../api/axiosApi";
import useLoadLessons from "../../hooks/useLoadLessons";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import UpdateLessonModal from "../../components/modals/UpdateLessonModal";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingSpinner from "../../components/LoadingSpinner";

const Lessons = () => {
  const [isOpen, setIsOpen] = useState(false);
     const [currentId, setCurrentId] = useState(null);
   


const [lessons, refetch, isLoading, isError, error] =
  useLoadLessons();

  // delete a lesson
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
         const res = await axiosApi.delete(`/delete-lesson/${id}`);

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


   if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title>Learn Japanese || Admin - Lessons</title>
      </Helmet>
      <table className='table table-sm xl:table-md w-full border border-green-heaven lg:w-3/4 mx-auto mt-8'>
        <thead>
          <tr className=' border-b-2 border-green-heaven text-base lg:text-lg text-slate-800 text-center'>
            <th className='border-2 border-green-heaven'>Lesson Name</th>
            <th className='border-2 border-green-heaven'>Lesson No.</th>
            <th className='border-2 border-green-heaven'>Vocabularies</th>
            <th className='border-2 border-green-heaven'>Edit</th>
            <th className='border-2 border-green-heaven'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr
              className='border-b border-green-heaven text-center'
              key={lesson._id}
            >
              <td className='border border-green-heaven text-sm lg:text-base font-semibold'>
                {lesson?.lessonName}
              </td>
              <td className='border border-green-heaven text-sm font-semibold'>
                {lesson?.lessonNumber}
              </td>
              <td className='border border-green-heaven text-sm font-semibold'>
                {lesson.vocabularyCount}
              </td>
              <td className='border border-green-heaven text-sm font-semibold text-center'>
                <button onClick={() => closeModal(lesson._id)}>
                  <FaEdit
                    size='20'
                    className='cursor-pointer text-autumn-ember ml-1 hover:scale-125 transition duration-300 ease'
                  />
                </button>
                {isOpen && currentId === lesson._id && (
                  <UpdateLessonModal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    lessonData={lesson}
                    refetch={refetch}

                  />
                )}
              </td>
              <td className='border- border-green-heaven text-xs font-semibold'>
                <button onClick={() => handleDelete(lesson._id)}>
                  <MdDeleteForever
                    size='24'
                    className=' text-crimson-gate  hover:scale-125 transition duration-300 ease mt-[6px]'
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lessons;
