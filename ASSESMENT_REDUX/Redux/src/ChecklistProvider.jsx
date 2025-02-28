import React, { useState, useContext, createContext } from "react";

// Create a Context
export const ChecklistContext = createContext();

// Checklist Provider Component
export const ChecklistProvider = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((option) => option !== value)
    );
  };

  return (
    <ChecklistContext.Provider value={{ selectedOptions, handleCheckboxChange }}>
      {children}
    </ChecklistContext.Provider>
  );
};