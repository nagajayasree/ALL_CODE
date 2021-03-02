import React, { Component } from "react";
import ItemCounter from "./Items";
import AgeCounter from "./Age";

class MainComp extends Component {
  state = {};
  render() {
    return (
      <>
        <ItemCounter id={1} desc={"No.of Items"} />
        <hr />
        <AgeCounter id={2} desc={"Age of a person"} />
      </>
    );
  }
}

export default MainComp;
