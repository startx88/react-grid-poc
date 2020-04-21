import React from "react";
import { Link, NavLink } from "react-router-dom";
import Icons from "../../UI/Icons";
const NavItem = ({
  link,
  href,
  children,
  icon,
  classname,
  parentClass,
  ...rest
}) => {
  return link ? (
    <Link to={href} className={["nav-link", classname].join(" ")} {...rest}>
      {icon && <Icons icon={icon} />} {children}
    </Link>
  ) : (
    <li className={["nav-item", parentClass].join(" ")}>
      <NavLink
        className={["nav-link", classname].join(" ")}
        to={href}
        {...rest}
      >
        {icon && <Icons icon={icon} />} {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
