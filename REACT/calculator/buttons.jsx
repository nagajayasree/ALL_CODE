import React, { Component } from "react";

class Buttons extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="calculator" style={{ padding: 50 }}>
          <div className="calculator-screen">
            <input className="input" value="" disabled />
          </div>
          <button className="btn btn-secondary m-2">Clear</button>
          <button className="btn btn-secondary m-3" value="0">
            0
          </button>
          <button className="btn btn-secondary m-3">/</button>
          <div>
            <button className="btn btn-secondary m-2" value="7">
              7
            </button>
            <button className="btn btn-secondary m-2" value="8">
              8
            </button>
            <button className="btn btn-secondary m-2" value="9">
              9
            </button>
            <button className="btn btn-secondary m-2">-</button>
          </div>
          <div>
            <button className="btn btn-secondary m-2" value="4">
              4
            </button>
            <button className="btn btn-secondary m-2" value="5">
              5
            </button>
            <button className="btn btn-secondary m-2" value="6">
              6
            </button>
            <button className="btn btn-secondary m-2">+</button>
          </div>
          <div>
            <button className="btn btn-secondary m-2" value="1">
              1
            </button>
            <button className="btn btn-secondary m-2" value="2">
              2
            </button>
            <button className="btn btn-secondary m-2" value="3">
              3
            </button>
            <button className="btn btn-secondary m-2">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Buttons;