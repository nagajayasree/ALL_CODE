import React, { Component, Fragment } from "react";
import { Nav, Image, Col, Row, Container } from "react-bootstrap";
import Logo from "./Logo.png";
import { Link } from "react-router-dom";
import "./NavBar2.css";

class NavBar2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: "",
    };
  }

  activateTab = (path) => {
    this.setState({ tabSelected: path });
  };

  render() {
    const { tabSelected } = this.state;
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col className="navBar">
              <Link to="/feed">
                <Image
                  src={Logo}
                  alt="Logo"
                  className="logo"
                  roundedCircle
                  onClick={() => this.activateTab("img")}
                />
              </Link>
              <Nav variant="pills" className="flex-column">
                <Link
                  to="/feed"
                  className={
                    tabSelected === "Feed"
                      ? "tabs nav-link active"
                      : "tabs nav-link"
                  }
                  onClick={() => this.activateTab("Feed")}
                >
                  Feed
                </Link>
                <Link
                  to="/videos"
                  className={
                    tabSelected === "Videos"
                      ? "tabs nav-link active"
                      : "tabs nav-link"
                  }
                  onClick={() => this.activateTab("Videos")}
                >
                  Videos
                </Link>
                <Link
                  to="/audios"
                  className={
                    tabSelected === "Audio"
                      ? "tabs nav-link active"
                      : "tabs nav-link"
                  }
                  onClick={() => this.activateTab("Audio")}
                >
                  Audios
                </Link>
                <Link
                  to="/addBlog"
                  className={
                    tabSelected === "AddBlog"
                      ? "tabs nav-link active"
                      : "tabs nav-link"
                  }
                  onClick={() => this.activateTab("AddBlog")}
                >
                  Add Your Blog
                </Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NavBar2;
