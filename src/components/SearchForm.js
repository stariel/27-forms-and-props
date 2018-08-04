import React from 'react';

import '../style/style.scss';

export default class SearchForm extends React.Component {

  render() {
    const {handleSearch, handleNum, searchMethod} = this.props;
    return(
      <React.Fragment>
        <form onSubmit={searchMethod}>
          <input type="text" onChange={handleSearch} placeholder="Search" />
          <input type="number" onChange={handleNum} placeholder="1-100" min="1" max="100" />
          <button type='submit'>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}