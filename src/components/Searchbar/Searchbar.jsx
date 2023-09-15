import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

import { SearchForm } from '../index';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = query => {
    onSubmit(query);
  };

  return (
    <header className={styles.searchbar}>
      <SearchForm onSubmit={handleSubmit} />
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
