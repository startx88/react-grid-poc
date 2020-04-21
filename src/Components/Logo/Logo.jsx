import React from "react";
import LogoImage from "./logo.png";
import { Link } from "react-router-dom";
import Image from "../../UI/Image";

const Logo = ({ brandname, classname }) => {
  return (
    <div className={["logo", classname].join(" ")}>
      <Link to="/">
        <Image src={LogoImage} alt="Aprio" /> {brandname}
      </Link>
    </div>
  );
};

export default Logo;
