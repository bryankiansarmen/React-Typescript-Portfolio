import * as Styled from "./Home.style";

const Home = () => {
  return (
    <Styled.DivContainer>
      <Styled.ContentContainer>
        <Styled.ImageDivContainer>
          <img
            src="https://media.istockphoto.com/id/1335020254/vector/blue-lightning-hit-effect-on-black-background.jpg?s=612x612&w=0&k=20&c=QcrbiX28soWhme64koVvaLruLt-2obap8ZbwNfoE9pQ="
            alt="Animated cartoon lighting"
            width={500}
            height={500}
          />
        </Styled.ImageDivContainer>
        <Styled.SpanTextContainer>
          <h1>Home Page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            leo ut ante gravida eleifend. Suspendisse potenti. Nam dapibus
            tellus et dolor egestas, eu euismod nunc sollicitudin. Mauris eget
            nisl sapien. Aenean et sodales tortor. Aenean nec urna vel felis
            imperdiet faucibus ut eget libero. Phasellus nisl sapien, pulvinar
            vitae lacinia quis, finibus eget metus. Nam volutpat odio malesuada
            tellus sollicitudin, ac sollicitudin ipsum rutrum. Aenean dignissim,
            sem ac accumsan malesuada, ex nisi ullamcorper mauris, et mattis
            lorem arcu at orci. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas.
          </p>
        </Styled.SpanTextContainer>
      </Styled.ContentContainer>
      <Styled.SAmplediv>sasasa</Styled.SAmplediv>
    </Styled.DivContainer>
  );
};

export default Home;
