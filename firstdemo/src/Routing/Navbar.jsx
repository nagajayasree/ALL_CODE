import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <Router> */}
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/products">Products</Link>
          </div>
          <div>
            <Link to="/aboutus">About Us</Link>
          </div>
        {/* </Router> */}
      </div>
    );
  }
}

export default Navbar;
