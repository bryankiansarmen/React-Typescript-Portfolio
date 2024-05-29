import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ccc;
    border: 1px solid #ccc;
    padding: 0.8rem;
    font-size: 1.25rem;
    border-radius: 100%;
    transition: all 0.3s ease;
  }

  & a:hover {
    color: #fff;
    background-color: #1d4ed8;
    border-color: #1d4ed8;
  }
`;
