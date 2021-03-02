import React, { Component, Fragment } from "react";

class PwdCheck extends Component {
  state = {
    // id: "",
    pwd: "jayasree",
  };
  //   handleChange = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  //   handleClick = () => {
  //     this.setState({ isError: !this.state.isError });
  //   };

  render() {
    if (this.state.pwd !== this.props.reEnterPwd) {
      throw new Error("Invalid Login");
    }
    return (
      <Fragment>
        <div>Password:{this.state.pwd}</div>
        <div>Re-Enter Password:{this.props.reEnterPwd}</div>
        <h3>Password Matched {this.props.children}</h3>
      </Fragment>
      //   <Fragment>
      //     <div>ErrorChecking</div>
      //     <div>
      //       <input
      //         type="text"
      //         value={id}
      //         name="id"
      //         onChange={this.handleChange}
      //       />
      //     </div>
      //     <div>
      //       <input
      //         type="text"
      //         value={pwd}
      //         name="pwd"
      //         onChange={this.handleChange}
      //       />
      //     </div>
      //     <div>
      //       <button onClick={this.handleClick}>Check</button>
      //     </div>
      //     <div>{this.props.children}</div>
      //   </Fragment>
    );
  }
}

export default PwdCheck;
