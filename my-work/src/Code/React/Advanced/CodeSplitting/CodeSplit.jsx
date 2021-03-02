import React, { Component, Suspense } from "react";
import { add } from "./File";

// import("./File").then((op) => {
//   console.log(op.add(18, 10));
// });

const addOp = React.lazy(() => import("./File"));

const Add = (a, b) => {
  return a + b;
};

class CodeParent extends Component {
  state = {};
  render() {
    // console.log(add(10, 12));
    // console.log(addOp);
    console.log(Add(1, 43));
    return (
      <>
        <div>This is a Parent Component</div>
        <Suspense>
          <addOp a="1" b="2" />
        </Suspense>
      </>
    );
  }
}

export default CodeParent;
