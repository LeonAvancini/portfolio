import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #ffffff;
  align-items: center;
  width: 970px;
  margin-top: 70px;
`;

const Title = styled.h2``;

export const Section = ({ children, title = "test" }) => {
  return (
    <SectionContainer>
      <Title>title</Title>
      {children}
    </SectionContainer>
  );
};

export default Section;
