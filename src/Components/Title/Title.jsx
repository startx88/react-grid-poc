import React from "react";

const Title = ({ title, children }) => {
  return (
    <div className="page-title f-flex justify-content-between">
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default Title;
