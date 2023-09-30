import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTotalPrice } from "../../utils";
import Breadcrumbs from "../../components/Breadcrumbs";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { StyledForm, StyledLi } from "./Checkout.styled";

const Checkout = ({ cart }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    shippingAddress: "",
    shippingCity: "",
    shippingZip: "",
    shippingCountry: "",
    billingFirstName: "",
    billingLastName: "",
    billingAddress: "",
    billingCity: "",
    billingZip: "",
    billingCountry: "",
    creditCardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [skipRequired, setSkipRequired] = useState(false);

  const [useSameAddress, setUseSameAddress] = useState(true);

  const handleCheckboxChange = (e) => {
    setUseSameAddress(e.target.checked);
  };

  const [shippingOption, setShippingOption] = useState("standard");

  const shippingCosts = {
    standard: 5,
    express: 15,
    sameDay: 30,
  };

  const coupons = ["FREE", "10OFF", "20OFF"];
  const [couponDiscount, setCouponDiscount] = useState(0);

  const [coupon, setCoupon] = useState("");

  const [shippingDiscount, setShippingDiscount] = useState(0);
  const [validCoupon, setValidCoupon] = useState(false);

  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleCouponChange = (e) => {
    const coupon = e.target.value;
    setCoupon(coupon);

    // should be based on coupons array instead
    switch (coupon) {
      case "FREE":
        setShippingDiscount(shippingCosts[shippingOption]);
        setCouponDiscount(0);
        setValidCoupon(true);
        break;
      case "10OFF":
        setShippingDiscount(0);
        setCouponDiscount(0.1); // 10% discount
        setValidCoupon(true);
        break;
      case "20OFF":
        setShippingDiscount(0);
        setCouponDiscount(0.2); // 20% discount
        setValidCoupon(true);
        break;
      default:
        setShippingDiscount(0);
        setCouponDiscount(0);
        setValidCoupon(false);
        break;
    }
  };

  const totalPrice = parseFloat(
    getTotalPrice(cart) * (1 - couponDiscount) +
      (shippingCosts[shippingOption] - shippingDiscount)
  ).toFixed(2);

  //const totalPrice = ((getTotalPrice(cart) + shippingCosts[shippingOption]) * (1 - couponDiscount)).toFixed(2);

  const handleShippingChange = (e) => {
    setShippingOption(e.target.value);
  };

  useEffect(() => {
    if (!cart || cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    /*     if (name === 'shippingAddress' && useSameAddress) {
      setFormData((prevData) => ({ ...prevData, billingAddress: value }));
    } */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can process the form data, e.g., submit it to a server
    const data = { formData, cart };
    console.log(data);
    navigate("/checkout/success", { replace: true, state: data });
  };

  return (
    <main>
      <Breadcrumbs />
      <h1>Checkout</h1>
      <h2>Order Summary</h2>
      <ul>
        {cart.map((product) => (
          <StyledLi key={product.id}>
            <h3>
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </h3>
            <p>Price: {product.discountedPrice}</p>
            <p>Quantity: {product.quantity}</p>
          </StyledLi>
        ))}
      </ul>
      <p>
        <b>Total Price: {getTotalPrice(cart)}</b>
      </p>

      <StyledForm onSubmit={handleSubmit}>
        <h3>Information</h3>
        <div>
          <label htmlFor="skipRequired">
            <input
              type="checkbox"
              id="skipRequired"
              checked={skipRequired}
              onChange={() => setSkipRequired((prevState) => !prevState)}
            />
            Skip Required Fields
          </label>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required={!skipRequired}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required={!skipRequired}
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required={!skipRequired}
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="shippingAddress">Address:</label>
          <input
            type="text"
            id="shippingAddress"
            name="shippingAddress"
            required={!skipRequired}
            value={formData.shippingAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="shippingCity">City:</label>
          <input
            type="text"
            id="shippingCity"
            name="shippingCity"
            required={!skipRequired}
            value={formData.shippingCity}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="shippingZip">Zip Code:</label>
          <input
            type="text"
            id="shippingZip"
            name="shippingZip"
            required={!skipRequired}
            value={formData.shippingZip}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="shippingCountry">Country:</label>
          <input
            type="text"
            id="shippingCountry"
            name="shippingCountry"
            required={!skipRequired}
            value={formData.shippingCountry}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="useSameAddress">
            <input
              type="checkbox"
              id="useSameAddress"
              checked={useSameAddress}
              onChange={handleCheckboxChange}
            />
            Use same address for billing
          </label>
        </div>
        {!useSameAddress && (
          <>
            <div>
              <label htmlFor="billingFirstName">First Name:</label>
              <input
                type="text"
                id="billingFirstName"
                name="billingFirstName"
                required={!skipRequired}
                value={formData.billingFirstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="billingLastName">Last Name:</label>
              <input
                type="text"
                id="billingLastName"
                name="billingLastName"
                required={!skipRequired}
                value={formData.billingLastName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="billingAddress">Address:</label>
              <input
                type="text"
                id="billingAddress"
                name="billingAddress"
                required={!skipRequired}
                value={formData.billingAddress}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="billingCity">City:</label>
              <input
                type="text"
                id="billingCity"
                name="billingCity"
                required={!skipRequired}
                value={formData.billingCity}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="billingZip">Zip Code:</label>
              <input
                type="text"
                id="billingZip"
                name="billingZip"
                required={!skipRequired}
                value={formData.billingZip}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="billingCountry">Country:</label>
              <input
                type="text"
                id="billingCountry"
                name="billingCountry"
                required={!skipRequired}
                value={formData.billingCountry}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        <div className="payment-icons">
          <input
            type="radio"
            id="visa"
            name="paymentOption"
            value="Visa"
            onChange={() => setSelectedPayment("Visa")}
          />
          <label htmlFor="visa">
            <i className="fa-brands fa-cc-visa"></i>
          </label>

          <input
            type="radio"
            id="applePay"
            name="paymentOption"
            value="Apple Pay"
            onChange={() => setSelectedPayment("Apple Pay")}
          />
          <label htmlFor="applePay">
            <i className="fab fa-apple-pay"></i>
          </label>

          <input
            type="radio"
            id="googlePay"
            name="paymentOption"
            value="Google Pay"
            onChange={() => setSelectedPayment("Google Pay")}
          />
          <label htmlFor="googlePay">
            <i className="fab fa-google-pay"></i>
          </label>

          <input
            type="radio"
            id="paypal"
            name="paymentOption"
            value="PayPal"
            onChange={() => setSelectedPayment("PayPal")}
          />
          <label htmlFor="paypal">
            <i className="fab fa-paypal"></i>
          </label>

          <input
            type="radio"
            id="bitcoin"
            name="paymentOption"
            value="BitCoin"
            onChange={() => setSelectedPayment("BitCoin")}
          />
          <label htmlFor="bitcoin">
            <i className="fab fa-bitcoin"></i>
          </label>
        </div>

        <div className="payment-details">
          {selectedPayment === "Visa" && (
            <>
              <div>
                <label htmlFor="creditCardNumber">Card Number:</label>
                <input
                  type="text"
                  id="creditCardNumber"
                  name="creditCardNumber"
                  required={!skipRequired}
                  value={formData.creditCardNumber}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="expirationDate">Expiration Date:</label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  required={!skipRequired}
                  value={formData.expirationDate}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="cvv">CVV:</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  required={!skipRequired}
                  value={formData.cvv}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {(selectedPayment === "Apple Pay" ||
            selectedPayment === "Google Pay" ||
            selectedPayment === "PayPal" ||
            selectedPayment === "BitCoin") && (
            <div>
              <Link to="#">Click here to login to {selectedPayment}</Link>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="coupon">Coupon Code:</label>
          <input
            type="text"
            id="coupon"
            name="coupon"
            value={coupon}
            onChange={handleCouponChange}
          />
          {validCoupon && (
            <span role="img" aria-label="checkmark">
              ✔️
            </span>
          )}
        </div>

        <div>
          <label htmlFor="shippingOption">Shipping Option:</label>
          <select
            id="shippingOption"
            name="shippingOption"
            required
            value={shippingOption}
            onChange={handleShippingChange}
          >
            {Object.keys(shippingCosts).map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)} - $
                {shippingCosts[option]}
              </option>
            ))}
          </select>
        </div>

        <p>Shipping: ${shippingCosts[shippingOption] - shippingDiscount}</p>

        <h4>Total Price: ${totalPrice}</h4>
        <Button type="submit">Submit</Button>
      </StyledForm>
    </main>
  );
};

export default Checkout;
