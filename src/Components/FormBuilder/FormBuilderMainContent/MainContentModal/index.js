import React, { useState } from "react";
import "./main-content-modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faArrowRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function MainContentModal({ isOpen, onClose }) {
  const [selectedBlock, setSelectedBlock] = useState(null);

  const handleBlockClick = (block) => {
    setSelectedBlock(block);
  };

  const handleClose = () => {
    onClose(); // Call onClose function passed from parent component
  };

  const blockOptions = [
    { text: "Statement", icon: faFileLines },
    { text: "Single Line Input", icon: faGripLines },
    { text: "Multi Line Input", icon: faBars },
    { text: "Phone Number", icon: faMobileAlt },
    { text: "Single Select Option", icon: faCheckSquare },
    { text: "Multi Select Option", icon: faListOl },
    { text: "Dropdown List", icon: faListOl },
    { text: "Date", icon: faCalendarAlt },
    { text: "Star Rating", icon: faStar },
    { text: "Signature", icon: faSignature },
    { text: "File Upload", icon: faFileUpload },
  ];

  return (
    <div className="modal-parent">
      <div className={`main-content-modal ${isOpen ? "open" : "close"}`}>
        <div className="modal-content">
          <button className="close-button" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h1>Choose your block</h1>
          <div className="block-container">
            <ul className="block-list">
              {blockOptions.map((block) => (
                <li
                  key={block.text}
                  onClick={() => handleBlockClick(block)}
                  className={
                    selectedBlock?.text === block.text ? "selected" : ""
                  }
                >
                  <FontAwesomeIcon icon={block.icon} className="icon" />
                  {block.text}
                </li>
              ))}
            </ul>
            <div className="block-details">
              {selectedBlock ? (
                <div className="selected-block-details">
                  <h3>{selectedBlock.text}</h3>
                  {/* Display block details here based on selectedBlock */}
                </div>
              ) : (
                <div className="selected-block-details">
                  <h3>No block selected</h3>
                  <p>
                    Select a block from the list to know about it and how to use
                    it in the form.
                  </p>
                </div>
              )}
            </div>
          </div>
          {selectedBlock && (
            <div className="main-content-modal-footer">
              <button className="use-block-button">
                Use this block
                <FontAwesomeIcon icon={faArrowRight} className="icon" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainContentModal;
