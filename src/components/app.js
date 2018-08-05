import React from 'react';
import superagent from 'superagent';

import SearchForm from './SearchForm.js';
import SearchResultList from './SearchResultList.js'

import '../style/style.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        search:'',
        resultCount: '',
        results: [],
        error: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleNum = this.handleNum.bind(this);
    this.redditSubmit = this.redditSubmit.bind(this);
    this.resultsRender = this.resultsRender.bind(this);
  }

  handleSearch(e) {
    let search = e.target.value;
    this.setState({search});
  }

  handleNum(e) {
    let resultCount = e.target.value;
    this.setState({resultCount});
  }

  redditSubmit(e) {
    e.preventDefault();
    let url = `https://www.reddit.com/r/${this.state.search}.json?limit=${this.state.resultCount}`;
    return superagent.get(url)
    .then(response => {
        this.setState({
        results: response.body.data.children,
        error: '',
      });
        this.resultsRender();
      })
      .catch(error => {
        this.setState({
          results: [],
          error: 'error',});
      });
      }

      resultsRender() {
        return this.state.results.map((result, index) => (
          <li key={index}>
            <a target="blank" href={result.data.url}>{result.data.title}
            <p>Up Votes: {result.data.ups}</p></a>
          </li>
        ));
      }

  render() {
    return (
        <React.Fragment>
        <h1>Reddit Search App</h1>
        <SearchForm err={this.state.error} searchMethod={this.redditSubmit} handleSearch={this.handleSearch} handleNum={this.handleNum}/>
        <SearchResultList renderResults={this.resultsRender}/>
      </React.Fragment>
    );
    }
    }