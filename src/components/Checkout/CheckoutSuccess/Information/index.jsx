import { Info } from "./styled";

// Component to display the user information in the Checkout Success page
const Information = ({ formData }) => {
  return (
    <Info>
      <h2>User Information</h2>
      <p>
        <b>Name:</b> {formData.firstName} {formData.lastName}
      </p>
      <p>
        <b>Email:</b> {formData.email}
      </p>
      <p>
        <b>Telephone:</b> {formData.telephone}
      </p>
      <h4>Shipping Address</h4>
      <p>
        <b>Address:</b> {formData.shippingAddress}
      </p>
      <p>
        <b>City:</b> {formData.shippingCity} {formData.shippingZip}
      </p>
      <p>
        <b>Country:</b> {formData.shippingCountry}
      </p>
      {formData.billingAddress !== "" &&
        formData.billingAddress !== formData.shippingAddress && (
          <>
            <h4>Billing Address</h4>
            <p>
              <b>Address:</b> {formData.billingAddress}
            </p>
            <p>
              <b>City:</b> {formData.billingCity} {formData.billingZip}
            </p>
            <p>
              <b>Country:</b> {formData.billingCountry}
            </p>
          </>
        )}
    </Info>
  );
};

export default Information;
