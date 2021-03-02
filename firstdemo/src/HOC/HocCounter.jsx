import React, { Component } from "react";

const UpdatedComp = (OriginalComp) => {
  class HocCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    increment = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return <OriginalComp count={this.state.count} onClick={this.increment} />;
    }
  }
  return HocCounter;
};

export default UpdatedComp;
