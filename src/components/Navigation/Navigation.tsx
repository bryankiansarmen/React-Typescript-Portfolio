import { Header, Nav, NavList, StyledNavLink } from "./Navigation.styled";

const NavigationHeader = () => {
  return (
    <Header>
      <Nav>
        <NavList>
          <li>
            <StyledNavLink to="/" end>
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/project" end>
              Project
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about" end>
              About
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contact" end>
              Contact
            </StyledNavLink>
          </li>
        </NavList>
      </Nav>
    </Header>
  );
};

export default NavigationHeader;
