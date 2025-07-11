 
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 2rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const Footer = () => {
  const { companyInfo } = useContext(AppContext);

  return (
    <FooterContainer>
      <p>{companyInfo.name}</p>
      <p>{companyInfo.address}</p>
      <p>
        Phone: {companyInfo.phone} | Email: {companyInfo.email}
      </p>
      <SocialLinks>
        <a
          href={companyInfo.socialMedia.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href={companyInfo.socialMedia.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href={companyInfo.socialMedia.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </SocialLinks>
      <p>
        &copy; {new Date().getFullYear()} Habesha Real Estate. All rights
        reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;