import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSideBar, closeSubmenu, openSubmenu } = useGlobalContext();
  const displaySubmeu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img className="nav-logo" src={logo} alt="stripe" />
          <button className="btn toggle-btn" onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn " onMouseOver={displaySubmeu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn " onMouseOver={displaySubmeu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn " onMouseOver={displaySubmeu}>
              company
            </button>
          </li>
        </ul>
        <button className="signin-btn btn ">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
