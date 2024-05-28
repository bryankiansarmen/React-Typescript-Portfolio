import styled from "styled-components";

export const Container = styled.header`
  max-width: 1200px;
  margin: auto;
  padding: 5rem 2rem;
`;

export const Blur = styled.span`
  position: absolute;
  box-shadow: 0 0 1000px 50px #1d4ed8;
  z-index: -100;
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #1d4ed8;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1e40af;
  }
`;
