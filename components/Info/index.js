import Link from "next/link";
import styled from "styled-components";

const InfoContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 305px;
  padding: 50px 45px;
`;

export const Info = () => {
  return (
    <InfoContainer>
      <p>Info1</p>
      <p>Info1</p>
      <p>Info1</p>
      <p>Info1</p>
      <p>Info1</p>
      <p>Info1</p>
      <p>Info1</p>
      <p>Info1</p>
      <p>Info1</p>
      <p>Info1</p>
    </InfoContainer>
  );
};

export default Info;
