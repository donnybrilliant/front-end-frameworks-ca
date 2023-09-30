import { useLocation } from "react-router-dom";
import { Nav, StyledNavLink } from "./Breadcrumbs.styled";

const Breadcrumbs = () => {
  const location = useLocation();
  const stages = [
    { path: "/cart", label: "Cart" },
    { path: "/checkout", label: "Checkout" },
    { path: "/checkout/success", label: "Success" },
  ];

  return (
    <Nav aria-label="breadcrumb">
      {stages.map((stage) => {
        const disabledSuccess =
          stage.path === "/checkout/success" &&
          location.pathname !== "/checkout/success";
        const disabledCheckout =
          location.pathname === "/checkout/success" &&
          stage.path !== "/checkout/success";
        const isSuccess =
          location.pathname === "/checkout/success" &&
          stage.path === "/checkout/success";

        return (
          <StyledNavLink
            key={stage.path}
            to={stage.path}
            className={
              disabledSuccess || disabledCheckout ? "disabled-link" : ""
            }
            end
            onClick={(event) => {
              isSuccess && event.preventDefault();
            }}
          >
            {stage.label}
          </StyledNavLink>
        );
      })}
    </Nav>
  );
};

export default Breadcrumbs;
