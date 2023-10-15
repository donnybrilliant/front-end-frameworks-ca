import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTotalPrice } from "../../../utils";
import PaymentOptions from "./PaymentOptions";
import Button from "../../ui/Button";
import { StyledForm, Coupons } from "./styled";

// Initial state for form data
const initialFormData = {
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
  paymentOption: "",
  creditCardNumber: "",
  expirationDate: "",
  cvv: "",
  coupon: "",
  shippingOption: "",
};

// Object to hold the shipping costs
const shippingCosts = {
  standard: 5,
  express: 15,
  sameDay: 30,
};

// Function to calculate discounts
const calculateDiscounts = (couponValue, shippingOption) => {
  let isValidCoupon = false;
  let newShippingDiscount = 0;
  let newCouponDiscount = 0;

  switch (couponValue) {
    case "FREE":
      newShippingDiscount = shippingCosts[shippingOption];
      isValidCoupon = true;
      break;
    case "10OFF":
      newCouponDiscount = 0.1;
      isValidCoupon = true;
      break;
    case "20OFF":
      newCouponDiscount = 0.2;
      isValidCoupon = true;
      break;
    default:
      break;
  }

  return { isValidCoupon, newShippingDiscount, newCouponDiscount };
};

// Component to display the checkout form in the Checkout page
const CheckoutForm = ({ cart }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);

  const [skipRequired, setSkipRequired] = useState(false);
  const [useSameAddress, setUseSameAddress] = useState(true);
  const [coupon, setCoupon] = useState("");
  const [validCoupon, setValidCoupon] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [shippingDiscount, setShippingDiscount] = useState(0);
  const [shippingOption, setShippingOption] = useState("standard");

  // Update formData with the coupon on change
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      coupon: validCoupon ? coupon : "",
    }));
  }, [validCoupon, coupon]);

  // Function to handle the coupon change
  const handleCouponChange = (e) => {
    const couponValue = e.target.value;
    setCoupon(couponValue); // Update the coupon state
    const { isValidCoupon, newShippingDiscount, newCouponDiscount } =
      calculateDiscounts(couponValue, shippingOption);
    setShippingDiscount(newShippingDiscount);
    setCouponDiscount(newCouponDiscount);
    setValidCoupon(isValidCoupon);
  };

  // Function to handle the checkbox change
  const handleCheckboxChange = (e) => {
    setUseSameAddress(e.target.checked);
  };

  // Function to handle the shipping option change
  const handleShippingChange = (e) => {
    const selectedShippingOption = e.target.value;
    setShippingOption(selectedShippingOption);
    setFormData((prevData) => ({
      ...prevData,
      shippingOption: selectedShippingOption,
    }));

    // Re-calculate discounts if coupon is 'FREE'
    if (coupon === "FREE") {
      const { newShippingDiscount } = calculateDiscounts(
        coupon,
        selectedShippingOption
      );
      setShippingDiscount(newShippingDiscount);
    } else {
      // Reset the shipping discount if the coupon is not 'FREE'
      setShippingDiscount(0);
    }
  };

  // Function to handle the form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Calculate the total price
  const totalPrice = parseFloat(
    getTotalPrice(cart) * (1 - couponDiscount) +
      (shippingCosts[shippingOption] - shippingDiscount)
  ).toFixed(2);

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new object to hold the final form data
    let finalData = { ...formData };

    // If useSameAddress is true, sync the data with the shipping address
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
          minLength="3"
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
          minLength="2"
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
          minLength="3"
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
              minLength="2"
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
              minLength="2"
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
              minLength="5"
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
              minLength="3"
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
              minLength="2"
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
              minLength="2"
              required={!skipRequired}
              value={formData.billingCountry}
              onChange={handleChange}
            />
          </div>
        </>
      )}
      <PaymentOptions
        formData={formData}
        setFormData={setFormData}
        skipRequired={skipRequired}
      />
      <div>
        <label htmlFor="coupon">Coupon Code:</label>
        <input
          type="text"
          id="coupon"
          name="coupon"
          placeholder="Have a look around..."
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
