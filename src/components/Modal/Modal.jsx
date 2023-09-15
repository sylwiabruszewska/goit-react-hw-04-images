import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ largeImageURL, tags, onClick }) => {
  const { image, modal, overlay } = styles;

  return (
    <div className={overlay}>
      <div className={modal}>
        <img
          className={image}
          src={largeImageURL}
          alt={tags}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
