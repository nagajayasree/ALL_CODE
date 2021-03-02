import * as React from "react";

export interface MathOpsProps {
  operation?: string;
  c?: number;
}

export interface MathOpsState {
  a: number;
  b: number;
}

export class MathOps extends React.Component<MathOpsProps, MathOpsState> {
  constructor(props: MathOpsProps) {
    super(props);
    this.state = { a: 12, b: 1 };
  }
  render() {
    return (
      <>
        Result is :{" "}
        {this.props.operation === "add"
          ? this.state.a + this.state.b
          : this.props.operation === "sub"
          ? this.state.a - this.state.b
          : "This operation is not supported"}
      </>
    );
  }
}

export class Add extends React.Component<MathOpsProps, MathOpsState> {
  constructor(props: MathOpsProps) {
    super(props);
    this.state = { a: 24, b: 4 };
  }
  render() {
    return (
      <>
        <div>
          The total is: {this.state.a + this.state.b} + {this.props.c}
        </div>
      </>
    );
  }
}
