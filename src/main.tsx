import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import AppContextProvider from "@contexts/AppContextProvider";
import { ConfigProvider, Result } from "antd";
import { ErrorBoundary } from "react-error-boundary";

import dayjs from "dayjs";

import frFR from "antd/locale/fr_FR";
import "dayjs/locale/fr";

dayjs.locale("fr");

const App = () => {
  return useRoutes(routes);
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider locale={frFR}>
    <ErrorBoundary
      fallback={
        <Result
          status="500"
          title="Désolé, quelque chose s'est mal passé."
          subTitle="Oops! Une erreur s'est produite sur le site Web. Veuillez contacter l'équipe d'assistance ou signaler le problème."
        />
      }
    >
      <AppContextProvider>
        <Router>
          <App />
        </Router>
      </AppContextProvider>
    </ErrorBoundary>
  </ConfigProvider>
);
