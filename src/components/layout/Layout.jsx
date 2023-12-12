import { Outlet } from "react-router-dom";
import RootHeader from "../root_header/RootHeader";

const Layout = () => {
  return (
    <>
      <RootHeader title="X. it's what's happening" />
      <Outlet />
    </>
  );
};

export default Layout;
