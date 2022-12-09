import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.state = {
      term: "",
    };
  }
  search = () => {
    this.props.onSearch(this.state.term);
  };
  handleTermChange = (event) => {
    this.setState({ term: event.target.value });
  };
  handleKeyDown = event => {
    if (event.key === "Enter"){
      this.search()
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
          onKeyDown={this.handleKeyDown}
        />
        <button className="SearchButton" onClick={this.search}>
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
