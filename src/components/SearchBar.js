import React from 'react';

// class based component because we need to use STATE eventually
class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    
    this.props.onSubmit(this.state.term);
  }


  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form"> 
          <label>Image Search</label>
          {/* onInputChange is a callback function. We leave off the parens so we don't call the function when we don't want it to be called. Never add parens when passing the function to the event. */}
          <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
