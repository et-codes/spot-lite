import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";

const Layout = (): JSX.Element => {
  return (
    <Container>
      <h1>Spot-Lite</h1>
      <br />
      <Outlet />
    </Container>
  );
};

export default Layout;
