import { Outlet } from "react-router";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import "./layout.scss";

const Layout = () => {
  return (
    <div className="main-div">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
