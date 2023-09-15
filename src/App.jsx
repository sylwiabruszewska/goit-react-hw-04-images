import { useState } from 'react';

import { ImageGallery, Searchbar } from './components/index';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = query => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery searchQuery={searchQuery} />
    </div>
  );
};
