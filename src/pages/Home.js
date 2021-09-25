//components
import React from 'react';
import firebase from "../config/firebase";

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => firebase.auth().signOut()}>ログアウト</button>
    </>
  );
};