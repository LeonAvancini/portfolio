import styled from "styled-components";
const ButtonStyled = styled.button`
  cursor: pointer;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffb40091;
  transition: all 0.2s ease-out;

  &:hover {
    transition: all 0.2s ease-in;
    background: #ffb400;
  }
`;

export const IconButton = ({ children, onClickHandler }) => {
  return (
    <ButtonStyled onClick={() => console.log("test")}>{children}</ButtonStyled>
  );
};

export default IconButton;
