import * as GlobalStyled from "../../global.style";
import * as Styled from "./About.style";

const About = () => {
  return (
    <section id="about">
      <GlobalStyled.Container>
        <GlobalStyled.SectionHeader>About Section</GlobalStyled.SectionHeader>
        <Styled.ContentWrapper>
          <Styled.ItemWrapper>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus rem eos aliquid quo rerum temporibus ipsum distinctio
            numquam ut omnis placeat, nam sint atque quos dolorem laborum?
            Rerum, esse dolorem.
          </Styled.ItemWrapper>
          <Styled.ItemWrapper>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus rem eos aliquid quo rerum temporibus ipsum distinctio
            numquam ut omnis placeat, nam sint atque quos dolorem laborum?
            Rerum, esse dolorem.
          </Styled.ItemWrapper>
        </Styled.ContentWrapper>
      </GlobalStyled.Container>
    </section>
  );
};

export default About;
