import { useState } from 'react';
import { useModal } from 'hooks/useModal';

import { ImageGallery, Searchbar, Modal } from './components/index';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { selectedImage, isModalOpen, openModal, closeModal } = useModal();

  const handleSearch = query => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery searchQuery={searchQuery} onImageClick={openModal} />
      {isModalOpen && (
        <Modal
          largeImageURL={selectedImage.largeImageURL}
          tags={selectedImage.tags}
          onClick={closeModal}
        />
      )}
    </div>
  );
};
