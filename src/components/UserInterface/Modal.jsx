import React from 'react';
import PropTypes from 'prop-types';
import portfolios from '../../assets/dada/portfolioData';

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find(portfolio => portfolio.id === activeID);

  if (!portfolio) {
    return null; // or return a fallback UI
  }

  // Inline CSS styles
  const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 10,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  };

  const contentStyles = {
    width: '90%',
    maxWidth: '600px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '20px',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const closeButtonStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background 0.3s ease',
  };

  const closeButtonHoverStyles = {
    backgroundColor: '#f5f5f5',
  };

  const imageStyles = {
    width: '100%',
    borderRadius: '8px',
    objectFit: 'cover',
  };

  const titleStyles = {
    fontSize: '24px',
    color: '#333',
    fontWeight: '700',
    margin: '20px 0',
  };

  const descriptionStyles = {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.5',
  };

  const technologiesStyles = {
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  };

  const technologyTagStyles = {
    backgroundColor: '#e0e0e0',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '14px',
    color: '#333',
  };

  return (
    <div
      style={modalStyles}
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div style={contentStyles}>
        <figure>
          <img
            style={imageStyles}
            src={portfolio.imgUrl}
            alt={portfolio.title}
          />
        </figure>
        <h2 id="modal-title" style={titleStyles}>
          {portfolio.title}
        </h2>
        <p id="modal-description" style={descriptionStyles}>
          {portfolio.description}
        </p>
        <div style={technologiesStyles}>
          <h4 style={{ fontWeight: '700', color: '#333' }}>Technologies:</h4>
          {portfolio.technologies.map((item, index) => (
            <span
              key={index}
              style={technologyTagStyles}
            >
              {item}
            </span>
          ))}
        </div>
        <button
          onClick={() => setShowModal(false)}
          style={closeButtonStyles}
          aria-label="Close modal"
          onMouseOver={e => e.currentTarget.style.backgroundColor = closeButtonHoverStyles.backgroundColor}
          onMouseOut={e => e.currentTarget.style.backgroundColor = closeButtonStyles.backgroundColor}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  activeID: PropTypes.number.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default Modal;
