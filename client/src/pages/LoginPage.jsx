import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import '../styles/LoginPage.css'
import { assets } from '../assets/assets';

const LoginPage = () => {

  return (
    <div className='login'>
      <div className='login-container rounded-3xl flex flex-row gap-14 justify-evenly items-center max-h-[770px] max-w-[1200px]'>
        <div className='login-left'>
            <img src={assets.Login} className='h-[770px] login-image w-[600px] object-cover' />
            <img src={assets.logo2} className='login-logo'/>
            <p className='login-p1'>Keep it Special</p>
            <p className='login-p2'>Travel your dreams</p>
            <div className='overlay'></div>
        </div>
        <div className='login-right w-[450px]'>
          <SignIn redirectUrl="http://localhost:3000/home" signUpUrl="/sign-up"  />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
