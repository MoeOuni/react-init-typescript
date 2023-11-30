import React, { useState, useMemo, ReactNode } from "react";
import AppContext from "./AppContext";

interface AppContextProviderProps {
  children: ReactNode;
}

// Create the UserContextProvider component
const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  // Define the state
  const [theme, setTheme] = useState<any>(null);

  // Memoize the value object to prevent it from changing on every render
  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  // Provide the state to the children components
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
