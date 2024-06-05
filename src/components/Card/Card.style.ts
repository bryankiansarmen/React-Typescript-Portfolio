import styled from "styled-components";

export const CardConatiner = styled.div`
  padding: 3rem 2rem;
  background-color: #27272a;
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #323232;
    border-color: #fff;
  }

  & Button {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  flex: 1;
  margin-bottom: 2rem;
`;

export const CardTitle = styled.h4`
  margin-bottom: 1rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const CardDescription = styled.p`
  color: #fff;
  margin-bottom: 0.75rem;
`;
