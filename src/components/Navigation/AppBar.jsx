import { useSelector } from "react-redux";
import { Navigation } from "./Navigation";
import { AuthNav } from "./AuthNav";
import { UserMenu } from "./UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className="flex justify-between items-center bg-blue-500 text-white p-4 shadow-md">
      {isLoggedIn ? <Navigation /> : null}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
