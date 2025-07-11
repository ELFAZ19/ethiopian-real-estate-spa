import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import PropertyCard from "../components/PropertyCard";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const HomeContainer = styled.div`
  padding: 0;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(42, 67, 101, 0.8), rgba(42, 67, 101, 0.8)),
    url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-position: center;
  color: white;
  padding: 8rem 5% 6rem;
  text-align: center;
  position: relative;
  margin-bottom: 4rem;
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled(motion.button)`
  background-color: var(--accent);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);

  &:hover {
    background-color: #c1915e;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin: 4rem 0 2rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

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

const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2rem auto;
  padding: 0 5%;
  max-width: 1400px;
`;

const Home = () => {
  const { companyInfo } = useContext(AppContext);
  const navigate = useNavigate();

  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Villa with Mountain View in Bole",
      price: 450000,
      bedrooms: 5,
      bathrooms: 4,
      area: 380,
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      location: "Bole, Addis Ababa",
    },
    {
      id: 2,
      title: "Modern Penthouse in Kazanchis Business District",
      price: 320000,
      bedrooms: 3,
      bathrooms: 3,
      area: 220,
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      location: "Kazanchis, Addis Ababa",
    },
    {
      id: 3,
      title: "Premium Commercial Space in Piassa",
      price: 650000,
      area: 650,
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      location: "Piassa, Addis Ababa",
    },
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroTitle>Discover Your Dream Property in Ethiopia</HeroTitle>
          <HeroSubtitle>
            {companyInfo.name} offers premium real estate services with over a
            decade of experience in Ethiopia's most desirable locations.
          </HeroSubtitle>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById("featured-properties");
              element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Properties
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <SectionTitle id="featured-properties">Featured Properties</SectionTitle>
      <PropertiesGrid>
        {featuredProperties.map((property, index) => (
          <PropertyCard
            key={property.id}
            property={property}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </PropertiesGrid>
    </HomeContainer>
  );
};

export default Home;
