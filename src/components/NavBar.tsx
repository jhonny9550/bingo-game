import React from "react";
import Button from "./Button";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar bg-primary text-primary-content fixed">
      <Button color="ghost" className="normal-case text-xl">
        Bingo
      </Button>
    </nav>
  );
};

export default NavBar;
