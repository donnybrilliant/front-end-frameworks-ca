import { useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import BackLink from "../ui/BackLink";
import { StyledForm } from "./styled";

// Component to display the contact form
const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle the change of the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(formData);
  };
  return (
    <Container $width={"500px"}>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        {isSubmitted ? (
          <div>
            <p>Thank you for your submission! We will get back to you soon.</p>
            <div>
              <BackLink>Go Home</BackLink>
            </div>
          </div>
        ) : (
          <>
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
                placeholder="John Doe"
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
                placeholder="email@domain.com"
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
                placeholder="I have a question about..."
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
                placeholder="Your message here..."
              />
            </div>
            <Button type="submit" $proceed>
              Submit
            </Button>
          </>
        )}
      </StyledForm>
    </Container>
  );
};

export default ContactForm;
