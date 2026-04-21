import {  Link } from 'react-router-dom';
import Button from '../components/Button';
import Lottie from 'lottie-react';
import Animation from '../assets/Animation.json'



const ErrorPage = () => {
  return (
    <div className='min-h-screen border flex flex-col justify-center items-center '>
      <Lottie
        animationData={Animation}
        style={{height: '300px'}}
      />
      <Link to='/lessons' refresh='true'>
        <Button label='Go to Lessons' type='primary'></Button>
      </Link>
    </div>
  );
};


export default ErrorPage;
