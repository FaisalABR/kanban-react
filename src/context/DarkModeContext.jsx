import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const DarkModeContext = createContext(undefined);

const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  const changeBg = () => {
    setIsDark(!isDark);
  };
  return (
    <DarkModeContext.Provider value={{ isDark, changeBg }}>
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.propTypes = {
  children: PropTypes.any,
};

export default DarkModeProvider;
