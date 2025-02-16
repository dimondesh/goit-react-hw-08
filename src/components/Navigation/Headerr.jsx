import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { logoutThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header className="flex">
      <h2 className="pl-2 pr-2 md:pl-10">Phonebook</h2>
      {isLoggedIn && (
        <h2 className="pl-10 hidden md:inline">Welcome, {user.name}</h2>
      )}
      <nav className="flex items-center gap-5 ml-auto mr-10">
        {isLoggedIn ? (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/phonebook">Phonebook</NavLink>

            <button
              className="cursor-pointer border-2 border-black text-blue-500  rounded-md px-1 py-1"
              onClick={() => dispatch(logoutThunk())}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};
export default Header;
