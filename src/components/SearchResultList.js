import React from 'react';

import '../style/style.scss';

export default class SearchResultList extends React.Component {

  render() {
    const {renderResults} = this.props;
    return (
        <React.Fragment>
      <ul> {renderResults()}
      </ul>
      </React.Fragment>
    );
  }
}