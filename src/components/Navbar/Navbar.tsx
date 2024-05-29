import * as Styled from "./Navbar.style";

const Navbar = () => {
  return (
    <Styled.FixedNav>
      <Styled.Nav>
        <Styled.NavBrand>
          <a href="#">
            <Styled.BrandWrapper>
              <Styled.IconWrapper>DEV</Styled.IconWrapper>
              <Styled.NameWrapper>KIAN</Styled.NameWrapper>
            </Styled.BrandWrapper>
          </a>
        </Styled.NavBrand>
        <Styled.NavList>
          <Styled.NavItem>
            <a href="#">Home</a>
          </Styled.NavItem>
          <Styled.NavItem>
            <a href="#about">About</a>
          </Styled.NavItem>
          <Styled.NavItem>
            <a href="#project">Project</a>
          </Styled.NavItem>
          <Styled.NavItem>
            <a href="#contact">Contact</a>
          </Styled.NavItem>
        </Styled.NavList>
      </Styled.Nav>
    </Styled.FixedNav>
  );
};

export default Navbar;
