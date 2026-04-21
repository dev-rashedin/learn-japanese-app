import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactConfetti from 'react-confetti';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { useQuery } from '@tanstack/react-query';
import useLoadVocabularies from '../hooks/useLoadVocabularies';
import { HiMiniSpeakerWave } from 'react-icons/hi2';

const Button = ({
  children,
  onClick,
  disabled,
  variant = 'default',
  className = '',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-700 h-10 px-4 py-2 w-36';

  const variants = {
    default: 'bg-autumn-ember text-white hover:bg-amber-glow',
    outline:
      'border border-input bg-amber-glow text-white hover:bg-autumn-ember',
    green: 'bg-green-heaven text-white hover:bg-green-700',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`rounded-lg border bg-white text-gray-900 shadow-sm p-6 ${className}`}
    >
      {children}
    </div>
  );
};

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className='fixed top-4 right-4 z-50 animate-fade-in'>
      <div className='bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg'>
        {message}
      </div>
    </div>
  );
};

const SingleVocabularyPage = () => {
  const { lessonNumber } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [filter, setFilter] = useState('');
  const [disabled, setDisabled] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

const [vocabularies, refetch, isLoading, isError, error] =
  useLoadVocabularies(filter);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage error={error} />;

 const selectedVocabularies = vocabularies?.filter(
   (voc) => {
     return voc.LessonNo === parseInt(lessonNumber);
   }
 );
  
  

  const currentWord = selectedVocabularies[currentIndex];

  
  const isLastWord = currentIndex === selectedVocabularies.length - 1;

  const playPronunciation = () => {
    const utterance = new SpeechSynthesisUtterance(currentWord.Word);
    utterance.lang = 'ja-JP';
    speechSynthesis.speak(utterance);
  };

  const handleNext = () => {
    if (currentIndex < selectedVocabularies.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setDisabled(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setDisabled(true);
    }
  };

  const handleComplete = () => {
    setShowConfetti(true);
    setShowToast(true);
    setTimeout(() => {
      setShowConfetti(false);
      navigate('/lessons');
    }, 4000);
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <Helmet>
        <title>Learn Japanese || Vocabulary</title>
      </Helmet>

      {showConfetti && (
        <ReactConfetti
          width={windowDimensions.width}
          height={windowDimensions.height}
        />
      )}

      {showToast && (
        <Toast
          message="Congratulations! You've completed this lesson!"
          onClose={() => setShowToast(false)}
        />
      )}

      <Card className='max-w-2xl mx-auto bg-gradient-to-br from-green-heaven/30 via-green-heaven/20 to-green-heaven/10 animate-fade-in border border-b-4 border-r-4 border-gray-400 shadow-lg hover:scale-[0.98] hover:brightness-105 transition-all duration-300 ease'>
        <div className='space-y-6'>
          <div className='cursor-pointer hover:scale-105 transition-transform'>
            <h2 className='text-3xl font-bold text-center mb-2'>
              {currentWord.Word}
            </h2>
            <div className='flex justify-center gap-2 items-center'>
              <p className='text-xl text-center text-gray-600'>
                {currentWord.Pronunciation}
              </p>
              <div onClick={playPronunciation}>
                <HiMiniSpeakerWave size={24} />
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold text-lg'>Meaning:</h3>
              <p className='text-gray-600'>{currentWord.Meaning}</p>
            </div>
            <div>
              <h3 className='font-semibold text-lg'>When to Say:</h3>
              <p className='text-gray-600'>{currentWord.WhenToSay}</p>
            </div>
            {/* <div>
              <h3 className='font-semibold text-lg'>Example:</h3>
              <p className='text-gray-600'>{currentWord.example}</p>
            </div> */}
          </div>

          <div className='flex justify-between items-center pt-4'>
            <Button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              variant='outline'
            >
              Previous
            </Button>

            {isLastWord ? (
              <Button onClick={handleComplete} variant='green'>
                Complete Lesson
              </Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </div>
        </div>
      </Card>

      <div className='mt-8 text-center text-2xl font-yujiMai text-zen-charcoal'>
        Word {currentIndex + 1} of {selectedVocabularies.length}
      </div>
    </div>
  );
};

export default SingleVocabularyPage;
