import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import AppContextProvider from "@contexts/AppContextProvider";
import UserContextProvider from "@contexts/UserContextProvider";
import { ConfigProvider } from "antd";

import dayjs from "dayjs";
import frFR from "antd/locale/fr_FR";

import "dayjs/locale/fr";

dayjs.locale("fr");

const App = () => {
  return useRoutes(routes);
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider locale={frFR}>
    <AppContextProvider>
      <UserContextProvider>
        <Router>
          <App />
        </Router>
      </UserContextProvider>
    </AppContextProvider>
  </ConfigProvider>
);
