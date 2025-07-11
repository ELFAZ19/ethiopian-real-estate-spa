 
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ContactForm from "../components/ContactForm";
import styled from "@emotion/styled";

const ContactContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
`;

const Contact = () => {
  const { companyInfo } = useContext(AppContext);

  return (
    <ContactContainer>
      <div>
        <h1>Contact Us</h1>
        <p>Have questions? Get in touch with our team today.</p>
        <ContactForm />
      </div>

      <ContactInfo>
        <h2>Our Office</h2>
        <p>
          <strong>Address:</strong> {companyInfo.address}
        </p>
        <p>
          <strong>Phone:</strong> {companyInfo.phone}
        </p>
        <p>
          <strong>Email:</strong> {companyInfo.email}
        </p>

        <h3>Business Hours</h3>
        <p>Monday - Friday: 8:30 AM - 5:30 PM</p>
        <p>Saturday: 9:00 AM - 1:00 PM</p>
        <p>Sunday: Closed</p>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;