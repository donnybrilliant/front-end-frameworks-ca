import { useState } from "react";
import Button from "../../components/Button";
import { StyledForm } from "./Contact.styled";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  document.title = "Contact Us | Shop";

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          minLength="3"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          minLength="3"
        />
      </div>
      <div>
        <label htmlFor="body">Message</label>
        <textarea
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
          required
          minLength="3"
          rows="10"
        />
      </div>
      <Button type="submit" $proceed>
        Submit
      </Button>
    </StyledForm>
  );
};

export default Contact;
