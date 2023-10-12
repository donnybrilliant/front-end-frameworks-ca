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

const PaymentOptions = ({ formData, handleChange }) => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  return (
    <>
      <PaymentIcons>
        <input
          type="radio"
          id="visa"
          name="paymentOption"
          value="Visa"
          onChange={() => setSelectedPayment("Visa")}
        />
        <label htmlFor="visa">
          <FontAwesomeIcon icon={faCcVisa} />
        </label>
        <input
          type="radio"
          id="applePay"
          name="paymentOption"
          value="Apple Pay"
          onChange={() => setSelectedPayment("Apple Pay")}
        />
        <label htmlFor="applePay">
          <FontAwesomeIcon icon={faApplePay} />
        </label>
        <input
          type="radio"
          id="googlePay"
          name="paymentOption"
          value="Google Pay"
          onChange={() => setSelectedPayment("Google Pay")}
        />
        <label htmlFor="googlePay">
          <FontAwesomeIcon icon={faGooglePay} />
        </label>
        <input
          type="radio"
          id="paypal"
          name="paymentOption"
          value="PayPal"
          onChange={() => setSelectedPayment("PayPal")}
        />
        <label htmlFor="paypal">
          <FontAwesomeIcon icon={faPaypal} />
        </label>
        <input
          type="radio"
          id="bitcoin"
          name="paymentOption"
          value="BitCoin"
          onChange={() => setSelectedPayment("BitCoin")}
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
          <PaymentLoginContainer>
            <Link to="#">Click here to login to {selectedPayment}</Link>
          </PaymentLoginContainer>
        )}
      </div>
    </>
  );
};

export default PaymentOptions;
