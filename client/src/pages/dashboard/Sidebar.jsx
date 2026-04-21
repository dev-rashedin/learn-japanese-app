import { useState } from 'react';

// icons
import {
  GrUserAdmin,
  GrLogout,
  GrDocumentConfig,
  GrDocumentCloud,
} from 'react-icons/gr';
import { AiOutlineBars } from 'react-icons/ai';
import { MdOutlineArticle } from 'react-icons/md';
import { FaRegAddressCard, FaUserCog } from 'react-icons/fa';
import { TbVocabulary } from 'react-icons/tb';

import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { toast } from 'react-toastify';

const Sidebar = ({ isActive, handleToggle }) => {
  // const [isActive, setActive] = useState(false);
  const navigate = useNavigate();
  const { logOutUser } = useAuth();

  const handleLogOut = async () => {
    try {
      await logOutUser();
      toast.warn('Logout successful');
      navigate('/');
    } catch (error) {
      console.l(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className=' bg-gray-400 text-gray-800 flex justify-between lg:hidden'>
        <div>
          <div
            className={`block cursor-pointer p-4 font-bold bg-zen-serenity  ${
              isActive && 'hidden'
            }`}
          >
            <Link to='/lessons'>
              <img
                className=' md:block drop-shadow-xl'
                src={logo}
                alt='logo'
                width='90'
                height='60'
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button py-4 px-10 focus:outline-none bg-zen-serenity text-zen-charcoal'
        >
          <AiOutlineBars className='h-6 w-6' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-green-heaven text-zen-serenity w-64 space-y-6 px-2 py-4  absolute inset-y-0 left-0 transform -translate-x-full
           ${
             isActive && 'translate-x-0'
           }  lg:translate-x-0  transition duration-300 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full px-4 py-2 shadow-lg rounded-lg  flex justify-center items-center bg-white z-50'>
              <Link to='/lessons'>
                <img
                  src={logo}
                  alt='logo'
                  width='150'
                  height='100'
                  className='drop-shadow-xl text-white'
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between items-center flex-1 mt-6 '>
            {/*  Menu Items */}
            <nav>
              {/* Add Lessons */}
              <NavLink
                to='add-lessons'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-3   hover:text-white    w-[200px] ${
                    isActive ? '   bg-amber-glow rounded-lg  text-white' : ''
                  }`
                }
              >
                <FaRegAddressCard className='w-5 h-5 ' />

                <span className='mx-4 font-medium'>Add Lessons</span>
              </NavLink>

              {/* Manage Lessons */}
              <NavLink
                to='/dashboard'
                end
                className={({ isActive }) =>
                  `flex items-center px-3.5 gap-3 py-2 my-3   hover:text-white    w-[200px] mx-auto ${
                    isActive ? '   bg-amber-glow rounded-lg  text-white' : ''
                  }`
                }
              >
                <MdOutlineArticle size={24} />

                <span className=' font-medium'>Manage Lessons</span>
              </NavLink>

              {/* Add Vocabularies */}
              <NavLink
                to='add-vocabularies'
                className={({ isActive }) =>
                  `flex items-center px-3.5 py-2 my-3   hover:text-white    w-[200px] ${
                    isActive ? '   bg-amber-glow rounded-lg  text-white' : ''
                  }`
                }
              >
                <TbVocabulary size={22} />

                <span className='mx-4 font-medium'>Add Vocabularies</span>
              </NavLink>

              {/* Vocabulary Management */}
              <NavLink
                to='vocabulary-management'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-3   hover:text-white    w-[200px] ${
                    isActive ? '   bg-amber-glow rounded-lg  text-white' : ''
                  }`
                }
              >
                <GrDocumentCloud className='w-6 h-6 ' />

                <span className='mx-4 font-medium'>Vocabulary Management</span>
              </NavLink>

              {/* Manage Users */}
              <NavLink
                to='manage-users'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-3   hover:text-white    w-[200px] ${
                    isActive ? '   bg-amber-glow rounded-lg  text-white' : ''
                  }`
                }
              >
                <FaUserCog className='w-6 h-6 ' />

                <span className='mx-4 font-medium'>Manage Users</span>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <div className='bg-zen-charcoal h-[1px] w-11/12 mx-auto'> </div>

          <div className='ml-1'>
            {/* Profile Menu */}
            <NavLink
              to='/profile'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 my-3   hover:text-white    w-[200px] ${
                  isActive ? '   bg-amber-glow rounded-lg  text-white' : ''
                }`
              }
            >
              <GrUserAdmin className='w-5 h-5  ' />

              <span className='mx-4 font-medium'>Profile</span>
            </NavLink>
            {/* logout btn */}
            <button
              onClick={handleLogOut}
              className='flex w-full items-center px-4 py-2  text-faded-pearl text-autumn-ember hover:text-amber-glow'
            >
              <GrLogout className='w-5 h-5  ' />

              <span className='mx-4 font-medium'>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
