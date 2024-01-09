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
  const [open, setOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<any>(null);
  const [formValues, setFormValues] = useState<any>({});

  // Memoize the value object to prevent it from changing on every render
  const value = useMemo(
    () => ({ theme, setTheme, formValues, setFormValues, open, setOpen }),
    [theme, setTheme, formValues, setFormValues, open, setOpen]
  );

  // Provide the state to the children components
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
