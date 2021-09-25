import React, { useState } from "react";
import styled from "styled-components";

import MediaQuery from "react-responsive";
// import background from "../images/background.jpeg";
import background1 from "../images/com1.jpg";
import background2 from "../images/com2.jpg";
import background3 from "../images/com3.jpg";
import background4 from "../images/com4.jpg";
import background5 from "../images/com5.jpg";
import background6 from "../images/com6.jpg";

export const Tile = () => {
  return (
    <>
      <SNavItem>
        <SContainer1 />
        <SContainer2 />
        <SContainer3 />
        <SContainer4 />
        <SContainer5 />
        <SContainer6 />
      </SNavItem>
    </>
  );
};

const SNavItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 20px;
  text-align: center;
  margin-top: 40px;
  justify-content: space-between;
  margin: 0 calc(10% / 6);
`;

const SContainer1 = styled.div`
  background-image: url(${background1});
  max-width: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100px;
  margin-top: 40px;
  margin-left: 40px;
  flex-grow: 1;
`;
const SContainer2 = styled.div`
  background-image: url(${background2});
  max-width: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100px;
  margin-top: 40px;
  margin-left: 40px;
  flex-grow: 1;
  grid-column: 2/3;
  grid-row: 2/3;
`;
const SContainer3 = styled.div`
  background-image: url(${background3});
  max-width: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100px;
  margin-top: 40px;
  margin-left: 40px;
  flex-grow: 1;
`;
const SContainer4 = styled.div`
  background-image: url(${background4});
  max-width: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100px;
  margin-top: 40px;
  margin-left: 40px;
  flex-grow: 1;
`;
const SContainer5 = styled.div`
  background-image: url(${background5});
  max-width: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100px;
  margin-top: 40px;
  margin-left: 40px;
  flex-grow: 1;
`;
const SContainer6 = styled.div`
  background-image: url(${background6});
  max-width: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100px;
  margin-top: 40px;
  margin-left: 40px;
  flex-grow: 1;
`;
