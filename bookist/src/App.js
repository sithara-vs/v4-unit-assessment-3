import React from "react";

import "./App.css";
import Header from "./Components/Header";
import BookList from "./Components/BookList";
import Shelf from "./Components/Shelf";
import data from "./data.js";
import SearchBar from "./Components/SearchBar";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      books: [...data],
      shelf: [],
    };
    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.reset = this.reset.bind(this)
  }
  addToShelf(addTitle) {
    //this.setState({shelf:this.state.shelf.push(addTitle)})
    this.setState({ shelf: [...this.state.shelf, addTitle] });
  }
  clearShelf() {
    this.setState({ shelf: [] });
  }

  filterBooks(input) {
    
    const filteredBooks = this.state.books.filter((element, index) => {
      if (element.title.includes(input) || element.author.includes(input))
      return element
    })
    this.setState({
      books: filteredBooks,
    });
  }
  reset(input){
    this.setState({books:[data]});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>
        <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} />
        <BookList books={this.state.books} addToShelf={this.addToShelf} />
      </div>
    );
  }
}

export default App;




