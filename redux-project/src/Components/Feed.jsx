import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedPosts: [],
    };
  }

  render() {
    return (
      <>
        <Container fluid>
          <h1>FeedList</h1>
          {this.props.feedPosts.map((p) => {
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
  feedPosts: state.feedPosts,
});

export default connect(mapStateToProps)(Feed);
