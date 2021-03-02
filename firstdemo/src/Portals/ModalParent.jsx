import React, { Component } from "react";
import Modal from "./Modal";
import ModalChild from "./ModalChild";

class ModalParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
    };
  }

  handleClick = () => {
    this.setState({ click: this.state.click + 1 });
  };

  render() {
    return (
      <>
        <p>Modal Parent</p>
        <div onClick={this.handleClick}>
          <p>No.of Clicks:{this.state.click}</p>
          <Modal>
            <ModalChild />
          </Modal>
        </div>
      </>
    );
  }
}

export default ModalParent;
