import React, { Component } from "react";

class SignIn extends Component {
  state = { userName: "", rememberMe: false };

  handleChange = (e) => {
    // const input = event.target;
    // const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({
      userName: e.target.value,
      rememberMe:
        e.target.value === "checkbox" ? e.target.checked : e.target.value,
      //   userName: e.target.user,
      //   rememberMe: !this.state.rememberMe,
      // [input.name]: value,
    });
  };

    componentDidMount() {
      const rememberMe = localStorage.getItem("rememberMe") === "true";
      const userName = rememberMe ? localStorage.getItem("userName") : "";
      this.setState({ userName, rememberMe });
    }

  handleFormSubmit = () => {
    const { userName, rememberMe } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("userName", rememberMe ? userName : "");
  };

  render() {
    const { userName, rememberMe } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            User:
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              value={rememberMe}
              onChange={this.handleChange}
            />
            Remember Me
          </label>
          <button type={"submit"}>SignIn</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
