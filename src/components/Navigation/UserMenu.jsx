import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="flex items-center gap-5">
      <span className="font-semibold hidden md:inline">
        Welcome, {user.name}
      </span>
      <button
        onClick={() => dispatch(logoutThunk())}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md transition-all duration-200"
      >
        Logout
      </button>
    </div>
  );
};
