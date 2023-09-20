import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ largeImageURL, tags, onClick }) => {
  const { image, modal, overlay } = styles;

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClick();
    }
  };

  return (
    <div className={overlay} onClick={handleOverlayClick}>
      <div className={modal}>
        <img className={image} src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
