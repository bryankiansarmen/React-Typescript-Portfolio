import * as GlobalStyled from "../../global.style";
import Card from "../Card/Card";

const Project = () => {
  return (
    <section id="project">
      <GlobalStyled.Container>
        <GlobalStyled.SectionHeader>Project Section</GlobalStyled.SectionHeader>
        <GlobalStyled.SectionContent>
          <Card
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non lorem commodo, lobortis risus volutpat, egestas ligula."
          />
          <Card
            title="Project 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non lorem commodo, lobortis risus volutpat, egestas ligula."
          />
          <Card
            title="Project 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non lorem commodo, lobortis risus volutpat, egestas ligula."
          />
          <Card
            title="Project 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non lorem commodo, lobortis risus volutpat, egestas ligula."
          />
        </GlobalStyled.SectionContent>
      </GlobalStyled.Container>
    </section>
  );
};

export default Project;
