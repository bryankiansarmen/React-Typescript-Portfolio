import React from "react";
import * as GlobalStyled from "../../global.style";
import * as Styled from "./Card.style";

const Card: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <Styled.CardConatiner>
      <Styled.CardContent>
        <Styled.CardTitle>{title}</Styled.CardTitle>
        <Styled.CardDescription>{description}</Styled.CardDescription>
      </Styled.CardContent>
      <GlobalStyled.Button>Demo</GlobalStyled.Button>
    </Styled.CardConatiner>
  );
};

export default Card;
