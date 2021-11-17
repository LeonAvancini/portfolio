import Link from "next/link";
import styled from "styled-components";
import HomeIcon from "../icons/HomeIcon";
import PortfolioIcon from "../icons/PortfolioIcon";
import ServicesIcon from "../icons/ServicesIcon";
import IconButton from "../IconButton";
import CvIcon from "../icons/CvIcon";

const NavBarStyled = styled.div`
  background: white;
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
        <LinkStyled>
          <IconButton>
            <PortfolioIcon />
          </IconButton>
        </LinkStyled>
      </Link>
      <Link href="/projects">
        <LinkStyled>
          <IconButton>
            <ServicesIcon />
          </IconButton>
        </LinkStyled>
      </Link>
      <Link href="/projects">
        <LinkStyled>
          <IconButton>
            <CvIcon />
          </IconButton>
        </LinkStyled>
      </Link>
    </NavBarStyled>
  );
};

export default Navbar;
