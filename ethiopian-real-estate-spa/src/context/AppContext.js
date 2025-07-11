 
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [companyInfo] = useState({
    name: "Habesha Real Estate",
    phone: "+251 911 234 567",
    email: "info@habesharealestate.com",
    address: "Bole Road, Addis Ababa, Ethiopia",
    socialMedia: {
      facebook: "https://facebook.com/habesharealestate",
      twitter: "https://twitter.com/habesharealestate",
      instagram: "https://instagram.com/habesharealestate",
    },
  });

  const [filterSettings, setFilterSettings] = useState({
    propertyType: "all",
    priceRange: [0, 1000000],
    location: "all",
  });

  return (
    <AppContext.Provider
      value={{ companyInfo, filterSettings, setFilterSettings }}
    >
      {children}
    </AppContext.Provider>
  );
};