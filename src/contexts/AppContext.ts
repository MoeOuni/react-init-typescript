import { AppContextProps } from "@/types";
import  { createContext } from "react";

const AppContext = createContext<AppContextProps | undefined>(undefined);

export default AppContext;
