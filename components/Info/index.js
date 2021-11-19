import styled from "styled-components";
import Separator from "../Separator";
import IconButton from "../IconButton";
import HomeIcon from "../icons/HomeIcon";

const InfoContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 305px;
  padding: 50px 35px;
`;

const ImageContainer = styled.div`
  width: 150px;
  heigth: 150px;
`;
const StyledImage = styled.img`
  border-radius: 50%;
`;
const NameStyled = styled.h3`
  font-family: "Righteous", cursive;
  font-size: 25px;
`;
const PStyled = styled.div`
  color: #767676;
  font-size: 16px;
  text-align: justify;
`;
const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0px;
`;

export const Info = () => {
  return (
    <InfoContainer>
      <ImageContainer>
        <StyledImage
          src="https://picsum.photos/500"
          alt="test"
          width="150px"
          height="150px"
        />
      </ImageContainer>
      <NameStyled>Leon Avancini</NameStyled>
      <PStyled>Front-End Developer</PStyled>
      <SocialMediaContainer>
        <IconButton>
          <HomeIcon />
        </IconButton>
        <IconButton>
          <HomeIcon />
        </IconButton>
        <IconButton>
          <HomeIcon />
        </IconButton>
        <IconButton>
          <HomeIcon />
        </IconButton>
      </SocialMediaContainer>
      <Separator width="100%" margin="25px" />
      <p>Info1</p>
      <Separator width="100%" />
      <p>Info1</p>
      <Separator width="100%" />
      <p>Info1</p>
      <Separator width="100%" />
      <p>Info1</p>
      <p>Info1</p>
      <Separator width="100%" />
      <p>Info1</p>
      <Separator width="100%" />
      <p>Info1</p>
    </InfoContainer>
  );
};

export default Info;
