import React from "react";

const NavButton: React.FC<{ children: React.ReactNode }> = (props) => {
  return <button className="navbar__button">{props.children}</button>;
};

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavButton>+ Create new game</NavButton>
    </nav>
  );
};

export default NavBar;
