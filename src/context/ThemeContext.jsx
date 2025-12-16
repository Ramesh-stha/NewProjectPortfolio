import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({children}) => {
  const [theme, setTheme] = useState("light");
  // Toggling theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
export default ContextProvider;
