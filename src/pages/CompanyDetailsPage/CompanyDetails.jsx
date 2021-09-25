import styled from 'styled-components';

import { Layout } from 'antd';

import { useLocation, useParams } from 'react-router-dom';

import { Header } from '../../components/header/Header';
import { PrimaryButton } from '../../components/button/PrimaryButton';

export const CompanyDetailPage = () => {
  const location = useLocation();

  const { id } = useParams();

  const log = () => console.log('MapBoxへ');
  const chat = () => console.log('chatpageへ');
  return (
    <Layout>
      <Header />
      <STitleWrapper>
        <SPageTitle>企業詳細ページ</SPageTitle>
      </STitleWrapper>

      <SCompanyDetailWrapper>
        <SMainContents>
          <SArticle>
            <header>
              <h2 style={{ textAlign: 'center' }}>
                {location.state.state[id - 1].name}
              </h2>
            </header>

            <p> {location.state.state[id - 1].description} </p>
            <p>企業のHP: {location.state.state[id - 1].url}</p>

            <h1 style={{ fontSize: '3rem' }}>関連企業</h1>
            <h3>Coming Soon...</h3>
          </SArticle>

          <SAside>
            <SSideContentsWrapper>
              <SImageWrapper>
                <SImage src={location.state.state[id - 1].image} alt="aaaa" />
              </SImageWrapper>
              <SButtonWrapper>
                <SButtonMargin>
                  <PrimaryButton onClick={log}>企業の場所を見る</PrimaryButton>
                </SButtonMargin>
                <SButtonMargin>
                  <PrimaryButton onClick={chat}>企業と話す</PrimaryButton>
                </SButtonMargin>
              </SButtonWrapper>
            </SSideContentsWrapper>
          </SAside>
        </SMainContents>
      </SCompanyDetailWrapper>
    </Layout>
  );
};

const SCompanyDetailWrapper = styled.div``;

const STitleWrapper = styled.div`
  text-align: center;
`;

const SPageTitle = styled.h3`
  font-size: 1.5rem;
`;

const SMainContents = styled.div`
  margin-bottom: 70px;
  padding: 2% 6%;
  display: flex;
  justify-content: space-between;
`;

const SArticle = styled.article`
  width: 58%;
`;

const SSideContentsWrapper = styled.div``;

const SAside = styled.aside`
  width: 40%;
`;

const SImageWrapper = styled.div`
  /* background-color: black; */
  width: 100%;
  height: 400px;

  background-size: cover;
`;

const SImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;

const SButtonWrapper = styled.div`
  text-align: center;
  margin-top: 3%;
`;

const SButtonMargin = styled.div`
  margin-top: 5%;
`;
