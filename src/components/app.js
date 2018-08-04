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
    console.log('submitted')
    let url = `https://www.reddit.com/r/${this.state.search}.json?limit=${this.state.resultCount}`;
    return superagent.get(url)
    .then(response => {
        this.setState({results: response.body.data.children});
        console.log('Results received');
        this.resultsRender();
      })
      .catch(error => {
        this.setState({results: []});
      });
      }

      resultsRender() {
        return this.state.results.map((result, index) => (
          <li key={index}>
            <a target="blank" href={result.data.url}>{result.data.title}</a>
            <p>Up Votes: {result.data.ups}</p>
          </li>
        ));
      }

  render() {
    return (
        <React.Fragment>
        <h1>Reddit Search App</h1>
        <SearchForm searchMethod={this.redditSubmit} handleSearch={this.handleSearch} handleNum={this.handleNum}/>
        <SearchResultList renderResults={this.resultsRender}/>
      </React.Fragment>
    );
    }
    }