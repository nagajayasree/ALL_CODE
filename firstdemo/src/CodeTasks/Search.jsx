import React, { Component } from "react";
import "./Search.css";

class SearchFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [
        { id: 1, name: "Apples", price: "140/-" },
        { id: 2, name: "Grapes", price: "120/-" },
        { id: 3, name: "Bananas", price: "50/-" },
        { id: 4, name: "Papayas", price: "50/-" },
        { id: 5, name: "Oranges", price: "100/-" },
        { id: 6, name: "Mangoes", price: "150/-" },
        { id: 7, name: "PineApples", price: "80/-" },
        { id: 8, name: "Kiwis", price: "120/-" },
        { id: 9, name: "DragonFruits", price: "50/-" },
        { id: 10, name: "Jackfruits", price: "150/-" },
      ],
      search: "",
      //   filteredFruits: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      search: e.target.value,
    });
    // console.log("input", e.target.value);
  };

  render() {
    let filteredFruits = this.state.fruits.filter((fruit) => {
      return (
        fruit.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    // console.log(filteredFruits);
    return (
      <div className="container">
        <h1>Search Filter</h1>
        <div className="row">
          <div className="col-sm-6">
            <input
              className="form-control searchField"
              type="text"
              value={this.state.search}
              onChange={this.onChangeHandler}
            />
            <i className="fa fa-search search_icon" aria-hidden="true"></i>
          </div>
          <div className="col-sm-4">
            <input className="form-control inputField" type="text" />
          </div>
          <div className="col-sm-2">
            <button className="btn">Submit</button>
          </div>
        </div>
        <div className="row">
          <div className="fruitList">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Price Per Kg</th>
                </tr>
              </thead>
              {filteredFruits
                // .filter((e) => e.name.includes("G"))
                .map((fruit) => {
                  return (
                    //   <ul className="list-group" key={fruit.id}>
                    //     <ol
                    //       className="list-group-item list-group-item-action"
                    //       key={fruit.id}
                    //     ></ol>
                    //     </ul>
                    <tbody key={fruit.id}>
                      <tr>
                        <td>{fruit.id}</td>
                        <td>{fruit.name}</td>
                        <td>{fruit.price}</td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFilter;
