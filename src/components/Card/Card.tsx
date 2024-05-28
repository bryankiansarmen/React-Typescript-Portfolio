import React from "react";
import * as Styled from "./Card.style";

type Card = {
  title: string;
  description: string;
};

const Card: React.FC<Card> = ({ title, description }) => {
  return (
    <Styled.CardConatiner>
      <Styled.CardTitle>{title}</Styled.CardTitle>
      <Styled.CardDescription>{description}</Styled.CardDescription>
      <Styled.Link>Demo</Styled.Link>
    </Styled.CardConatiner>
  );
};

export default Card;
