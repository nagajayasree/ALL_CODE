import React, { Component, Fragment, Suspense, lazy } from "react";

//bundling
function sub(a, b) {
  return a - b;
}
console.log(sub(20, 14));

// import sub from "./Math";
// console.log(sub(40, 30));

//codeSplitting
// import("./CodeSplitting/Math").then((math) => {
//   console.log(math.sub(30, 25));
// });

//lazy
const Multiply = lazy(() => import("./Multiply.jsx"));
const Persons = lazy(() => import("./Persons"));

class CodeSplit extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div>Parent Component</div>
        <Suspense fallback={<div>Loading....</div>}>
          <section>
            {/* <Multiply /> */}
            <Persons />
          </section>
        </Suspense>
      </Fragment>
    );
  }
}

export default CodeSplit;
