import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 3rem 2rem;
  border-radius: 15px;
  background-color: #27272a;
  width: 600px;

  & Button {
    width: 100%;
  }
`;

export const FormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & label {
    color: #ffffff;
  }
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  background-color: #27272a;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #1d4ed8;
  }

  &::placeholder {
    color: #888;
  }
`;

export const TextArea = styled.textarea`
  height: 200px;
  padding: 10px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  background-color: #27272a;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #1d4ed8;
  }

  &::placeholder {
    color: #888;
  }
`;
