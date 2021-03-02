import React, { Component, Fragment } from "react";
import "./Comp.css";

class StylingTest extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="div1">
          <p>para 1</p>
        </div>
        <div className="div2">
          <p>para 2</p>
        </div>
        <div>
          <span className="div3">para 3</span>
        </div>
        <div className="div4">
          <p>para 4</p>
        </div>
        <div className="div5">
          <p>para 5</p>
          <div className="div6">
            <p>para 6</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default StylingTest;
