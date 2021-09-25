import styled from 'styled-components';

export const CompanyCards = (props) => {
  const { name, image, onClick } = props;

  return (
    <SCard onClick={onClick}>
      <SImage src={image} alt="会社名" />
      <SCompanyTitle>{name}</SCompanyTitle>
    </SCard>
  );
};

const SCard = styled.div`
  width: 300px;
  height: 300px;
`;

const SImage = styled.img`
  border-radius: 20px;
  border: 5px solid #131012;
`;

const SCompanyTitle = styled.h3`
  font-size: 1.24rem;

  font-family: 'Noto Sans JP', sans-serif;
  background-image: linear-gradient(#6d5f65 0%, #544e4e 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
