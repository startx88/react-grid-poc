import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * Icons
 */

const Icons = ({ icon, classname, spin, iconColor }) => {
  return (
    <span className={classname}>
      <FontAwesomeIcon style={{ color: iconColor }} icon={icon} spin={spin} />
    </span>
  );
};

// Default Props
Icons.defaultProps = {
  icon: "",
  spin: false,
};

export default Icons;
