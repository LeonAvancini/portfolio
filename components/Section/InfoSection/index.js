import styled from "styled-components";

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 30px;
  margin: 15px 0px;
  min-height: 100px;
`;
export const InfoSection = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
);

export default InfoSection;
