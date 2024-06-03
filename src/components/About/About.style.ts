import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  height: 500px;
  border: 1px solid red;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  border: 1px solid red;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #27272a;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 50px;
`;
