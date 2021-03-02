import React, { Component } from "react";
// import LoginPage from "../Login/LoginPage";

class BasicProgram extends Component {
  constructor(props) {
    super(props);
    let list = [
      { id: "1", desc: "jaya", descID: "123" },
      { id: "2", desc: "sree", descID: "456" },
      { id: "3", desc: "sai", descID: "789" },
      { id: "4", desc: "vimal", descID: "045" },
    ];
    this.state = {
      loginID: "",
      pwd: "",
      srdate: "",
      userList: list,
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    // console.log("aa", e.target.value);
    this.setState({ loginID: e.target.value });
  }

  handleChangePwd = (e) => {
    // console.log("pwd", this.state.pwd);
    this.setState({ pwd: e.target.value });
  };

  displayDate = (date) => {
    this.setState({ srdate: Date() });
  };

  handleSubmit = (e) => {
    alert("output:" + this.state.pwd);
    e.preventDefault();
  };

  selectChange = (e) => {
    console.log("sree", this.state.value);
    this.setState({ value: this.state.value });
  };

  render() {
    const { loginID, pwd } = this.state;
    // console.log(this.props.sridhar);
    // console.log(this.state.loginID);
    console.log("sss", this.state.value);
    return (
      <div>
        {/* <LoginPage sai={this.props.sridhar} handleChange={this.handleChange} /> */}
        <button onClick={this.displayDate}>Display Date</button>
        {this.state.srdate}
        <form onSubmit={this.handleSubmit}>
          <p>Hello React {5 + 5}</p>
          <p>{this.props.children}</p>
          <input
            className="input_1"
            type="text"
            value={loginID}
            onChange={this.handleChange}
          ></input>
          <input
            className="input_2"
            type="text"
            value={pwd}
            onChange={this.handleChangePwd}
          ></input>
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
        {this.state.userList.map((e) => {
          return <li>{e.id}</li>;
        })}

        <label>
          Selected :
          <select value={this.state.value || ""} onChange={this.selectChange}>
            {this.state.userList.map((e) => {
              // console.log(e);
              return (
                <option value={e.descID} key={e.descID}>
                  {e.desc}
                </option>
              );
            })}
          </select>
        </label>

        {/* {this.state.userList.map((e) => {
          return (
            <select className="form-control">
              <option>{e.desc}</option>
            </select>
          );
        })} */}
      </div>
    );
  }
}

export default BasicProgram;
