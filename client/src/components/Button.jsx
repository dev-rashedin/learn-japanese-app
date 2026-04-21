import PropTypes from 'prop-types';

const Button = ({ label, type, onClick }) => {
  let buttonClass =
    'px-4 py-2 rounded-lg hover:rounded-full text-white text-sm lg:text-base';

  if (type === 'primary') {
    buttonClass += ' bg-green-heaven hover:bg-amber-glow';
  } else if (type === 'secondary') {
    buttonClass += '  bg-amber-glow hover:bg-green-heaven';
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
