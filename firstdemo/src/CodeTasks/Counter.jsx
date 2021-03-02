import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <button className="btn btn-primary" onClick={this.incCount}>
          Count{" "}
          <span
            className={
              this.state.count >= 10
                ? "badge badge-danger"
                : "badge badge-light"
            }
          >
            {this.state.count}
          </span>
        </button>
      </>
    );
  }
}

export default Counter;
