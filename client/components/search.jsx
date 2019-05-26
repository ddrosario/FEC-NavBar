import React from 'react';
import axios from 'axios';

// import Image from 'react-svg-loader!../Images/Basket.svg';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      previous: [],
      toggleDrop: false,
    };
    this.showSearches = this.showSearches.bind(this);
    this.fetchSearches = this.fetchSearches.bind(this);
  }
  componentDidMount() {
    this.fetchSearches();
  }
  async fetchSearches () {
    try {
      const { data } = await axios.get('/product/searches', { params: {} });
      this.setState({
        previous: data.map(search => search.search)
                      .filter((_search, i) => i < 5)
      });
    } catch (err) {
      console.error('Could not fetch: ', err);
    }
  }
  showSearches(e) {
    this.setState({
      toggleDrop: !this.state.toggleDrop
    });
  }
  render() {
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
              {this.state.previous.map((search, i) => <div key={i}>{search}</div>)}
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
