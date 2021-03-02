import React, { Component } from "react";

const Addr = (props) => {
  return (
    <>
      <div className="container">
        <div className="address">
          <label htmlFor="addr">
            Address:
            <input
              type="text"
              value={props.address}
              name="address"
              onChange={props.onChange}
            />
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </div>
    </>
  );
};

export default Addr;

// class Addr extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (

//     );
//   }
// }

// export default Addr;
