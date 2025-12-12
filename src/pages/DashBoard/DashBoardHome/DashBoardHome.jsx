import useRole from "../../../hooks/useRole";
import Analytics from "../Analytics/Analytics";
import UserProfile from "../UserProfile/UserProfile";

const DashBoardHome = () => {
  const role = useRole();

  if (role === "admin") {
    return <Analytics />;
  }
  if (role === "moderator" || role === "student") {
    return <UserProfile />;
  }
};

export default DashBoardHome;
