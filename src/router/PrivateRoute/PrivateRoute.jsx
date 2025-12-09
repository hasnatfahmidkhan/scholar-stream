import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (!user && !user?.email) {
    return <Navigate to={"/signIn"} state={location.pathname} />;
  }
  return children;
};

export default PrivateRoute;
