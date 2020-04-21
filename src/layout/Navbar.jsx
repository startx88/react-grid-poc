import React from "react";
import Icons from "../UI/Icons";
import NavItem from "../Components/NavLink/NavItem";
import Image from "../UI/Image";

const Navbar = (props) => {
  return (
    <ul className="navbar-nav  ml-auto">
      <NavItem href="#">
        <Icons icon="envelope" />
      </NavItem>
      <NavItem href="#">
        <Icons icon="bell" />
        <span className="badge">7</span>
      </NavItem>
      <NavItem
        id="userDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        href="#"
        parentClass="dropdown"
      >
        <Image
          src="https://i.ya-webdesign.com/images/avatar-png-1.png"
          className="img-profile rounded-circle"
          alt="avatar"
        />
        <span className="avatar-text">Pradeep Kumar</span>
        <div
          className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <span className="dropdown-item" href="#">
            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </span>
          <span className="dropdown-item" href="#">
            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
            Settings
          </span>
          <span className="dropdown-item" href="#">
            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
            Activity Log
          </span>
          <div className="dropdown-divider"></div>
          <span
            className="dropdown-item"
            href="#"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </span>
        </div>
      </NavItem>
    </ul>
  );
};

export default Navbar;
