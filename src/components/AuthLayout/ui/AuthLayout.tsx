import { Outlet, useNavigate } from "react-router";
import { useUser } from "../../../shared/hooks";

export const AuthLayout = () => {
  const { data } = useUser();
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
