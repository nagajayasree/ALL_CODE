import React, { Component } from "react";

class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greet: "",
      count: 0,
      message: "hello",
      date: new Date(),
    };
  }

  // componentWillMount() {
  //   console.log("compWilMount");
  // }

  componentDidMount() {
    this.setState({ greet: "Hello" });
    console.log("componentMounted");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedState");
  }

  shouldComponentUpdate() {
    console.log("shouldCompUpdate");
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshot");
  }

  componentDidUpdate() {
    console.log("componentUpdated");
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleReset);
    console.log("compWillUnmount");
  }

  handleIncrement = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };

  handleReset = (e) => {
    console.log("componentWillUnMount");
  };

  render() {
    console.log("render");
    return (
      <div>
        <div>Hello React</div>
        Count {this.state.count}
        <div>
          <button onClick={this.handleIncrement}>Click</button>
        </div>
        <div>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default LifeCycleMethods;
