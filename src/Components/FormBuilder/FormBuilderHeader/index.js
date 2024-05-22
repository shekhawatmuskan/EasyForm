import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEye, faUpload, faTools, faPalette, faCode, faShareAlt, faPoll } from '@fortawesome/free-solid-svg-icons';
import './form-builder-header.css'; // Import the CSS file

function FormBuilderHeader() {
  return (
    <div className="form-header">
      <div className="form-header-content">
        {/* Arrow button with Font Awesome icon */}
        <button className="arrow-button blue">
          <FontAwesomeIcon icon={faArrowLeft} className="button-icon" />
        </button>
        <h1 className="form-title">My Form</h1>
      </div>
      <div className="action-buttons">
        {/* Buttons with icons and text */}
        <button className="action-button green">
          <FontAwesomeIcon icon={faTools} className="button-icon" style={{ color: 'rgb(37 99 235 )' }} />
          <span>Build</span>
        </button>
        <button className="action-button orange">
          <FontAwesomeIcon icon={faPalette} className="button-icon" style={{ color: 'rgb(37 99 235 ' }} />
          <span>Design</span>
        </button>
        <button className="action-button blue">
          <FontAwesomeIcon icon={faCode} className="button-icon" style={{ color: 'rgb(37 99 235 ' }} />
          <span>Integrate</span>
        </button>
        <button className="action-button red">
          <FontAwesomeIcon icon={faShareAlt} className="button-icon" style={{ color: 'rgb(37 99 235 ' }} />
          <span>Share</span>
        </button>
        <button className="action-button purple">
          <FontAwesomeIcon icon={faPoll} className="button-icon" style={{ color: 'rgb(37 99 235 ' }} />
          <span>Results</span>
        </button>
      </div>
      <div className="action-buttons">
        {/* Preview button with icon and text */}
        <button className="preview-button">
          <FontAwesomeIcon icon={faEye} className="button-icon" style={{ color: 'black' }} />
          <span>Preview</span>
        </button>
        {/* Add a minor gap between Preview and Publish Now buttons */}
        <button className="publish-button">
          <FontAwesomeIcon icon={faUpload} className="button-icon" style={{ color: 'white' }} />
          <span>Publish Now</span>
        </button>
      </div>
    </div>
  );
}

export default FormBuilderHeader;
