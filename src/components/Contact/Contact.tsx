import * as GlobalStyled from "../../global.style";
import * as Styled from "./Contact";

const Contact = () => {
  return (
    <GlobalStyled.Container>
      <section id="contact">
        <GlobalStyled.SectionHeader>Contact Section</GlobalStyled.SectionHeader>
        <Styled.ContentWrapper>
          <Styled.FormWrapper>
            <Styled.FormItemWrapper>
              <label htmlFor="name">Name</label>
              <Styled.Input type="text" placeholder="Enter your name" />
            </Styled.FormItemWrapper>
            <Styled.FormItemWrapper>
              <label htmlFor="email">Email</label>
              <Styled.Input type="text" placeholder="Enter your email" />
            </Styled.FormItemWrapper>
            <Styled.FormItemWrapper>
              <label htmlFor="name">Message</label>
              <Styled.TextArea
                name="message"
                id="messsage"
                placeholder="Enter your message"
              ></Styled.TextArea>
            </Styled.FormItemWrapper>
            <GlobalStyled.Button>Submit</GlobalStyled.Button>
          </Styled.FormWrapper>
        </Styled.ContentWrapper>
      </section>
    </GlobalStyled.Container>
  );
};

export default Contact;
