import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Container = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header />
          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Container;
