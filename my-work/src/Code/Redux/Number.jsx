import React, { Component } from "react";
import { createStore } from "redux";

class Number extends Component {
  render() {
    //step2: reducer: state & action
    const number = (state = 6, action) => {
      switch (action.type) {
        case "Add":
          return state + 1;
        case "Subs":
          return state - 1;
        default:
          return state;
      }
    };

    //step1: store
    let store = createStore(number);

    //step3: subscribe
    // store.subscribe(() => console.log(store.getState()));
    // console.log(store.getState());
    store.subscribe(() => console.log("Number is", store.getState()));

    // step4: dispatch
    store.dispatch({ type: "Add" });
    store.dispatch({ type: "Subs" });

    // let increment = () => {
    //   return {
    //     type: "Add",
    //   };
    //   //   store.getState() + 1;
    //   //   store.dispatch({ type: "Add" });
    // };

    // let decrement = () => {
    //   return {
    //     type: "Subs",
    //   };
    //   //   store.getState() - 1;
    //   //   store.dispatch({ type: "Subs" });
    // };

    return (
      <>
        <p>Display Number using Redux</p>
        {/* <button onClick={decrement()}>-</button> */}
        {store.getState()}
        {/* <button onClick={increment()}>+</button> */}
      </>
    );
  }
}

export default Number;
