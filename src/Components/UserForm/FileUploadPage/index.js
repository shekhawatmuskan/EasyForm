import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './file-upload-page.css';

function FileUploadPage() {
    const handleFileUpload = () => {
        console.log('Opening file manager...');
    };

    return (
        <div className="container">
            <h1>Please upload a file</h1>
            <label htmlFor="file-upload" className="upload-label">
                <div className="input-container">
                    <span className="upload-icon">📁</span>
                    <span className="upload-text">Upload a file</span>
                    <input type="file" id="file-upload" className="file-input" onChange={handleFileUpload} />
                    <p className="max-file-size">Maximum file size: 10MB</p>
                </div>
            </label>
            <div className="button-container">
                <button className="next-button">Next
                <FontAwesomeIcon icon={faArrowRight} className="button-icon" /></button>
            </div>
        </div>
    );
}

export default FileUploadPage;
