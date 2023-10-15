import { StyledLink, StyledNavLink } from "./styled";

// Component to render a link styled as a button
const ButtonLink = ({ $nav, ...props }) => {
  const Component = $nav ? StyledNavLink : StyledLink;
  return <Component {...props}>{props.children}</Component>;
};

export default ButtonLink;
