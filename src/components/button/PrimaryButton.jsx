import styled from "styled-components";

export const PrimaryButton = (props) => {
  const { width = "300px", height = "130px", onClick, children } = props;
  return (
    <>
      <SButton
        style={{ width: `${width}`, height: `${height}`, margin: `20px` }}
        onClick={onClick}
      >
        {children}
      </SButton>
    </>
  );
};

const SButton = styled.button`
  font-size: 2rem;
  color: #fff;
  background-color: tomato;
  border-radius: 40px;
  outline: none;
`;
