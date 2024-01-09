import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router";
const NotFoundPage: React.FC = () => {
  const Navigate = useNavigate();
  return (
    <Result
      status="404"
      title="Désolé, la page que vous avez visitée n'existe pas."
      extra={
        <Button type="primary" onClick={() => Navigate("/")}>
          Retour à la page d'accueil
        </Button>
      }
    />
  );
};

export default NotFoundPage;
