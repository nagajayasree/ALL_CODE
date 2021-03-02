import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Audios.css";

class Audios extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col sm={8}>
              <p>Audios</p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Audios;
