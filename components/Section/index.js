import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 970px;

  margin-top: 70px;
`;
const SectionChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #ffffff;
  align-items: center;
  width: 100%;
  heigth: 100%;
  padding: 14px 47px;
`;

const Title = styled.h2`
  font-family: "Shippori Antique", sans-serif;
  font-weight: bold;
  font-size: 32px;
`;

export const Section = ({ children, title = "test" }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      <SectionChild>{children}</SectionChild>
    </SectionContainer>
  );
};

export default Section;
