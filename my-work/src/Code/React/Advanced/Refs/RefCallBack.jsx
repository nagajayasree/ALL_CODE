import React, { Component } from "react";

class RefCallBack extends Component {
  constructor(props) {
    super(props);
    this.input = null;
    this.setInputRef = (ele) => {
      this.input = ele;
    };

    this.inputFocus = () => {
      if (this.input) {
        this.input.focus();
      }
    };
  }

  componentDidMount() {
    this.inputFocus();
  }

  render() {
    return (
      <>
        <div>
          <input type="text" ref={this.setInputRef} />
          <input type="button" value="Focus" onClick={this.inputFocus} />
        </div>
      </>
    );
  }
}

export default RefCallBack;
