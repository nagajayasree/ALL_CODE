import React, { Component } from "react";

class Btstrp extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-dark navbar-dark navbar-expand-lg">
          <div className="container">
            <a href="#" className="navbar-brand">
              Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collape"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              area-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-na ml-auto"></ul>
            {/* <li className="nav-item active"> */}
            <a className="nav-link navbar-brand" href="#">
              Home
            </a>
            {/* </li> */}

            <a className="nav-link navbar-brand" href="#">
              About
            </a>

            <a className="nav-link navbar-brand" href="#">
              Contact
            </a>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="card">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title" style={{ padding: "10px" }}>
                    Card 1
                  </h4>
                  <p className="card-text" style={{ padding: "10px" }}>
                    Lorem ipsum dolor sit amet, at vim stet latine menandri,
                    latine scribentur ex nam. Elitr ullamcorper nec at. Mea
                    iriure expetendis ne, vim at summo fierent, ubique ocurreret
                    ea eos. Percipit adolescens et vim, iriure malorum gloriatur
                    sed eu.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="card">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title" style={{ padding: "10px" }}>
                    Card 2
                  </h4>
                  <p className="card-text" style={{ padding: "10px" }}>
                    Lorem ipsum dolor sit amet, at vim stet latine menandri,
                    latine scribentur ex nam. Elitr ullamcorper nec at. Mea
                    iriure expetendis ne, vim at summo fierent, ubique ocurreret
                    ea eos. Percipit adolescens et vim, iriure malorum gloriatur
                    sed eu.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="card">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title" style={{ padding: "10px" }}>
                    Card 3
                  </h4>
                  <p className="card-text" style={{ padding: "10px" }}>
                    Lorem ipsum dolor sit amet, at vim stet latine menandri,
                    latine scribentur ex nam. Elitr ullamcorper nec at. Mea
                    iriure expetendis ne, vim at summo fierent, ubique ocurreret
                    ea eos. Percipit adolescens et vim, iriure malorum gloriatur
                    sed eu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Btstrp;
