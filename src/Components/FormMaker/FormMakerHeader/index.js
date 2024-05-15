import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faEye, faUpload, faTools, faPalette, faCode, faShareAlt, faPoll } from '@fortawesome/free-solid-svg-icons';
import './form-maker-header.css'; // Import the CSS file

function FormMakerHeader() {
  return (
    <div className="form-header">
      <div className="form-header-content">
        {/* Arrow button with Font Awesome icon */}
        <FontAwesomeIcon icon={faChevronLeft} className="arrow-icon" />
        <h1 className="form-title">My Form</h1>
      </div>
      <div className="action-buttons">
        {/* Buttons with icons */}
        <button className="action-button green">
          <FontAwesomeIcon icon={faTools} className="button-icon" style={{ color: 'rgb(37 99 235 )' }} /> Build
        </button>
        <button className="action-button orange">
          <FontAwesomeIcon icon={faPalette} className="button-icon" style={{ color: 'rgb(37 99 235 ' }} /> Design
        </button>
        <button className="action-button blue">
          <FontAwesomeIcon icon={faCode} className="button-icon" style={{ color: 'rgb(37 99 235 ' }} /> Integrate
        </button>
        <button className="action-button red">
          <FontAwesomeIcon icon={faShareAlt} className="button-icon" style={{ color: 'rgb(37 99 235 ' }} /> Share
        </button>
        <button className="action-button purple">
          <FontAwesomeIcon icon={faPoll} className="button-icon" style={{ color: 'rgb(37 99 235 ' }} /> Results
        </button>
      </div>
      <div className="action-buttons">
        {/* Preview button with icon */}
        <button className="preview-button">
          <FontAwesomeIcon icon={faEye} className="button-icon" style={{ color: 'purple' }} /> Preview
        </button>
        {/* Add a minor gap between Preview and Publish Now buttons */}
        <button className="publish-button">
          <FontAwesomeIcon icon={faUpload} className="button-icon" style={{ color: 'purple' }} /> Publish Now
        </button>
      </div>
    </div>
  );
}

export default FormMakerHeader;
