import { useContext } from "react";
import { ChecklistContext } from "./ChecklistProvider";

export const SelectedOptions = () => {
    const { selectedOptions } = useContext(ChecklistContext);
  
    return (
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column",  marginLeft:"550px", fontSize:"25px"}}>
        <h3>Selected Options:</h3>
        <ul>
          {selectedOptions.length > 0 ? (
            selectedOptions.map((option) => <li key={option}>{option}</li>)
          ) : (
            <p>No options selected</p>
          )}
        </ul>
      </div>
    );
  };