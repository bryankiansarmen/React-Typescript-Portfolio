import styled from "styled-components";

type ItemWrapperProps = {
  flex: string;
};

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: #ffffff;
`;

export const ItemWrapper = styled.div<ItemWrapperProps>`
  flex: ${(props) => props.flex};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  width: 500px;
  text-indent: 20px;
  text-align: justify;
  line-height: 25px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #27272a;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  font-size: 50px;
`;
