import {
  Container,
  HeroText,
  HeroImage,
  InnerContainer,
} from "../styles/styled-components";
import illustrationWork from '../assets/illustration-working.svg';

const Hero = () => {
  return (
    <Container>
      <InnerContainer>
        <HeroText>
          <h1>Simply shortened links</h1>
          <h3>Transform long, complex URLs into short and manageable links that are perfect for sharing on anywhere.</h3>
        </HeroText>
        <HeroImage>
          <img src={illustrationWork} alt="hero" />
        </HeroImage>
      </InnerContainer>
    </Container>
  );
};

export default Hero;
