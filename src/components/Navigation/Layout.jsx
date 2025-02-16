import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";

const Layout = () => {
  return (
    <>
      <AppBar />
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
