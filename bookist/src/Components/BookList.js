

import React, { Component } from "react";
import Shelf from './Shelf'
import './BookList.css'

export default class BookList extends Component {
  constructor() {
    super();
this.state={

}
  }

  render() {
    let mappedBooks = this.props.books.map((element, index) => {
      return (
        <div className="Box">
        <div>
          <p
            key={element.id}
          >{`Author:${element.author} Title:${element.title}`}</p>
          <img className="Image"
            src={`${element.img}`}
            alt={element.title}
            onClick={() => this.props.addToShelf(element.title)}
         //  onClick={this.props.addToShelf(element.title)}
          
        // onClick={() => this.addToShelf(element.title)}
          />
        </div>
        </div>
      );
    });
    return (
      <div>
      
        <h2>List</h2>
        <p>{mappedBooks}</p>
      </div>
    );
  }
}


