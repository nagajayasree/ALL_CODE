import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {},
      checkName: null,
      checkPwd: null,
    };
  }

  changeUname = (e) => {
    this.setState({ username: e.target.value });
    if (this.state.username.length + 1 < 3) {
      this.setState({ checkName: "username is too short" });
    } else {
      this.setState({ checkName: null });
    }
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePwd = (e) => {
    this.setState({ password: e.target.value });
    if (this.state.password.length + 1 < 8) {
      this.setState({ checkPwd: "Should contain 8 Characters" });
    } else {
      this.setState({ checkPwd: null });
    }
  };

  // validate = () => {
  //   const errors = {};
  //   let { account } = this.state;
  //   if (account.username.length + 1 < 3) {
  //     errors.username = "Username is too short";
  //   }
  //   if (account.password !== "number") {
  //     // this.setState({ checkPwd: null });
  //     errors.password = "Password should be number";
  //   }
  // };

  render() {
    // const { errors } = this.state;
    return (
      <>
        <h3>User Login</h3>
        <p>{this.state.checkName}</p>
        <p>{this.state.checkPwd}</p>
        <form action="">
          <div>
            <label htmlFor="uname">
              UserName:
              <input onChange={this.changeUname} />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input type="email" />
            </label>
          </div>
          <div>
            <label htmlFor="pwd">
              Password:
              <input onChange={this.changePwd} />
            </label>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
