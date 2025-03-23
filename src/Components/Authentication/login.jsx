import { SignIn } from "@clerk/clerk-react";
import React from 'react';
import '../../Styles/Authentication/login.css';

const Login = () => {
  return (
    <>
      <div className="login-container">
      <a href="/" className="Home"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg></a>

        <SignIn></SignIn>
      </div>
    </>
  );
};

export default Login;
