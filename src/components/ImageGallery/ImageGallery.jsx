import { useState, useRef, useEffect } from 'react';

import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

import { Button, ImageGalleryItem, Loader } from '../index';
import { getImages } from 'services/api';

export const ImageGallery = ({ searchQuery, onImageClick }) => {
  const listRef = useRef();

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // pobieranie obrazków na nowe query
  const fetchImages = async (query, page) => {
    setIsLoading(true);
    setScrollPosition(0);

    try {
      const response = await getImages(query, page);
      const data = response.data.hits;
      const totalPages = Math.ceil(response.data.total / 12);
      setImages([...data]);
      setPage(1);
      setTotalPages(totalPages);
    } catch (error) {
      console.log('error');
    } finally {
      setIsLoading(false);
    }
  };

  // pobieranie obrazków na nowe page
  const loadMoreImages = async (query, page) => {
    setIsLoading(true);

    try {
      const response = await getImages(query, page);
      const data = response.data.hits;
      setImages([...images, ...data]);
      handleScroll();
    } catch (error) {
      console.log('error');
    } finally {
      setIsLoading(false);
    }
  };

  // pozycja scroll
  const handleScroll = () => {
    const newScrollPosition =
      listRef.current.scrollHeight - listRef.current.scrollTop;
    setScrollPosition(newScrollPosition);
  };

  // button load more handler - page + 1
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  // efekt dla query i page
  useEffect(() => {
    if (searchQuery && page === 1) {
      fetchImages(searchQuery, page);
    } else if (page > 1) {
      loadMoreImages(searchQuery, page);
    }
  }, [searchQuery, page]);

  // efekt dla ładowania nowych obrazków
  useEffect(() => {
    if (images.length !== 0) {
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [images, scrollPosition]);

  return (
    <div>
      <ul className={styles.gallery} ref={listRef}>
        {images.map(({ id, ...rest }) => (
          <ImageGalleryItem
            key={id}
            {...rest}
            onClick={onImageClick}
          ></ImageGalleryItem>
        ))}
      </ul>

      {isLoading && <Loader />}

      {page < totalPages && <Button onClick={handleLoadMore}>Load more</Button>}
    </div>
  );
};

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
