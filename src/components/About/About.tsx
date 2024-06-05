import * as GlobalStyled from "../../global.style";
import * as Styled from "./About.style";
import * as Si from "react-icons/si";
import * as Fa from "react-icons/fa";
import * as Ri from "react-icons/ri";

const STACKS_LIST = [
  <Si.SiCsharp />,
  <Si.SiDotnet />,
  <Fa.FaJava />,
  <Si.SiKotlin />,
  <Si.SiKtor />,
  <Si.SiJavascript />,
  <Si.SiTypescript />,
  <Fa.FaNode />,
  <Fa.FaReact />,
  <Ri.RiNextjsFill />,
  <Si.SiPostgresql />,
  <Si.SiMysql />,
  <Si.SiMicrosoftsqlserver />,
  <Si.SiMongodb />,
  <Si.SiFirebase />,
  <Si.SiRedis />,
  <Fa.FaGitAlt />,
  <Fa.FaGithub />,
  <Si.SiDocker />,
  <Si.SiKubernetes />,
];

const About = () => {
  return (
    <section id="about">
      <GlobalStyled.Container>
        <GlobalStyled.SectionHeader>About</GlobalStyled.SectionHeader>
        <Styled.ContentWrapper>
          <Styled.ItemWrapper flex={"1.5"}>
            {STACKS_LIST.map((item, index) => {
              return <Styled.Item key={index}>{item}</Styled.Item>;
            })}
          </Styled.ItemWrapper>
          <Styled.ItemWrapper flex={"1"}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              molestie nisi, sed imperdiet ligula. Nullam fringilla orci in enim
              ullamcorper laoreet. Curabitur est nisl, molestie vel semper et,
              finibus eu lectus. Aliquam ac ipsum iaculis, blandit nulla nec,
              posuere nisi. Aliquam rutrum arcu sed diam dapibus, at viverra leo
              pretium. Suspendisse potenti. Duis luctus ligula sem, vel
              hendrerit neque euismod vel. Aenean a eleifend metus. Mauris at
              tempor tellus, a vehicula arcu. Pellentesque id sagittis magna.
              Phasellus consequat quis nulla vel rutrum. Aliquam a libero urna.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac
              habitasse platea dictumst. Vestibulum a varius nisi, eu varius
              erat.
            </p>
          </Styled.ItemWrapper>
        </Styled.ContentWrapper>
      </GlobalStyled.Container>
    </section>
  );
};

export default About;
