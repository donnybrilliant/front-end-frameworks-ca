import Toggle from "../Toggle";
import { FooterContainer } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <a href="https://vierweb.no" target="_blank">
          vierweb
        </a>
        &copy;
        {new Date().getFullYear()}
      </div>
    </FooterContainer>
  );
};

export default Footer;
