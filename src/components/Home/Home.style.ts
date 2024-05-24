import styled from "styled-components";

export const DivContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 2%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid red;
`;

export const ImageDivContainer = styled.div`
  border: 1px solid green;
`;

export const SpanTextContainer = styled.div`
  text-align: justify;
  box-sizing: border-box;
  padding: 50px;
  border: 1px solid green;
  width: 500px;
  & h1 {
    text-align: center;
    border: 1px solid blue;
  }
`;

export const SAmplediv = styled.div`
  padding: 10px;
`;
