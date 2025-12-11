import { NavLink } from "react-router";

const MyLink = ({ link }) => {
  return (
    <NavLink
      to={link.link}
      className={({ isActive }) =>
        isActive
          ? "btn btn-primary border-none"
          : "btn btn-ghost border-none hover:btn-primary"
      }
    >
      {link.label}
    </NavLink>
  );
};

export default MyLink;
