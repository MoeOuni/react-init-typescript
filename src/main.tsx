import "./index.css";
import React from "react";
import routes from "./routes/index";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return useRoutes(routes);
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
