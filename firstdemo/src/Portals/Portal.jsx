import React, { Component } from "react";
import ReactDOM from "react-dom";

function Portal() {
  return ReactDOM.createPortal(
    <h1>Portal Demo</h1>,
    document.getElementById("portal_root")
  );
}

export default Portal;
