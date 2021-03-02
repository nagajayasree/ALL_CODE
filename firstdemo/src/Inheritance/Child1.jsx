import React, { Component } from "react";
import Child2 from "./Child2";

class Child1 extends Component {
  state = {
    scriptLang: "JavaScript",
  };
  handleScripting = () => {
    this.setState({ scriptLang: "A lang with series of commands" });
  };

  render() {
    const { markupLang, handleChange } = this.props;
    return (
      <div>
        {/* receiving,handling props from parent comp*/}
        <div>Markup Language:{markupLang}</div>
        <button onClick={handleChange}>Click Here</button>
        <Child2
          scriptLang={this.state.scriptLang}
          handleChange={this.handleScripting}
        />
      </div>
    );
  }
}

export default Child1;
