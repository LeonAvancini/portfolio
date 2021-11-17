import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background: #ffffff;
  height: 467px;
  width: 100%;
  max-width: 970px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  flex-grow: 2;
  margin: auto 40px;
  max-width: 500px;
`;

const H1Styled = styled.h1`
  margin: 1px;
  color: ${({ color }) => color ?? "#000000"};
  white-space: pre;
  font-size: 50px;
  font-weight: bold;
  font-family: "Righteous", cursive;
`;

const PStyled = styled.div`
  margin-top: 30px;
  max-width: 424px;
  color: #767676;
  font-size: 16px;
  text-align: justify;
`;

export const InitialContent = () => {
  return (
    <Container>
      <TextContainer>
        <H1Styled>Leon Avancini</H1Styled>
        <H1Styled color="#FFB400">Front-end </H1Styled>
        <H1Styled>Developer</H1Styled>
        <PStyled>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
          imperdiet arcu, et cursus lectus. Curabitur efficitur, odio sit amet
          porta consequat, dolor massa hendrerit mi, in dapibus nulla sem at
          sem.
        </PStyled>
      </TextContainer>
      <ImageContainer>
        <img src="https://picsum.photos/390" alt="test" />
      </ImageContainer>
    </Container>
  );
};

export default InitialContent;
