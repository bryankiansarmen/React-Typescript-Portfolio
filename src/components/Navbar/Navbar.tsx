import * as Styled from "./Navbar.style";

const Navbar = () => {
  console.log("Navbar");
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
      <Styled.NavButton>Contact</Styled.NavButton>
    </Styled.NavContainer>
  );
};

export default Navbar;
