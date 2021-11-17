import styled from "styled-components";
import Head from "next/head";
import Section from "../Section";
import Navbar from "../Navbar";
import Info from "../Info";
import InitialContent from "../InitialContent";

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

export const Container = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ContainerStyled>
        <Info />
        <Content>
          <InitialContent />
          <Section>{children}</Section>
        </Content>
        <Navbar />
      </ContainerStyled>
    </>
  );
};

export default Container;
