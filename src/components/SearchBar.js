import React from 'react';

// class based component because we need to use STATE eventually
class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form"> 
          <label>Image Search</label>
          {/* onInputChange is a callback function. We leave off the parens so we don't call the function when we don't want it to be called. Never add parens when passing the function to the event. */}
          <input type="text" onChange={this.onInputChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
