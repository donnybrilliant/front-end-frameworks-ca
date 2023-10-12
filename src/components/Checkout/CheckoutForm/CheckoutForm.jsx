import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentOptions from "./PaymentOptions/PaymentOptions";
import Button from "../../Button";
import { getTotalPrice } from "../../../utils";

import { StyledForm } from "./CheckoutForm.styled";

const CheckoutForm = ({ cart }) => {
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
  const [coupon, setCoupon] = useState("");
  const [validCoupon, setValidCoupon] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [shippingDiscount, setShippingDiscount] = useState(0);
  const [shippingOption, setShippingOption] = useState("standard");

  const handleCheckboxChange = (e) => {
    setUseSameAddress(e.target.checked);
  };

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
        setCouponDiscount(0.1);
        setValidCoupon(true);
        break;
      case "20OFF":
        setShippingDiscount(0);
        setCouponDiscount(0.2);
        setValidCoupon(true);
        break;
      default:
        setShippingDiscount(0);
        setCouponDiscount(0);
        setValidCoupon(false);
        break;
    }
  };
  const shippingCosts = {
    standard: 5,
    express: 15,
    sameDay: 30,
  };

  const totalPrice = parseFloat(
    getTotalPrice(cart) * (1 - couponDiscount) +
      (shippingCosts[shippingOption] - shippingDiscount)
  ).toFixed(2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    /*     if (name === 'shippingAddress' && useSameAddress) {
      setFormData((prevData) => ({ ...prevData, billingAddress: value }));
    } */
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { formData, cart };
    console.log(data);
    navigate("/checkout/success", { replace: true, state: data });
  };

  const handleShippingChange = (e) => {
    setShippingOption(e.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Your Information</h2>
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
      <PaymentOptions formData={formData} handleChange={handleChange} />
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
      <div>
        <h4>Shipping: ${shippingCosts[shippingOption] - shippingDiscount}</h4>
        <h4>Total Price: ${totalPrice}</h4>
        <Button type="submit" $proceed>
          Submit
        </Button>
      </div>
    </StyledForm>
  );
};

export default CheckoutForm;
