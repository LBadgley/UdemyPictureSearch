import React from 'react';
import SearchBar from './SearchBar';

// functional component returns Searchbar component
const App = () => {
  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar />
    </div>
  );
};

export default App;
