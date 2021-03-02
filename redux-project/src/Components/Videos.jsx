import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Container>
          <h1>Videos</h1>
          {this.props.videoPosts.map((p) => {
            return (
              <ul key={p.id}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </ul>
            );
          })}
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  videoPosts: state.videoPosts,
});

export default connect(mapStateToProps)(Videos);
