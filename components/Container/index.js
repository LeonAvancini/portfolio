import styled from "styled-components";
import Navbar from "../Navbar";
import Info from "../Info";

const ContainerStyled = styled.div`
  background: #e5e5e5;
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
`;
const InitialContent = styled.div`
  background: #ffffff;
  height: 467px;
  width: 970px;
`;

export const Container = ({ children }) => {
  return (
    <ContainerStyled>
      <Info />
      <Content>
        <InitialContent>contenido</InitialContent>
        {children}
      </Content>
      <Navbar />
    </ContainerStyled>
  );
};

export default Container;
