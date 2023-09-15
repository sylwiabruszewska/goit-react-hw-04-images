import { Component } from 'react';
import { ImageGallery, Searchbar } from './components/index';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery searchQuery={searchQuery} />
      </div>
    );
  }
}
