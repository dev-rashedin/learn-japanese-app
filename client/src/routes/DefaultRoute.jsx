import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import useLoadUser from '../hooks/useLoadUser';

const DefaultRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [userData] = useLoadUser();

  {
    console.log('role', userData.role);
  }
  // loading state
  if (loading ) {
    return (
      <div className='text-center flex justify-center items-center min-h-[50vh]'>
        <span className='loading loading-dots loading-md ml-4'></span>
      </div>
    );
  }

  // Redirect to login if user is not authenticated
  if (!user) {
    return <Navigate to='/login' />;
  }

  // Redirect based on user role
  if (userData?.role === 'admin') {
    return <Navigate to='/dashboard' />;
  }
  if (userData?.role === 'user') {
    return <Navigate to='/lessons' />;
  }

  // Render children if no redirection occurs
  return <div>{children}</div>;
};

DefaultRoute.propTypes = {
  children: PropTypes.element,
};

export default DefaultRoute;
