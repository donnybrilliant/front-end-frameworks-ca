import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentOptions from "./PaymentOptions/PaymentOptions";
import Button from "../../ui/Button";
import { getTotalPrice } from "../../../utils";

import { StyledForm, Coupons } from "./CheckoutForm.styled";

// Component to display the checkout form in the Checkout page
const CheckoutForm = ({ cart }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    telephone: "",
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

  const formatExpirationDate = (value) => {
    const cleanValue = value.replace(/[^0-9]/g, "");
    if (cleanValue.length >= 3) {
      const month = cleanValue.slice(0, 2);
      const year = cleanValue.slice(2);
      return `${month}/${year}`;
    }
    return cleanValue;
  };

  const formatCreditCardNumber = (value) => {
    const cleanValue = value.replace(/[^0-9]/g, "");
    const parts = [];
    for (let i = 0; i < cleanValue.length; i += 4) {
      parts.push(cleanValue.slice(i, i + 4));
    }
    return parts.join(" ");
  };

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
    let formattedValue = value;

    if (name === "expirationDate") {
      formattedValue = formatExpirationDate(value);
    } else if (name === "creditCardNumber") {
      formattedValue = formatCreditCardNumber(value);
    }

    setFormData((prevData) => ({ ...prevData, [name]: formattedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new object to hold the final form data
    let finalData = { ...formData };

    // If useSameAddress is true, sync the data right here
    if (useSameAddress) {
      finalData = {
        ...finalData,
        billingAddress: formData.shippingAddress,
        billingCity: formData.shippingCity,
        billingZip: formData.shippingZip,
        billingCountry: formData.shippingCountry,
        billingFirstName: formData.firstName,
        billingLastName: formData.lastName,
      };
    }

    const data = { formData: finalData, cart, totalPrice };
    console.log(data);
    navigate("/checkout/success", { replace: true, state: data });
  };

  const handleShippingChange = (e) => {
    setShippingOption(e.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Your Information</h2>
      <Coupons>
        <p>FREE, 10OFF, 20OFF</p>
      </Coupons>
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
          placeholder="email@domain.com"
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
          placeholder="John"
          min="2"
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
          placeholder="Doe"
          min="2"
          required={!skipRequired}
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="telephone">Telephone:</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          placeholder="+47 123 69 222"
          required={!skipRequired}
          value={formData.telephone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="shippingAddress">Address:</label>
        <input
          type="text"
          id="shippingAddress"
          name="shippingAddress"
          placeholder="123 Main St."
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
          placeholder="Anytown"
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
          placeholder="12345"
          min="2"
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
          placeholder="Any Country"
          min="3"
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
              placeholder="John"
              min="2"
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
              placeholder="Doe"
              min="2"
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
              placeholder="123 Main St."
              min="5"
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
              placeholder="Anytown"
              min="3"
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
              placeholder="12345"
              min="2"
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
              placeholder="Any Country"
              min="2"
              required={!skipRequired}
              value={formData.billingCountry}
              onChange={handleChange}
            />
          </div>
        </>
      )}
      <PaymentOptions
        formData={formData}
        handleChange={handleChange}
        skipRequired={skipRequired}
      />
      <div>
        <label htmlFor="coupon">Coupon Code:</label>
        <input
          type="text"
          id="coupon"
          name="coupon"
          placeholder="Have a look around..."
          value={coupon}
          onChange={handleCouponChange}
          className={validCoupon ? "valid-coupon" : ""}
        />
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
