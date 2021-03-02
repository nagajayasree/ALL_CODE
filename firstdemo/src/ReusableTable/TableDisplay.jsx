import React, { Component } from "react";
import {
  // BrowsererRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FamTable from "./FamTable";
import SchFrns from "./SchFrns";
import BtechFrns from "./BtechFrns";

class TableDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <Link to="/">
          <button>Refresh</button>
        </Link> */}
        {/* <BrowserRouter> */}
        <button>Refresh</button>
        <Switch>
          <Route exact path="/" component={FamTable} />
          <Route path="/SchFrns" component={SchFrns} />
          <Route path="/BtechFrns" component={BtechFrns} />
          <Route />
        </Switch>
        {/* </BrowserRouter> */}
      </>
    );
  }
}

export default TableDisplay;
