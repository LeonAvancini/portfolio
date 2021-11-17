import Link from "next/link";
import styled from "styled-components";
import HomeIcon from "../Container/icons/HomeIcon";
import IconButton from "../IconButton";

const NavBarStyled = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 108px;
  padding: 50px 34px;
`;

const LinkStyled = styled.a`
  cursor: pointer;
  margin: 10px;
`;
export const Navbar = () => {
  return (
    <NavBarStyled>
      <Link href="/">
        <LinkStyled>
          <IconButton>
            <HomeIcon />
          </IconButton>
        </LinkStyled>
      </Link>
      <Link href="/contact">
        <LinkStyled>Contacto</LinkStyled>
      </Link>
      <Link href="/projects">
        <LinkStyled>Proyectos</LinkStyled>
      </Link>
    </NavBarStyled>
  );
};

export default Navbar;
