import React from "react";

function Child(props) {
  if (props.student == "jayasree") {
    throw new Error("not a student");
  }
  return <div>Child {props.student}</div>;
}

export default Child;
