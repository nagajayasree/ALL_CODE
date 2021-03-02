import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import BtechFrns from "./BtechFrns";

class SchFrns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [{ head1: "No." }, { head2: "Name" }, { head3: "RelationShip" }],
      rows: [
        { row: 1, studentName: "abc", relation: "School Friend" },
        { row: 2, studentName: "xyz", relation: "School Friend" },
        { row: 3, studentName: "lmn", relation: "School Friend" },
        { row: 4, studentName: "stu", relation: "School Friend" },
      ],
      Heads: [],
      Rows: [],
    };
  }

  componentDidMount() {
    let headings = [];
    let rowVals = [];
    {
      this.state.headers.map((h) => {
        let headerObj = {};
        headerObj.value1 = h.head1;
        headerObj.value2 = h.head2;
        headerObj.value3 = h.head3;
        headerObj.value4 = h.head4;
        headerObj.value5 = h.head5;
        headerObj.value6 = h.head6;
        headings.push(headerObj);
      });
      this.passHeaders(headings);
    }
    {
      this.state.rows.map((r) => {
        let rowObj = {};
        rowObj.value1 = r.row;
        rowObj.value2 = r.studentName;
        rowObj.value3 = r.relation;
        rowVals.push(rowObj);
      });
      this.passRowVals(rowVals);
    }
  }

  passHeaders = (headings) => {
    this.setState({ Heads: headings });
  };

  passRowVals = (rowVals) => {
    this.setState({ Rows: rowVals });
  };

  render() {
    return (
      <>
        <p>School Friends Table</p>
        <table className="table table-bordered">
          <thead>
            <TableHead headers={this.state.Heads} />
          </thead>
          <tbody>
            <TableRow rows={this.state.Rows} />
          </tbody>
        </table>
        <Link to="/BtechFrns">
          <button
            style={
              ({ border: "none" },
              { borderRadius: "5px" },
              { backgroundColor: "skyblue" })
            }
          >
            Next
          </button>
        </Link>
      </>
    );
  }
}

export default SchFrns;
