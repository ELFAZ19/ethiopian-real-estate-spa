import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";

// Styled components
const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;

  /* Create inverted corner using clip-path */
  clip-path: path(
    "M0 0 H calc(100% - 40px) 
     A 20 20 0 0 1 100% 40 
     V 100% H 0 Z"
  );

  @supports not (clip-path: path("")) {
    /* Fallback (optional): Square cut using polygon */
    clip-path: polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0% 100%);
  }
`;


const CardImage = styled.div`
  position: relative;
  height: 250px;
  background: url(${(props) => props.image}) center/cover no-repeat;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const Location = styled.p`
  color: #777;
  font-size: 0.9rem;
  margin: 0.3rem 0;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 1rem;
  color: #2c3e50;
`;

const Details = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 0.5rem;
`;

const DetailItem = styled.span`
  font-size: 0.8rem;
  color: #555;
  background: #f0f0f0;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
`;

const NikeBadge = styled(motion.span)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #000;
  color: white;
  padding: 0.4rem 1.2rem 0.4rem 1.5rem;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 3;

  border-bottom-left-radius: 20px;
`;



// Main component
const PropertyCard = ({ property }) => {
  return (
    <Card>
      <CardImage image={property.image}>
        <NikeBadge
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >

          
          featured
        </NikeBadge>
      </CardImage>
      <CardBody>
        <Title>{property.title}</Title>
        <Location>{property.location}</Location>
        <Price>${property.price.toLocaleString()}</Price>
        <Details>
          {property.bedrooms && (
            <DetailItem>{property.bedrooms} beds</DetailItem>
          )}
          {property.bathrooms && (
            <DetailItem>{property.bathrooms} baths</DetailItem>
          )}
          <DetailItem>{property.area} sqm</DetailItem>
        </Details>
      </CardBody>
    </Card>
  );
};

export default PropertyCard;
