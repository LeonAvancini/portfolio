import styled from "styled-components";
import Head from "next/head";
import Navbar from "../Navbar";
import Info from "../Info";
import InitialContent from "../InitialContent";

const ContainerStyled = styled.div`
  background: #e5e5e5;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding-bottom: 40px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 30px;
`;

export const Container = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&family=Shippori+Antique&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ContainerStyled>
        <Info />
        <Content>
          <InitialContent />
          {children}
        </Content>
        <Navbar />
      </ContainerStyled>
    </>
  );
};

export default Container;
