import { StyledLink, StyledNavLink } from "./ButtonLink.styled";

const ButtonLink = ({ $nav, ...props }) => {
  const Component = $nav ? StyledNavLink : StyledLink;
  return <Component {...props}>{props.children}</Component>;
};

export default ButtonLink;
