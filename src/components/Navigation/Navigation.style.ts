import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  padding: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 0;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  box-sizing: border-box;
  display: inline-block;
  line-height: 1;
  transition: color 0.3s, border-color 0.3s;

  &.active {
    color: var(--color-blue);
    border-color: var(--color-blue);
  }

  &:hover {
    color: var(--color-blue);
    border-color: var(--color-blue);
  }
`;
