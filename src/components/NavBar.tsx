import React from "react";
import Button from "./Button";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar bg-primary text-primary-content fixed z-30">
      <Button color="ghost" to="/">
        Bingo
      </Button>
    </nav>
  );
};

export default NavBar;
