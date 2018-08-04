import React from 'react';
import superagent from 'superagent';

import SearchForm from './SearchForm.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <SearchForm/>
      </main>
    );
  }
}