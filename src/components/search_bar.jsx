import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   term: ""
    // };
  }

  shouldComponentUpdate(nextPropsa, nextState) {
    return false;
  }

  handleUpdate = (event) => {
    // debugger
    // this.setState({
    //   term: event.target.value
    // });
    // console.log(this.state.term);
    this.props.searchFunction(event.target.value);
  };

  render() {
    console.log("search bar render");
    return (
      <input
        // value={this.state.term}
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
