import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2rem;

  @media (width < 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const HeaderSubTitle = styled.h4`
  margin-bottom: 1rem;
  color: #ccc;
  font-size: 1rem;
  font-weight: 600;
`;

export const HeaderTitle = styled.h1`
  color: #fff;
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: 700;
  line-height: 4rem;

  & span {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #fff;
  }
`;

export const HeaderDescription = styled.p`
  margin-bottom: 2rem;
  color: #ccc;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & img {
    max-width: 600px;
    margin: auto;
  }

  @media (width < 900px) {
    grid-area: 1/1/2/2;
  }

  &::before {
    @media (width < 600px) {
      display: none;
    }
  }
`;

export const SummaryWrapper = styled.div``;
