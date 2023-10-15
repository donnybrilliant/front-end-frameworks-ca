import { useLocation } from "react-router-dom";
import ButtonLink from "../ButtonLink";
import { Nav } from "./styled";

// Component to display the breadcrumbs in the Cart - Checkout page
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
          <ButtonLink
            key={stage.path}
            to={stage.path}
            className={
              disabledSuccess || disabledCheckout ? "disabled-link" : ""
            }
            end
            onClick={(e) => {
              isSuccess && e.preventDefault();
            }}
            $nav
          >
            {stage.label}
          </ButtonLink>
        );
      })}
    </Nav>
  );
};

export default Breadcrumbs;
