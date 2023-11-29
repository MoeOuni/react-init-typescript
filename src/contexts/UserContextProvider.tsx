import React, { useState, useMemo } from "react";
import UserContext from "./UserContext";

// Create the UserContextProvider component
const UserContextProvider: React.FC = ({
  children,
}: React.PropsWithChildren<{}>) => {
  // Define the user state
  const [user, setUser] = useState<any>(null);

  // Memoize the value object to prevent it from changing on every render
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  // Provide the user state to the children components
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
