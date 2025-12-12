import { Navigate } from "react-router";
import useRole from "../../../hooks/useRole";
import Analytics from "../Analytics/Analytics";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../../components/Spinner/Spinner";

const DashBoardHome = () => {
  const { authLoading } = useAuth();
  const { role, roleLoading } = useRole();

  if (authLoading || roleLoading) {
    return <Spinner />;
  }

  if (role === "admin") {
    return <Analytics />;
  }
  if (role === "moderator" || role === "student") {
    return <Navigate to={"/dashboard/me"} replace={true} />;
  }
};

export default DashBoardHome;
