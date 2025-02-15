import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const PublicRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? (
    <Navigate to={location.state || "/phonebook"} />
  ) : (
    children
  );
};
export default PublicRoute;
