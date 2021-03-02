import React from "react";
import { Col } from "react-bootstrap";

const Input = ({ name, label, onChange, value, error, type }) => {
  return (
    <>
      <Col sm={12}>
        <label htmlFor={name}>{label}</label>
        <input
          onChange={onChange}
          value={value}
          type={type}
          name={name}
          id={name}
          className="form-control"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </Col>
    </>
  );
};

export default Input;

export const Textarea = ({ name, label, error, ...rest }) => {
  return (
    <>
      <Col sm={12}>
        <label htmlFor={name}>{label}</label>
        <textarea
          {...rest}
          className="form-control"
          id="feed"
          name={name}
          maxLength="100"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </Col>
    </>
  );
};
