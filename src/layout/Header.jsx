import React from "react";
import Navbar from "./Navbar";
import Icons from "../UI/Icons";

const Header = (props) => {
  return (
    <header className="navbar navbar-expand navbar-light bg-white topbar shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link  rounded-circle mr-3"
      >
        <Icons icon="bars" />
      </button>

      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
