import { ChecklistProvider } from "./ChecklistProvider";
import { Checklist } from "./Checklist";
import { SelectedOptions } from "./SelectedOptions";

import React from "react";
const App = () => {
  return (
  
    <ChecklistProvider>
      <div>
        <Checklist />
        <SelectedOptions />
      </div>
    </ChecklistProvider>
  );
};

export default App;