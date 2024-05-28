import styled from "styled-components";

export const CardConatiner = styled.div`
  cursor: pointer;
  background-color: #27272a;
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #323232;
    border-color: #fff;
  }
`;

export const CardTitle = styled.h4`
  margin-bottom: 0.5rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const CardDescription = styled.p`
  color: #ccc;
  margin-bottom: 1rem;
`;

export const Link = styled.a`
  cursor: pointer;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    color: #1e40af;
  }
`;
