import React, { Component } from "react";
// import "./ReactLogo.jpg";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar bg-dark Nav">
          {/* <img className="img-fl" src="ReactLogo.jpg" alt="Logo" /> */}
          <div className="links">
            <ul className="nav flex-column navbar-nav">
              <li className="nav-item">
                <a className="nav-link li" href="#">
                  Personal Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link li" href="#">
                  Contact Deatails
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link li" href="#">
                  Job Details
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Form;
