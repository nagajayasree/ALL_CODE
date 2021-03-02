import React, { Component } from "react";
import "./LoginPage.css";
import LoginPage2 from "./LoginPage2";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    let ulist = [
      { uid: "1", uname: "jaya", descID: "123" },
      { uid: "2", uname: "sree", descID: "456" },
    ];
    this.state = {
      userId: "",
      password: "",
      matchPwd: "abcxyz",
      showPwd: true,
      login: false,
      userList: ulist,
      name: "welcome1",
      name2: "welcome2",
    };
  }

  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    if (this.state.password === this.state.matchPwd) {
      this.setState({ login: true });
    } else {
      alert("Wrong Password!");
    }
    // alert("You are loggedin" + " " + this.state.userId);
  };

  handleEye = () => {
    this.setState({ showPwd: !this.state.showPwd });
  };

  render() {
    if (this.state.login) {
      return <LoginPage2 userList={this.state.userList} />;
    }
    return (
      <div className="container-fluid main_page">
        {/* <LoginPage2 userList={this.state.userList} /> */}
        <div className="row">
          <div className="header_block">
            <div className="col-sm-4 col-xs-6">
              {this.state.name !== "welcome" ? (
                <h1 id="greet">WELCOME!</h1>
              ) : (
                <h1>End</h1>
              )}
              <p id="info">React Developer</p>
              <div className="phone_content">
                <p id="phone_info">Student</p>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-xs-6">
            <div className="login_block">
              <form>
                <h4 className="signin">SIGN IN</h4>
                <div className="form-group">
                  <div className="input_tag">
                    <label htmlFor="uname" placeholder="Enter Id">
                      UserId:
                      <input
                        className="input_tag1"
                        type="password"
                        value={this.state.userId}
                        name="userId"
                        onChange={this.handlechange}
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input_tag">
                    <label htmlFor="pwd" placeholder="Enter Password">
                      Password:
                      <input
                        className="input_tag2"
                        type={this.state.showPwd === true ? "password" : "text"}
                        value={this.state.password}
                        name="password"
                        onChange={this.handlechange}
                      />
                      {this.state.showPwd ? (
                        <i
                          className="fas fa-eye eye_icon"
                          onClick={this.handleEye}
                        ></i>
                      ) : (
                        <i
                          className={
                            this.state.showPwd
                              ? ""
                              : "fas fa-eye-slash eye_icon eye_color "
                          }
                          onClick={this.handleEye}
                        ></i>
                      )}
                      {/* {this.state.password === "abcxyz" ? (
                        <div>
                        </div>
                      ) : (
                        <div>
                          <input
                            className="input_tag2"
                            type="password"
                            value={this.state.password}
                            name="password"
                            onChange={this.handlechange}
                          />
                        </div>
                      )} */}
                      <span></span>
                    </label>
                  </div>
                  <div className="button_login">
                    <input
                      type="button"
                      value="Login"
                      className="button_tag"
                      onClick={this.handleClick}
                    />
                    {/* <button className="button_tag">Login</button> */}
                  </div>
                  <a className="forgotpwd" href="#">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
