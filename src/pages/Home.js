import React, { useState, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";

// material-ui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";

//components
import firebase from "../config/firebase";
import { Topbar } from "./Topbar";
import background from "../images/background.jpeg";
import { AuthContext } from "../AuthService";

export const Home = () => {
  const SContainer = styled.div`
    background-image: url(${background});
    max-width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
  `;
  return (
    <>
      <h1>Home</h1>
      <div className="Top">
        <Topbar />

        <button onClick={() => firebase.auth().signOut()}>ログアウト</button>
      </div>
    </>
  );

  return <></>;
};
