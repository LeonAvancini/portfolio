import styled from "styled-components";
import Navbar from "../Navbar";
import Info from "../Info";

const ContainerStyled = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 30px;
  border: 1px solid orange;
`;

export const Container = ({ children }) => {
  return (
    <ContainerStyled>
      <Info />
      <Content>{children}</Content>
      <Navbar />
    </ContainerStyled>
  );
};

export default Container;
