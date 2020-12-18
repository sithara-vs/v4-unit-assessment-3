import React, { Component } from "react";
export default class Shelf extends Component {
  constructor() {
    super();
  }
  render() {
    let mappedTitles = this.props.shelf.map((element, index) => {
      return (
        <div>
          <p key={index}>{`Title:${element}`}</p>
        </div>
      );
    });

    return (
      <div>
        <h2>Shelf</h2>
        <p>{mappedTitles}</p>
        <button onClick={() => this.props.clearShelf()}>Clear Shelf</button>
 
      </div>
    );
  }
}
