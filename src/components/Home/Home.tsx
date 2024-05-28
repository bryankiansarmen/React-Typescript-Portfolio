import * as Styled from "./Home.style";
import * as GlobalStyled from "../../global.style";
import headerImage from "../../assets/api.png";

const Home = () => {
  return (
    <GlobalStyled.Container>
      <section id="home">
      <Styled.Header>
        <div>
          <Styled.HeaderTitle>
            Hi, I'm <span>Kian</span>, Software Engineer
          </Styled.HeaderTitle>
          <Styled.HeaderDescription>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus rem eos aliquid quo rerum temporibus ipsum distinctio
            numquam ut omnis placeat, nam sint atque quos dolorem laborum?
            Rerum, esse dolorem.
          </Styled.HeaderDescription>
          <GlobalStyled.Button>Get Started</GlobalStyled.Button>
        </div>
        <Styled.ImageContainer>
          <img src={headerImage} />
        </Styled.ImageContainer>
      </Styled.Header>
      </section>
    </GlobalStyled.Container>
  );
};

export default Home;
