import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      value: 25,
    };
  }

  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };
  // reset = () => {
  //   this.props.dispatch({
  //     type: "RESET",
  //   });
  //   this.setState({ value: (this.state.value = 0) });
  // };

  render() {
    return (
      <>
        <p>Counter</p>
        <button onClick={this.decrement} style={{ margin: "15px" }}>
          -
        </button>
        {this.props.count}
        <button onClick={this.increment} style={{ margin: "15px" }}>
          +
        </button>
        {/* <br /> */}
        {/* {this.state.value}
        <br />
        <button onClick={this.reset}>Reset</button> */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatch,
//   };
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Counter);
