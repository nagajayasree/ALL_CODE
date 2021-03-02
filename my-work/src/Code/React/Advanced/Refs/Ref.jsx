import React, { Component } from "react";

class RefComp1 extends Component {
  constructor() {
    super();
    this.state = { task: "", name: "" };
    // this.myText = React.createRef();
  }

  //without using refs
  changeTask = (e) => {
    this.setState({ task: e.target.value });
  };

  //using refs
  changeName = () => {
    this.setState({ name: this.refs.Name.value });
  };

  // focusInput = () => {
  //   this.myText.current.focus();
  // };

  render() {
    return (
      <>
        {/* <input type="text" ref={this.myText} />
        <input
          type="button"
          value="Focus the Input"
          onClick={this.focusInput}
        />
        <br /> */}
        Todo List
        <div>
          <input type="text" onChange={this.changeTask} />
          <br />
          <em>{this.state.task}</em>
        </div>
        <br />
        <div>
          Name
          {/* using refs */}
          <input type="text" ref="Name" onChange={this.changeName} />
          <br />
          <em>{this.state.name}</em>
        </div>
      </>
    );
  }
}

export default RefComp1;
