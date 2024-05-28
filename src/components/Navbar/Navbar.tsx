import * as Styled from "./Navbar.style";
import { Button } from "../../global.style";

const Navbar = () => {
  return (
    <Styled.NavContainer>
      <Styled.NavBrand>
        <a href="#">Lorem Ipsum</a>
      </Styled.NavBrand>
      <Styled.NavLinks>
        <Styled.Links>
          <a href="#">Home</a>
        </Styled.Links>
        <Styled.Links>
          <a href="#">Project</a>
        </Styled.Links>
        <Styled.Links>
          <a href="#">Experience</a>
        </Styled.Links>
        <Styled.Links>
          <a href="#">About</a>
        </Styled.Links>
      </Styled.NavLinks>
      <Button>Contact</Button>
    </Styled.NavContainer>
  );
};

export default Navbar;
