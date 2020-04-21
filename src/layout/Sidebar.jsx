import React from "react";
import Logo from "../Components/Logo/Logo";
import NavItem from "../Components/NavLink/NavItem";

const Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <Logo />
      <div className="inner-wrap">
        <span className="menu">MENU</span>
        <ul className="navbar-nav " id="accordionSidebar">
          <NavItem exact href="/" icon="th">
            Dashboard
          </NavItem>
          <NavItem exact icon="user-circle" href="/toolkit">
            Toolkit
          </NavItem>
          <NavItem href="/documents" icon="edit">
            Documents
          </NavItem>
          <NavItem href="/conversations" icon="comment-alt">
            Conversations
          </NavItem>
          <NavItem href="/library" icon="briefcase">
            Library
          </NavItem>
          <NavItem href="/events" icon="calendar-alt">
            Events
          </NavItem>
          <NavItem href="/contacts" icon="user-circle">
            Contacts
          </NavItem>
          <NavItem href="/chats" icon="comment">
            Chats
          </NavItem>
        </ul>

        <span className="menu">SUPPORT</span>
        <ul className="navbar-nav " id="accordionSidebar">
          <NavItem href="/neet-helps" icon="question-circle">
            Need Helps
          </NavItem>
          <NavItem href="/contact-us" icon="envelope">
            Contact Us
          </NavItem>
        </ul>

        <span className="menu">SETTINGS</span>
        <ul className="navbar-nav" id="accordionSidebar">
          <NavItem href="/account" icon="cog">
            Account
          </NavItem>
          <NavItem href="/dark-mode">Dark Mode</NavItem>
          <NavItem href="/logout">Logout</NavItem>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
