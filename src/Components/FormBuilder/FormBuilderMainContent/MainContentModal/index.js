import React from 'react';
import './main-content-modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileLines,
  faGripLines,
  faBars,
  faMobileAlt,
  faCheckSquare,
  faListOl,
  faCalendarAlt,
  faStar,
  faSignature,
  faFileUpload,
  faArrowRight


} from '@fortawesome/free-solid-svg-icons';

function MainContentModal({ isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen ? 'open' : 'close'}`}>
      <div className="modal-content">
        <h1>Choose your block </h1>
        <button className="add-block-button" onClick={handleAddBlock.bind(null, 'Statement', faFileLines)}>
          <FontAwesomeIcon icon={faFileLines} className="icon" />
          Statement
        </button>
        <button className="add-block-button" onClick={handleAddBlock.bind(null, 'Single Line Input', faGripLines)}>
          <FontAwesomeIcon icon={faGripLines} className="icon" />
          Single Line Input
        </button>
        <button className="add-block-button" onClick={handleAddBlock.bind(null, 'Multi Line Input', faBars)}>
          <FontAwesomeIcon icon={faBars} className="icon" />
          Multi Line Input
        </button>
        <button className="add-block-button" onClick={handleAddBlock.bind(null, 'Phone Number', faMobileAlt)}>
          <FontAwesomeIcon icon={faMobileAlt} className="icon" />
          Phone Number
        </button>
        <button className="add-block-button" onClick={handleAddBlock.bind(null, 'Single Select Option', faCheckSquare)}>
          <FontAwesomeIcon icon={faCheckSquare} className="icon" />
          Single Select Option
        </button>
        <button className="add-block-button" onClick={handleAddBlock.bind(null, 'Multi Select Option', faListOl)}>
          <FontAwesomeIcon icon={faListOl} className="icon" />
          Multi Select Option
        </button>
        <button className="add-block-button" onClick={handleAddBlock.bind(null, 'Dropdown List', faListOl)}>
          <FontAwesomeIcon icon={faListOl} className="icon" />
          Dropdown List
        </button>
        <button className="add-block-button" onClick={handleAddBlock.bind(null, 'Date', faCalendarAlt)}>
          <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
          Date
        </button>
        <button className="add-block-button" onClick={handleAddBlock.bind(null, 'Star Rating', faStar)}>
          <FontAwesomeIcon icon={faStar} className="icon" />
          Star Rating
        </button>
        <button className="add-block-button" onClick={handleAddBlock.bind(null, 'Signature', faSignature)}>
          <FontAwesomeIcon icon={faSignature} className="icon" />
          Signature
        </button>
        <button className="add-block-button" onClick={handleAddBlock.bind(null, 'File Upload', faFileUpload)}>
          <FontAwesomeIcon icon={faFileUpload} className="icon" />
          File Upload
        </button>


        <div className="modal-footer">

          <button className="use-block-button">
            Use this block
            <FontAwesomeIcon icon={faArrowRight} className="icon" />
          </button>
        </div>

      </div>
    </div>
  );

  function handleAddBlock(text, icon) {
    // Handle adding block logic here
    console.log(`Adding block: ${text}`);
    console.log(`Selected icon: ${icon.iconName}`);
  }
}

export default MainContentModal;
