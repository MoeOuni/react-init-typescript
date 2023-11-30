import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import AppContextProvider from "@contexts/AppContextProvider";
import UserContextProvider from "@contexts/UserContextProvider";

const App = () => {
  return useRoutes(routes);
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <UserContextProvider>
        <Router>
          <App />
        </Router>
      </UserContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);
