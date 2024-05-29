import styled from "styled-components";

export const FixedNav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #18181b;
  z-index: 1000;
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: auto;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const NavBrand = styled.div`
  max-width: 500px;

  & a {
    color: #ffffff;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const NavItem = styled.li`
  position: relative;
  padding-bottom: 0.75rem;
  color: #ffffff;

  & a {
    position: relative;
    padding-bottom: 0.75rem;
    color: #ffffff;
  }

  & a::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 0;
    bottom: 0;
    left: 0;
    background-color: #1d4ed8;
    transition: all 0.3s ease;
  }

  & a:hover::after {
    width: 80%;
  }
`;
