import { Outlet } from "react-router-dom";
import * as St from "./Layout.styled";
import Header from "./header/Header";
import Footer from "./footer/Footer";
const Layout = () => {
  return (
    <St.Body>
      <Header />
      <St.Container>
        <Outlet />
      </St.Container>
      <Footer />
    </St.Body>
  );
};

export default Layout;
