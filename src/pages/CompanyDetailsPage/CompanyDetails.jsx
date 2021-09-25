import styled from 'styled-components';

import { Layout } from 'antd';

import { Header } from '../../components/header/Header';
import { PrimaryButton } from '../../components/button/PrimaryButton';

import sample from '../../images/sampleCompany.png';

export const CompanyDetailPage = (props) => {
  const { company } = props;

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
              {/* stateで渡された情報が入る .nameのような感じ */}
              <h2 style={{ textAlign: 'center' }}>00会社</h2>
            </header>

            <p>
              {/* stateで渡された情報が入る company.descriptionのような感じ */}
              企業説明テキスト企業説明テキスト企業説明テキスト企業説明テキスト
              企業説明テキスト 企業説明テキスト 企業説明テキスト
              企業説明テキスト 企業説明テキスト 企業説明テキスト
              企業説明テキスト 企業説明テキスト 企業説明テキスト
              企業説明テキスト 企業説明テキスト{' '}
              企業説明テキスト企業説明テキスト企業説明テキスト企業説明テキスト
              企業説明テキスト 企業説明テキスト 企業説明テキスト
              企業説明テキスト 企業説明テキスト 企業説明テキスト
              企業説明テキスト 企業説明テキスト{' '}
              企業説明テキスト企業説明テキスト企業説明テキスト企業説明テキスト
              企業説明テキスト 企業説明テキスト 企業説明テキスト
              企業説明テキスト 企業説明テキスト 企業説明テキスト
              企業説明テキスト 企業説明テキスト 企業説明テキスト
              企業説明テキスト 企業説明テキスト
            </p>
            <p>企業のHP: http:google.com{/* 企業のHP company.website */}</p>

            <h1 style={{ fontSize: '4rem' }}>関連企業一覧</h1>
          </SArticle>

          <SAside>
            <SSideContentsWrapper>
              <SImageWrapper>
                <SImage src={sample} alt="aaaa" />
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
  background-color: black;
  width: 100%;
  height: 400px;
  background-image: url(${sample});
  background-size: cover;
  border-radius: 30px;
`;

const SImage = styled.image`
  width: 100%;
  height: 100%;
`;

const SButtonWrapper = styled.div`
  text-align: center;
  margin-top: 3%;
`;

const SButtonMargin = styled.div`
  margin-top: 5%;
`;
