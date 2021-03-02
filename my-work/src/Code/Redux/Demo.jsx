import React, { Component } from "react";
import { createStore } from "redux";

const setCount = () => {
  return {
    type: "Increment",
    payload: {
      value: 0,
    },
  };
};

const CounterLogic = (state = setCount, action) => {
  switch (action.type) {
    case "Increment":
      return {
        value: state + 1,
      };
  }
};

const store = createStore(CounterLogic);

store.subscribe(() => console.log(store.getState()));

class Demo extends Component {
  render() {
    return (
      <>
        <p>Counter in Redux</p>
        <button onClick={this.decrement}>-</button>
        <span>{this.props.count}</span>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Demo;
