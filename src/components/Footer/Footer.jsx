import Toggle from "../Toggle";
import { FooterContainer, Copyright } from "./Footer.styled";

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
      <Toggle />
    </FooterContainer>
  );
};

export default Footer;
