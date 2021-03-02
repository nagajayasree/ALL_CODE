import React, { Component, PureComponent } from "react";

class PC extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: [{ name: "books" }, { name: "pencils" }, { name: "pens" }],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((e) => {
        return { itemsList: [...e.itemsList] };
      });
    }, 2000);
  }

  render() {
    // console.log("list rendered");
    return (
      <>
        PC
        {this.state.itemsList.map((e, i) => {
          return <Item key={i} item={e.name} />;
        })}
      </>
    );
  }
}

export class Item extends PureComponent {
  state = {};
  render() {
    console.log("item added");
    return <div>{this.props.item}</div>;
  }
}

export default PC;
