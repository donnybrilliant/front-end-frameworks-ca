import Slider from "./Slider";
import Toggle from "./Toggle";
import { FooterContainer, Copyright, ThemeControls } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        <a href="https://vierweb.no" target="_blank">
          vierweb
        </a>
        &copy;
        {new Date().getFullYear()}
      </Copyright>
      <ThemeControls>
        <Slider />
        <Toggle />
      </ThemeControls>
    </FooterContainer>
  );
};

export default Footer;
