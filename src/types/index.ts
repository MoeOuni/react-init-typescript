import React from "react";

export interface AppContextProps {
    theme: any;
    setTheme: React.Dispatch<React.SetStateAction<any>>;
    formValues: any;
    setFormValues: React.Dispatch<React.SetStateAction<any>>;
    open: boolean;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
  }