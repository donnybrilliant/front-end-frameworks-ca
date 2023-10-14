import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faApplePay,
  faGooglePay,
  faPaypal,
  faBitcoin,
} from "@fortawesome/free-brands-svg-icons";
import { PaymentIcons, PaymentLoginContainer } from "./PaymentOptions.styled";

// Component to display the payment options in the Checkout page
const PaymentOptions = ({ formData, setFormData, skipRequired }) => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Function to format and add / to the expiration date
  const formatExpirationDate = (value) => {
    const cleanValue = value.replace(/[^0-9]/g, "");
    if (cleanValue.length >= 3) {
      const month = cleanValue.slice(0, 2);
      const year = cleanValue.slice(2);
      return `${month}/${year}`;
    }
    return cleanValue;
  };

  // Function to format the credit card number
  const formatCreditCardNumber = (value) => {
    const cleanValue = value.replace(/[^0-9]/g, "");
    const parts = [];
    for (let i = 0; i < cleanValue.length; i += 4) {
      parts.push(cleanValue.slice(i, i + 4));
    }
    return parts.join(" ");
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Function to format the credit card number
    if (name === "expirationDate") {
      formattedValue = formatExpirationDate(value);
      // Function to format the expiration date
    } else if (name === "creditCardNumber") {
      formattedValue = formatCreditCardNumber(value);
    }
    // Update formData with the selected payment option and card details
    setFormData((prevData) => ({ ...prevData, [name]: formattedValue }));
    // Update selectedPayment if the payment option has changed
    if (name === "paymentOption") {
      setSelectedPayment(value);
    }
  };

  return (
    <>
      <PaymentIcons>
        <input
          type="radio"
          id="visa"
          name="paymentOption"
          value="Visa"
          required={!skipRequired}
          onChange={handlePaymentChange}
        />
        <label htmlFor="visa">
          <FontAwesomeIcon icon={faCcVisa} />
        </label>
        <input
          type="radio"
          id="applePay"
          name="paymentOption"
          value="Apple Pay"
          onChange={handlePaymentChange}
        />
        <label htmlFor="applePay">
          <FontAwesomeIcon icon={faApplePay} />
        </label>
        <input
          type="radio"
          id="googlePay"
          name="paymentOption"
          value="Google Pay"
          onChange={handlePaymentChange}
        />
        <label htmlFor="googlePay">
          <FontAwesomeIcon icon={faGooglePay} />
        </label>
        <input
          type="radio"
          id="paypal"
          name="paymentOption"
          value="PayPal"
          onChange={handlePaymentChange}
        />
        <label htmlFor="paypal">
          <FontAwesomeIcon icon={faPaypal} />
        </label>
        <input
          type="radio"
          id="bitcoin"
          name="paymentOption"
          value="BitCoin"
          onChange={handlePaymentChange}
        />
        <label htmlFor="bitcoin">
          <FontAwesomeIcon icon={faBitcoin} />
        </label>
      </PaymentIcons>
      <div className="payment-details">
        {selectedPayment === "Visa" && (
          <>
            <div>
              <label htmlFor="creditCardNumber">Card Number:</label>
              <input
                type="tel"
                id="creditCardNumber"
                name="creditCardNumber"
                placeholder="1234 5678 9012 3456"
                required={!skipRequired}
                value={formData.creditCardNumber}
                onChange={handlePaymentChange}
                pattern="^\d{4} \d{4} \d{4} \d{4}$"
                maxLength="19"
              />
            </div>
            <div>
              <label htmlFor="expirationDate">Expiration Date:</label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                placeholder="MM/YY"
                required={!skipRequired}
                value={formData.expirationDate}
                onChange={handlePaymentChange}
                pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$"
                maxLength="5"
              />
            </div>
            <div>
              <label htmlFor="cvv">CVV:</label>
              <input
                type="tel"
                id="cvv"
                name="cvv"
                placeholder="123"
                required={!skipRequired}
                value={formData.cvv}
                onChange={handlePaymentChange}
                pattern="\d{3,4}"
                maxLength="3"
              />
            </div>
          </>
        )}
        {(selectedPayment === "Apple Pay" ||
          selectedPayment === "Google Pay" ||
          selectedPayment === "PayPal" ||
          selectedPayment === "BitCoin") && (
          <PaymentLoginContainer>
            <Link to="#">Click here to login to {selectedPayment}</Link>
          </PaymentLoginContainer>
        )}
      </div>
    </>
  );
};

export default PaymentOptions;
