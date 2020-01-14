import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// place async in front of the method name and the await in front of the request
// functional component returns Searchbar component
class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios
    .get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 17400cfee6736fe0dded86f931f6225447e7d0a8daa0778e090dfc0bc1d171a0"
      }
    });

    console.log(response.data.results);
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
