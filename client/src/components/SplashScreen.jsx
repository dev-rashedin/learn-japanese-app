
import { useState, useEffect, ReactNode } from 'react';
import { FaHandsClapping } from 'react-icons/fa6';



const SplashScreen = ({ children }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setHidden(true);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
      {/* Splash Screen */}
      <div
        className={`absolute top-0 left-0 w-full h-screen overflow-hidden z-50 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-700 ease-in-out`}
      >
        <div className='flex flex-col items-center justify-center w-full h-full  text-white  tracking-wider'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold flex gap-2'>
            Welcome to Learn Japanese
            <FaHandsClapping />
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${hidden ? 'block' : 'hidden'}`}>{children}</div>
    </>
  );
};

export default SplashScreen;
