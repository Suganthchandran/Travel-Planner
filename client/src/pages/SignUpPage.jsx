import React from 'react';
import '../styles/SignUpPage.css'
import { assets } from '../assets/assets';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {

  return (
    <div className='signup'>
      <div className='signup-container rounded-3xl flex flex-row gap-8 justify-evenly items-center max-h-[770px] max-w-[1200px]'>
        <div className='signup-right w-[450px]'>
          <SignUp redirectUrl="/login" signInUrl="/login" />
        </div>
        <div className='signup-left'>
            <img src={assets.Login} className='h-[770px] signup-image w-[600px] object-cover' />
            <img src={assets.logo2} className='signup-logo'/>
            <p className='signup-p1'>Keep it Special</p>
            <p className='signup-p2'>Travel your dreams</p>
            <div className='overlay'></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
