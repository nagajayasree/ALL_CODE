import React, { Component } from "react";

const ContextComp = React.createContext("red");
ContextComp.displayName = "MyContextComp";

class MainComp extends Component {
  render() {
    return (
      <div>
        <SubComp1 />
      </div>
    );
  }
}

export default MainComp;

const SubComp1 = () => {
  return (
    <>
      <p>Sub-Component 1</p>
      <ContextComp.Provider value="blue">
        <SubComp2 />
        <SubComp3 />
      </ContextComp.Provider>
    </>
  );
};

const SubComp2 = () => {
  return (
    <>
      <p>Sub-Component 2</p>
      {/* <ContextComp.Consumer>
        {(clr) => {
          return <div>Color {clr}</div>;
        }}
      </ContextComp.Consumer> */}
    </>
  );
};

const SubComp3 = () => {
  return (
    <>
      <p>Sub-Component 3</p>
      <ContextComp.Consumer>
        {(color) => {
          return <div>Color {color}</div>;
        }}
      </ContextComp.Consumer>
    </>
  );
};
