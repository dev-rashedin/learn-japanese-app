import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './../error/ErrorPage';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Register from './../pages/auth/Register';
import PrivateRoute from './PrivateRoute';
import Lessons from '../pages/Lessons';
import Tutorials from './../pages/Tutorials';
import Courses from './../pages/Courses';
import AdminRoute from './AdminRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import AddLesson from '../pages/dashboard/AddLesson';
import AddVocabularies from '../pages/dashboard/AddVocabularies';
import ManageUsers from '../pages/dashboard/ManageUsers';
import VocabularyManagement from '../pages/dashboard/VocabularyManagement';
import AdminLessons from './../pages/dashboard/Lessons';
import SingleVocabularyPage from '../pages/SingleVocabularyPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (        
            <Home />
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/lessons',
        element: (
          <PrivateRoute>
            <Lessons />
          </PrivateRoute>
        ),
      },
      {
        path: '/single-vocabulary/:lessonNumber',
        element: (
          <PrivateRoute>
            <SingleVocabularyPage/>
          </PrivateRoute>
        ),
      },
      {
        path: '/tutorials',
        element: (
          <PrivateRoute>
            <Tutorials />
          </PrivateRoute>
        ),
      },
      {
        path: '/courses',
        element: (
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <AdminRoute>
          <DashboardLayout />
        </AdminRoute>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <AdminRoute>
            <AdminLessons />
          </AdminRoute>
        ),
      },
      {
        path: 'add-lessons',
        element: (
          <AdminRoute>
            <AddLesson />
          </AdminRoute>
        ),
      },
      {
        path: 'add-vocabularies',
        element: (
          <AdminRoute>
          <AddVocabularies />
          </AdminRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <AdminRoute>
         <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: 'vocabulary-management',
        element: (
          <AdminRoute>
     <VocabularyManagement/>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
