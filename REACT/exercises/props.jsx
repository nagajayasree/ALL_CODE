import React, { Component } from "react";

class VacancySign extends Component {
  render() {
    return <div>{this.VacancyCheck()}</div>;
  }

  VacancyCheck(props) {
    let hasvacancy = this.props;
    return hasvacancy = false ? "Vacancy" : "NoVacancy";
  }
}

export default VacancySign;
