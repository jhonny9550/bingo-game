import React, { useCallback, useContext } from "react";

const NavButton: React.FC<{
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}> = (props) => {
  return (
    <button className="navbar__button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar">
      <h3>Bingo Game</h3>
    </nav>
  );
};

export default NavBar;
