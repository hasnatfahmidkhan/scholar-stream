import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) {
    return <div>Loading...</div>;
  }

  if (!user && !user?.email) {
    return <Navigate to={"/signIn"} state={location.pathname} />;
  }
  return children;
};

export default PrivateRoute;
