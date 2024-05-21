//import { Header, Nav, NavList, StyledNavLink } from "./Navigation.style";
import * as Styled from "./Navigation.style";

const NavigationHeader = () => {
  return (
    <Styled.Header>
      <Styled.Nav>
        <Styled.NavList>
          <li>
            <Styled.StyledNavLink to="/" end>
              Home
            </Styled.StyledNavLink>
          </li>
          <li>
            <Styled.StyledNavLink to="/project" end>
              Project
            </Styled.StyledNavLink>
          </li>
          <li>
            <Styled.StyledNavLink to="/about" end>
              About
            </Styled.StyledNavLink>
          </li>
          <li>
            <Styled.StyledNavLink to="/contact" end>
              Contact
            </Styled.StyledNavLink>
          </li>
        </Styled.NavList>
      </Styled.Nav>
    </Styled.Header>
  );
};

export default NavigationHeader;
