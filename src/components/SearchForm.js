import React from 'react';

export default class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        search:'',
        results: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchMethod(this.state.search);
  }

  handleSearch(e) {
    let search = e.target.value;
    this.setState({search});
  }

  handleSearch(e) {
    let results = e.target.value;
    this.setState({results});
  }

  render() {
    return(
      <div className="search">

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleSearch} placeholder="Search" />
          <input onChange={this.handleNum} placeholder="1-100" min="1" max="100" />
        </form>

      </div>
    );
  }

}