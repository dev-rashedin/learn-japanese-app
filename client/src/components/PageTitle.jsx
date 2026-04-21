import PropTypes from 'prop-types';
import useTheme from '../hooks/useTheme';

const PageTitle = ({ title }) => {
    const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`text-center drop-shadow-2xl ${theme}  ${theme?.colors?.background} ${theme?.colors?.textPrimary} w-[550px] mx-auto py-2 rounded-xl`}
    >
      <h2 className='text-3xl tracking-wide mb-4 font-semibold  font-yujiMai'>
        {title}
      </h2>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
