import { ChecklistContext } from "./ChecklistProvider";
import { useContext } from "react";

export const Checklist = () => {
    const { handleCheckboxChange } = useContext(ChecklistContext);
    const options = ["Are Your Citizen ", "Are Your Ours 21"];
  
    return (
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column",  marginLeft:"540px" , fontSize:"25px"}}>
        <h2>Checklist</h2>
        {options.map((option) => (
          <div key={option}>
            <input
              type="checkbox"
              value={option}
              onChange={handleCheckboxChange}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>
    );
  };