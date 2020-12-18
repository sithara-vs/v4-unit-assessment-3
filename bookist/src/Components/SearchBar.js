import React from "react";
export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  console.log(this.state.input)

};
handleClear(){
this.setState({input:""})
}
  

  render() {
    return (
      <div>
        <input
          //  value={this.state.input}
          placeholder="Enter Search Item"
          onChange={e => this.handleChange(e)}
          value={this.state.input}
        />
        <button onClick={() => this.props.filterBooks(this.state.input)}>Search</button>
        <button onClick={() => this.props.reset(this.state.input)}>Clear Search</button>
      </div>
    );
  }
}


