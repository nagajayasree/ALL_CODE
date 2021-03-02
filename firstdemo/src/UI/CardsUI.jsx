import React, { Component } from "react";
import "./CardUI.css";

class AdmissionsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="header">Admissions Info</div>
        <div className="row">
          <div className="card cards">
            <div className="col-sm-3 card_btm">
              <div className="card-columns card_up card_small">
                <div className="card bg-primary">
                  <div className="card-body">
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="class-header text-center content">
              Total Admissions
            </div>
            <div className="class-body text-center content">30</div>
          </div>

          <div className="card cards">
            <div className="col-sm-3 card_btm">
              <div className="card-columns card_up card_small">
                <div className="card bg-warning">
                  <div className="card-body">
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="class-header text-center">Total Admissions</div>
            <div className="class-body text-center">30</div>
          </div>

          <div className="card cards">
            <div className="col-sm-3 card_btm">
              <div className="card-columns card_up card_small">
                <div className="card bg-info">
                  <div className="card-body">
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="class-header text-center">Total Admissions</div>
            <div className="class-body text-center">30</div>
          </div>

          {/* <div className="col-sm-3 card_btm">
            <div className="card cards">
              <div className="card-columns card_up card_small">
                <div className="card bg-danger">
                  <div className="card-body">
                    <p className="card-text">Text</p>
                  </div>
                </div>
                <div className="class-header text-center">Total Admissions</div>
              </div>
            </div>
            <div className="class-body text-center">30</div>
          </div> */}
          <div className="card-body">
            <div className="card-text">
              <div className="icon">hhhhhhh</div>
              <p>This is a paragraph</p>
              <h1>20</h1>
            </div>
          </div>






        </div>



        <div className="row">
          <div className="card">
            <div className="card-header"></div>
            <div className="card-body">Total</div>
            <div className="card-footer">30</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdmissionsInfo;
