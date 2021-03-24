import React, { Component } from "react";

class Search extends Component {
  render() {

    return <input type="text" className="form-control mb-3 w-50"  onChange={this.props.onchangeSearch}/>;
  }
}

export default Search;
