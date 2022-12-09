import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Spot-Lite</h1>
      <br />
      <Outlet />
    </div>
  );
};

export default Layout;
