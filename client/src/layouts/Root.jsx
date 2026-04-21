import { Outlet, useLocation } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import Navbar from './../pages/shared/Navbar';
import Footer from './../pages/shared/Footer';
import bg from '../assets/bg2.jpg'

const Root = () => {
  const { theme } = useTheme();

  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes('login') ||
    location.pathname.includes('register');

  return (
    <div
      className={`${theme}  ${theme?.colors?.background}`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        className={`container mx-auto lg:px-4 font-rockNroll ${theme?.colors?.textPrimary} min-h-[86vh] pb-8`}
      >
        {noHeaderFooter || <Navbar />}
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};
export default Root;
