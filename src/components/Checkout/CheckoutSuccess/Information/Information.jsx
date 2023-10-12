import { Info } from "./Information.styled";

const Information = ({ formData }) => {
  return (
    <Info>
      <h2>User Information</h2>
      <p>
        Name: {formData.firstName} {formData.lastName}
      </p>
      <p>Email: {formData.email}</p>
      <h4>Shipping Address</h4>
      <p>Address: {formData.shippingAddress}</p>
      <p>
        City: {formData.shippingCity} {formData.shippingZip}
      </p>
      <p>Country: {formData.shippingCountry}</p>
      {formData.billingAddress && (
        <>
          <h4>Billing Address</h4>
          <p>Address: {formData.billingAddress}</p>
          <p>
            City: {formData.billingCity} {formData.billingZip}
          </p>
          <p>Country: {formData.billingCountry}</p>
        </>
      )}
    </Info>
  );
};

export default Information;
