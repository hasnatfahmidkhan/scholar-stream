import { Link, NavLink } from "react-router";
import Container from "../../../components/Container/Container";

const publicLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "All Scholarships",
    link: "/all-scholarships",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm py-1 sticky top-0">
      <Container className="navbar">
        <div className="navbar-start gap-2">
          <Link
            to={"/"}
            className="text-xl font-extrabold text-blue-500 uppercase"
          >
            Scholar Stream
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-5 text-accent text-base font-semibold tracking-wide">
            {publicLinks.map((l) => (
              <li key={l.label}>
                <NavLink
                  to={l.link}
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-primary border-none"
                      : "btn btn-ghost border-none hover:btn-primary"
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-lg dropdown-content bg-base-100 rounded-box z-10 mt-3 w-56 font-medium tracking-wide p-2 shadow divide-y divide-gray-400 divide-dashed space-y-2 border border-gray-200"
            >
              {publicLinks.map((l) => (
                <li key={l.label}>
                  <NavLink to={l.link}>{l.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex gap-4">
            <Link to={"/signUp"} className="btn">
              Sign Up
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
