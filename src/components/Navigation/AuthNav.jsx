import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <nav className="flex gap-5">
      <NavLink
        className="text-white relative  font-medium text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-200 hover:after:w-full"
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className="text-white relative  font-medium text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-200 hover:after:w-full"
        to="/login"
      >
        Login
      </NavLink>
    </nav>
  );
};
