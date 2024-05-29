import * as Styled from "./Footer.style";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.SocialContainer>
        <a href="#">
          <FaSquareGithub />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
        <a href="#">
          <BiLogoGmail />
        </a>
      </Styled.SocialContainer>
      <p>Copyright ©2024, All rights reserved.</p>
    </Styled.Footer>
  );
};

export default Footer;
