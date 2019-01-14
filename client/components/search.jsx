import React from 'react';
import axios from 'axios';

// import Image from 'react-svg-loader!../Images/Basket.svg';

class Search extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.searches);
    this.state = {
      query: '',
      previous: [],
      toggleDrop: false
    };
    this.showSearches = this.showSearches.bind(this);
    console.log('this is the searches', props.searches);
    // props.searches.filter((search, i) => i < 5),
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/product/searches', { params: {} })
      .then(({ data }) => {
        console.log('here is the response', data);
        this.setState({
          previous: data
            .map(search => {
              return search.search;
            })
            .filter((search, i) => i < 5)
        });
        console.log('inside app', this.state.previous);
      })
      .catch(err => {
        console.error('Something went wrong', err);
      });
  }
  // postSearch(e) {
  //   axios.post('/product',)
  // }
  showSearches(e) {
    this.setState({
      toggleDrop: !this.state.toggleDrop
    });
    console.log('selected');
  }
  render() {
    console.log(this.state.previous);
    return (
      <form
        className="Search"
        onPointerEnter={this.showSearches}
        onPointerLeave={this.showSearches}
      >
        <div>
          <div />
          <input
            className="searchForm"
            type="text"
            placeholder="Search"
            id="search"
          />
          {this.state.toggleDrop ? (
            <div id="searchDrop">
              <div>Previous Searches</div>
              {this.state.previous.map((search, i) => {
                return <div key={i}>{search}</div>;
              })}
            </div>
          ) : (
            <div />
          )}
        </div>
      </form>
    );
  }
}

export default Search;
