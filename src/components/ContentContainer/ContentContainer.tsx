import React, { ReactNode } from "react";
import * as Styled from "./ContentContainer.style";

type Props = {
  children: ReactNode;
};

const ContentContainer: React.FC<Props> = ({ children }) => {
  return <Styled.DivContainer>{children}</Styled.DivContainer>;
};

export default ContentContainer;
