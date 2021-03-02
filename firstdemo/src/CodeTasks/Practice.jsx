import React, { Component } from "react";

class Practice extends Component {
  constructor(props) {
    const numbers = ["31", "25", "63", "74", "15", "27"];
    const empList = [
      {
        id: 1,
        ename: "Lalitha",
        empId: 1234,
        age: 34,
        isWorking: true,
      },
      {
        id: 2,
        ename: "Sunitha",
        empId: 26,
        isWorking: false,
      },
      {
        id: 3,
        ename: "Rahul",
        empId: 30,
        isWorking: false,
      },
      {
        id: 4,
        ename: "Karthik",
        empId: 24,
        isWorking: true,
      },
    ];
    super(props);
    this.state = {
      name: "Raju",
      Employees: empList,
      Numbers: numbers,
      isActive: false,
      data: "",
    };
  }

  handleClick = (e) => {
    this.setState({ name: "Welcome" + " " + this.state.name });
  };

  handleClick = (e) => {
    this.setState({ data: e.target.value });
  };

  render() {
    const { Employees, Numbers } = this.state;
    return (
      <div>
        <h1>{this.props.student}</h1>
        <h1>{this.state.name}</h1>
        <button onClick={this.handleClick}>Click</button>
        <p>{this.props.children}</p>
        <div>
          Map:
          {Employees.map((e) => {
            return (
              <ul key={e.id}>
                <li>{e.ename}</li>
              </ul>
            );
          })}
        </div>
        <div>
          Filter:
          {Numbers.filter((e) => {
            // console.log(e);
            return <li>{e < 30}</li>;
          })}
        </div>
        <div>
          forEach:
          {Employees.forEach((e) => {
            return <li>{e.age * 3}</li>;
          })}
        </div>
        <div>
          Reduce:
          {Numbers.reduce((num) => {
            console.log(num);
            let sum = 0;
            return <p>{(sum = num + 0)}</p>;
          })}
        </div>
        {this.state.isActive ? <p>Active</p> : <p>InActive</p>}
        <div>
          <input type="text" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default Practice;
