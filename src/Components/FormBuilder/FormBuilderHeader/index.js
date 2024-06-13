import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEye, faUpload, faTools, faPalette, faCode, faShareAlt, faPoll } from '@fortawesome/free-solid-svg-icons';
import './form-builder-header.css';

function FormBuilderHeader() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="form-header">
      <div className="form-header-content">
        <div className="arrow-icon" onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
        </div>
        <h1 className="form-title">My Form</h1>
      </div>
      <div className="action-buttons">
        <button className="action-button green">
          <FontAwesomeIcon icon={faTools} className="button-icon" style={{ color: 'rgb(37 99 235)' }} />
          <span>Build</span>
        </button>
        <button className="action-button orange">
          <FontAwesomeIcon icon={faPalette} className="button-icon" style={{ color: 'rgb(37 99 235)' }} />
          <span>Design</span>
        </button>
        <button className="action-button blue">
          <FontAwesomeIcon icon={faCode} className="button-icon" style={{ color: 'rgb(37 99 235)' }} />
          <span>Integrate</span>
        </button>
        <button className="action-button red">
          <FontAwesomeIcon icon={faShareAlt} className="button-icon" style={{ color: 'rgb(37 99 235)' }} />
          <span>Share</span>
        </button>
        <button className="action-button purple">
          <FontAwesomeIcon icon={faPoll} className="button-icon" style={{ color: 'rgb(37 99 235)' }} />
          <span>Results</span>
        </button>
      </div>
      <div className="action-buttons">
        <button className="preview-button">
          <FontAwesomeIcon icon={faEye} className="button-icon" style={{ color: 'black' }} />
          <span>Preview</span>
        </button>
        <button className="publish-button">
          <FontAwesomeIcon icon={faUpload} className="button-icon" style={{ color: 'white' }} />
          <span>Publish Now</span>
        </button>
      </div>
    </div>
  );
}

export default FormBuilderHeader;
