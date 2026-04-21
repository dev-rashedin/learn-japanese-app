import { Helmet } from "react-helmet-async";
import useLoadLessons from './../hooks/useLoadLessons';
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { Link } from 'react-router-dom';
import { FaHourglassStart } from 'react-icons/fa';
import { GiOpenBook } from 'react-icons/gi';
import bg from '../assets/flower.jpg';

const Lessons = () => {

  const [lessons, refetch, isLoading, isError, error] = useLoadLessons();

  // console.log('Lessons:', lessons);
  

  // handling loading and error
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <div className='container mx-auto px-4 py-8 '>
      <Helmet>
        <title>Learn Japanese || Lessons</title>
      </Helmet>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 '>
        {lessons ? (
          <>
            {lessons?.map((lesson) => (
              <div
                key={lesson._id}
                className='group rounded-xl border-2 border-green-heaven/80 drop-shadow-2xl transition-translate duration-500 ease-out hover:-translate-y-2 
                     hover:border-amber-glow/80 animate-fade-in border-b-[6px] border-r-[6px] relative h-[250px] '
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundPosition: 'top left',
                  backgroundBlendMode: 'multiply',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className='flex flex-col space-y-1 p-6 relative overflow-hidden'>
                  <div
                    className='w-12 h-12 bg-green-heaven/20 rounded-full flex items-center justify-center 
                          group-hover:scale-110 transition-all duration-500 ease-out
                          group-hover:bg-amber-glow/40 group-hover:translate-x-2'
                  >
                    <GiOpenBook className='w-6 h-6 text-crimson-gate rotate-12' />
                  </div>
                </div>

                <div className='px-6 pb-8'>
                  <h3
                    className='text-2xl font-bold transform transition-translate duration-300
                         group-hover:translate-x-2 text-autumn-ember'
                  >
                    {lesson.lessonName}
                  </h3>
                  <p className=' transition-all duration-300  group-hover:translate-x-2 text-lg font-semibold text-autumn-ember opacity-75'>
                    Lesson {lesson.lessonNumber}
                  </p>
                </div>

                <div className='flex  p-6 pt-0 items-end absolute right-0 bottom-'>
                  <Link to={`/single-vocabulary/${lesson.lessonNumber}`}>
                    <button
                      className=' inline-flex items-center justify-center gap-2 
                           bg-green-heaven/80 text-white py-2 px-4 rounded-md
                           transition-[transform,background-color,box-shadow] duration-500 ease-out
                           group-hover:bg-amber-glow/80 shadow-lg
                           active:scale-95
                            relative overflow-hidden
                           before:absolute before:inset-0 
                           before:bg-white/20 before:translate-x-[-150%] before:skew-x-[45deg]
                           before:transition-transform before:duration-500
                           hover:before:translate-x-[150%]'
                    >
                      Start Lesson
                      <FaHourglassStart className='w-4 h-4' />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Lessons;