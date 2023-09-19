import { useState } from 'react';

import styles from './SearchForm.module.css';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const submittedQuery = query.trim();
    if (submittedQuery) {
      onSubmit(submittedQuery);
    }
    setQuery('');
  };

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <form className={styles.searchform} onSubmit={handleSubmit}>
      <button type="submit" className={styles.searchform__button}>
        <span className={styles.searchform__label}>Search</span>
      </button>

      <input
        name="search"
        className={styles.searchform__input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={query}
        onChange={handleInputChange}
      />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
