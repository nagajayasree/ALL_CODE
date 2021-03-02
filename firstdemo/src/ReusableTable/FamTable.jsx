import React, { Component } from "react";
import { Link } from "react-router-dom";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import SchFrns from "./SchFrns";

class FamTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        { slno: "Sl.No" },
        { studentName: "Name" },
        { relationship: "RelationShip" },
        { age: "Age" },
      ],
      rows: [
        { row: 1, name: "prq", relation: "father", age: "34" },
        { row: 2, name: "npr", relation: "mother", age: "30" },
        { row: 3, name: "npr", relation: "brother" },
        { row: 4, name: "acr", relation: "sister" },
      ],
      headerList: [],
      rowList: [],
    };
  }

  componentDidMount() {
    let list = [];
    let values = [];
    {
      this.state.headers.map((h) => {
        let headerObj = {};
        headerObj.value1 = h.slno;
        headerObj.value2 = h.studentName;
        headerObj.value3 = h.relationship;
        headerObj.value4 = h.age;
        list.push(headerObj);
      });
      this.tableHeader(list);
      console.log("list", list);
      // return list;
    }
    {
      this.state.rows.map((r) => {
        let rowsObj = {};
        rowsObj.value1 = r.row;
        rowsObj.value2 = r.name;
        rowsObj.value3 = r.relation;
        rowsObj.value4 = r.age;
        values.push(rowsObj);
      });
      this.tableRows(values);
    }
  }

  tableHeader = (list) => {
    this.setState({ headerList: list });
    console.log("listTable", list);
  };

  tableRows = (values) => {
    this.setState({ rowList: values });
  };

  render() {
    console.log("header", this.state.headers);
    console.log("headerList", this.state.headerList);
    return (
      <>
        <p>Family Table</p>
        <table className="table table-bordered">
          <thead>
            <TableHead headers={this.state.headerList} />
          </thead>
          <tbody>
            <TableRow rows={this.state.rowList} />
          </tbody>
        </table>
        <Link to="/SchFrns">
          <button
            style={
              ({ bordered: "none" },
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

export default FamTable;
