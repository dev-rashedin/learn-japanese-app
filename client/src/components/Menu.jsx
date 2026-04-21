/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import useTheme from '../hooks/useTheme';

const Menu = ({ filteredItems = [] }) => {
  const {theme} = useTheme()
  return (
 
      <ul
        className={`lg:flex lg:justify-end lg:items-center lg:space-x-6 xl:space-x-12 lg:text-lg space-y-4 px-1  lg:space-y-0    ${theme?.colors.textPrimary} `}
      >
        {filteredItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'border border-b-4 border-r-4  px-4 pb-1 rounded-xl  border-green-heaven font-semibold'
                  : 'px-4 lg:text-lg hover:border-b-2 pb-1 rounded-xl border-zen-charcoal'
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
  
  );
};

Menu.propTypes = {
  items: PropTypes.array,
};

export default Menu;
