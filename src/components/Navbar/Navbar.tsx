import * as Styled from "./Navbar.style";
import { Button } from "../../global.style";

const Navbar = () => {
  return (
    <Styled.FixedNav>
      <Styled.Nav>
        <Styled.NavBrand>
          <a href="#">Lorem Ipsum</a>
        </Styled.NavBrand>
        <Styled.NavList>
          <Styled.NavItem>
            <a href="#">Home</a>
          </Styled.NavItem>
          <Styled.NavItem>
            <a href="#project">Project</a>
          </Styled.NavItem>
          <Styled.NavItem>
            <a href="#">Experience</a>
          </Styled.NavItem>
          <Styled.NavItem>
            <a href="#">About</a>
          </Styled.NavItem>
        </Styled.NavList>
        <Button>Contact</Button>
      </Styled.Nav>
    </Styled.FixedNav>
  );
};

export default Navbar;
