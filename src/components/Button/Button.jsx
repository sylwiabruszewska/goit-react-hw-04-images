import styles from './Button.module.css';
import PropTypes from 'prop-types';

import { Container } from '../index';

export const Button = ({ onClick, children }) => {
  return (
    <Container>
      <button className={styles.button} type="button" onClick={onClick}>
        {children}
      </button>
    </Container>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
