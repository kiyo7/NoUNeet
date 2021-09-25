import React from 'react';
import styled from 'styled-components';
import profile from '../../images/profile5.jpg';
import { Header } from '../../components/header/Header';
import ProfileMain from './ProfileMain';

export const Profile = () => {
  return (
    <SContainer className="Profile">
      <Header />
      <SProfileMain>
        <ProfileMain />
      </SProfileMain>
    </SContainer>
  );
};
const SContainer = styled.div`
  background-image: url(${profile});
  max-width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

const SProfileMain = styled.div`
  height: 85%;
`;
