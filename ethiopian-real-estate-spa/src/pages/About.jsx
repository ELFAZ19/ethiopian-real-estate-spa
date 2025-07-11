import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 5%;
`;

const AboutHero = styled.section`
  text-align: center;
  margin-bottom: 4rem;
  padding: 4rem 0;
  background: linear-gradient(
    135deg,
    rgba(58, 90, 120, 0.1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  border-radius: var(--radius-lg);
`;

const SectionTitle = styled.h2`
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, var(--primary), var(--accent));
    border-radius: 3px;
  }
`;

const AboutSection = styled(motion.section)`
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  height: 400px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const AboutContent = styled.div`
  & > p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border-top: 3px solid var(--accent);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }

  h3 {
    color: var(--primary);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: "✓";
      color: var(--accent);
      font-size: 1.2em;
    }
  }
`;

const About = () => {
  const { companyInfo } = useContext(AppContext);

  const services = [
    {
      title: "Residential Sales",
      description:
        "Find your dream home from our curated selection of premium properties.",
    },
    {
      title: "Commercial Leasing",
      description:
        "Prime commercial spaces in Ethiopia's most sought-after locations.",
    },
    {
      title: "Property Valuation",
      description:
        "Accurate market valuations from our team of certified experts.",
    },
    {
      title: "Investment Advisory",
      description: "Strategic advice to maximize your real estate investments.",
    },
  ];

  return (
    <AboutContainer>
      <AboutHero>
        <SectionTitle>About {companyInfo.name}</SectionTitle>
        <p>
          Ethiopia's premier real estate service with a decade of excellence
        </p>
      </AboutHero>

      <AboutSection
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <AboutContent>
          <SectionTitle>Our Story</SectionTitle>
          <p>
            Founded in 2010, {companyInfo.name} has been at the forefront of
            Ethiopia's real estate development, helping clients find their dream
            homes and investment properties across the country.
          </p>
          <p>
            What began as a small family business in Addis Ababa has grown into
            one of Ethiopia's most trusted real estate brands, with offices in
            four major cities and a portfolio of over 500 satisfied clients.
          </p>
        </AboutContent>
        <AboutImage image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
      </AboutSection>

      <AboutSection
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <AboutImage image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        <AboutContent>
          <SectionTitle>Our Services</SectionTitle>
          <ServiceGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </ServiceCard>
            ))}
          </ServiceGrid>
        </AboutContent>
      </AboutSection>
    </AboutContainer>
  );
};

export default About;
