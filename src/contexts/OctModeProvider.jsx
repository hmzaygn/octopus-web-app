import React, { createContext, useState } from "react";

const OctModeContext = createContext();

const OctModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <OctModeContext.Provider value={{ darkMode, setDarkMode, toggleMode }}>
      {children}
    </OctModeContext.Provider>
  );
};

export { OctModeProvider, OctModeContext };
