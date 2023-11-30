import React, { useState, useMemo, ReactNode } from "react";
import UserContext from "./UserContext";

interface UserContextProviderProps {
  children: ReactNode;
}

// Create the UserContextProvider component
const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  // Define the user state
  const [user, setUser] = useState<any>(null);

  // Memoize the value object to prevent it from changing on every render
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  // Provide the user state to the children components
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
