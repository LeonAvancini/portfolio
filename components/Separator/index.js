import styled from "styled-components";

const SeparatorStyled = styled.hr`
  width: ${(width) => {
    width;
  }};
  margin: ${(margin) => margin};
`;

export const Separator = ({ width = "80%", margin = "0px" }) => (
  <SeparatorStyled width={width} margin={margin} />
);

export default Separator;
