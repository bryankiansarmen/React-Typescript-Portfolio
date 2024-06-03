import * as GlobalStyled from "../../global.style";
import * as Styled from "./About.style";
import * as Si from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <GlobalStyled.Container>
        <GlobalStyled.SectionHeader>About Section</GlobalStyled.SectionHeader>
        <Styled.ContentWrapper>
          <Styled.ItemWrapper>
            <Styled.Item>
              <Si.SiCsharp />
            </Styled.Item>
            <Styled.Item>
              <Si.SiDotnet />
            </Styled.Item>
            <Styled.Item>
              <Si.SiKotlin />
            </Styled.Item>
            <Styled.Item>
              <Si.SiKtor />
            </Styled.Item>
            <Styled.Item>
              <Si.SiPostgresql />
            </Styled.Item>
            <Styled.Item>
              <Si.SiMysql />
            </Styled.Item>
            <Styled.Item>
              <Si.SiMicrosoftsqlserver />
            </Styled.Item>
            <Styled.Item>
              <Si.SiJavascript />
            </Styled.Item>
            <Styled.Item>
              <Si.SiTypescript />
            </Styled.Item>
            <Styled.Item>
              <Si.SiNodedotjs />
            </Styled.Item>
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
