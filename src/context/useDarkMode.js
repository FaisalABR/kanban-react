import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

export const useDarkMode = () => {
  const { isDark, changeBg } = useContext(DarkModeContext);

  if (isDark === undefined) {
    throw new Error("useDarkMode must be use within DarkModeProvider");
  }

  return { isDark, changeBg };
};
