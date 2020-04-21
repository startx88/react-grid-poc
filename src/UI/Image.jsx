import React from "react";
import PropTypes from "prop-types";
/**
 * Image component
 */
const Image = ({ src, alt, className, refs }) => {
  return className ? (
    <div className={className}>
      <img ref={refs} src={src} alt={alt} />
    </div>
  ) : (
    <img ref={refs} src={src} alt={alt} />
  );
};

Image.defaultProps = {
  src:
    "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
  alt: "No Image",
  className: "",
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Image;
