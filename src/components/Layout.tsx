import { PropsWithChildren } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
