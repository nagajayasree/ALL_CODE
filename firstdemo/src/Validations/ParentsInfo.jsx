import React, { Component } from "react";

const ParentsInfo = (props) => {
  return (
    <>
      {/* <DetailContext.Consumer>
          {(name) => {
            return <div>{name}</div>;
          }}
        </DetailContext.Consumer> */}
      <div className="container">
        <form>
          <div className="fathName">
            <label htmlFor="father">
              Father's Name:
              <input
                type="text"
                value={props.fatherName}
                name="fatherName"
                onChange={props.onChange}
              />
            </label>
          </div>
          <div className="mothName">
            <label htmlFor="mother">
              Mother's Name:
              <input
                type="text"
                value={props.motherName}
                name="motherName"
                onChange={props.onChange}
              />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default ParentsInfo;
