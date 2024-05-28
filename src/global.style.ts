import styled from "styled-components";

export const Container = styled.div`
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

export const SectionHeader = styled.h1`
  margin-bottom: 1rem;
  color: #fff;
  text-align: center;
  font-size: 2.25rem;
  font-weight: 600;
`;

export const SectionContent = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;
