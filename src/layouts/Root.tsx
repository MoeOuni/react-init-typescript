import React from "react";
import { Outlet } from "react-router-dom";
import { getToken } from "@utils/auth";

const Root: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();

    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Root;
