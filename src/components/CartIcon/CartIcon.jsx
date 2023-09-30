import { Link } from "react-router-dom";
import { StyledButton, StyledCount } from "./CartIcon.styled";

const CartIcon = () => {
  return (
    <div>
      <Link to="/cart" title="Go to Shopping cart">
        <StyledButton>
          <StyledCount>0</StyledCount>
        </StyledButton>
      </Link>
    </div>
  );
};

export default CartIcon;
