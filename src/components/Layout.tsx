import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
