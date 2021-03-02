import React, { Component } from "react";
// import InputFields from "./InputFields";

class FamilyTable2 extends Component {
  constructor(props) {
    const info = [
      {
        refNo: 1,
        Standard: "VI",
        rollNo: 12,
        age: 11,
      },
      {
        refNo: 2,
        Standard: "V",
        rollNo: 9,
        age: 10,
      },
      {
        refNo: 3,
        Standard: "X",
        rollNo: 34,
        age: 16,
      },
      {
        refNo: 4,
        Standard: "IV",
        rollNo: 26,
        age: 9,
      },
      {
        refNo: 5,
        Standard: "IX",
        rollNo: 22,
        age: 15,
      },
    ];
    super(props);
    this.state = {
      Info: info,
    };
  }
  render() {
    return (
      <div className="container">
          <i className="fa fa-arrow-left"></i>
        {/* <InputFields /> */}
        <div className="col-sm-12">
          <table className="table table-hover table-borderless">
            <thead>
              <th>Name</th>
              <th>Standard</th>
              <th>RollNo</th>
              <th>Marks</th>
              <th>Percentage</th>
              <th>Grade</th>
            </thead>
            <tbody>
              <tr className="table_row">
                <td>Rishi</td>
                <td>VI</td>
                <td>22</td>
                <td>586</td>
                <td>98</td>
                <td>A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FamilyTable2;
