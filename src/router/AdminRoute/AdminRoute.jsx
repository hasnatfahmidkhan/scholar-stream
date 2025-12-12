import Forbidden from "../../components/Forbidden/Forbidden";
import useRole from "../../hooks/useRole";

const AdminRoute = ({ children }) => {
  const role = useRole();
  if (role !== "admin") {
    return <Forbidden />;
  }
  return children;
};

export default AdminRoute;
