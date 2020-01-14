import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// functional component returns Searchbar component
class App extends React.Component {
  onSearchSubmit(term) {
    
  } 

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
};

export default App;
