//components
import React from 'react';
import { Login } from './Login';
import { SignUp } from './SignUp';

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Login></Login>
      <SignUp></SignUp>
    </>
  );
};
