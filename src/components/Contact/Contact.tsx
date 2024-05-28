import ContentContainer from "../ContentContainer/ContentContainer";

const Contact = () => {
  return (
    <ContentContainer>
      <div style={{ border: "1px solid red" }}>
        <h1>Contact</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Contact;
