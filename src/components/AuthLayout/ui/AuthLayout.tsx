import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../../shared/hooks";

export const AuthLayout = () => {
  const { data } = useAuth();
  const navigate = useNavigate();

  if (data) {
    navigate("/");
  }

  return (
    <main className="flex-1">
      <Outlet />
    </main>
  );
};
