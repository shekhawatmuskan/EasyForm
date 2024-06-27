import React, { useState, useEffect } from "react";
import "./form-builder-main-content.css";
import MainContentModal from "./MainContentModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faLink,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

// Component for draggable block in left navigation
function Block({ title, index, onDragStart, onClick }) {
  return (
    <div
      className="block"
      draggable
      onDragStart={(event) => onDragStart(event, index)}
      onClick={() => onClick(index)}
    >
      <div className="block-title">{title}</div>
    </div>
  );
}

// Path strobe component
function PathStrobe({ position, onModalOpen }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="path-strobe"
      style={{
        position: "absolute",
        [position]: position === "top" ? "-20px" : "auto",
        bottom: position === "bottom" ? "-20px" : "auto",
        left: "50%",
        transform: "translateX(-50%)",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onModalOpen}
    >
      <div className="circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1.5a.5.5 0 0 1 .5.5v5.5H14a.5.5 0 0 1 0 1H8.5V14a.5.5 0 0 1-1 0V8.5H2a.5.5 0 0 1 0-1h5.5V2a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </div>
      {isHovered && <div className="hover-text">Add Block</div>}
    </div>
  );
}

function FormBuilderMainContent() {
  const [title, setTitle] = useState(
    "Welcome! Please take some time to fill up this form."
  );
  const [question, setQuestion] = useState("What is your name?");
  const [placeholder, setPlaceholder] = useState("Your answer here...");
  const [description, setDescription] = useState(
    "This will only take 2 minutes."
  );
  const [textAlign, setTextAlign] = useState("left");
  const [buttonText, setButtonText] = useState("Let's start");
  const [coverImage, setCoverImage] = useState(null);
  const [isRequired, setIsRequired] = useState(false);
  const [isAllow, setIsAllow] = useState(false);
  const [isRandomized, setIsRandomized] = useState(false);
  const [isHorizontally, setIsHorizontally] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [textBoxSize, setTextBoxSize] = useState("small");
  const [maxRating, setMaxRating] = useState("3");
  const [type, setType] = useState("dropdown");
  const [isHovered, setIsHovered] = useState(false);
  const [options, setOptions] = useState(["morning", "evening", "afternoon"]);
  const [newOption, setNewOption] = useState("");
  const [showNewOption, setShowNewOption] = useState(false);
  const [showSettings, setShowSettings] = useState(null);
  const [auto, setAuto] = useState("");

  const blockTitles = [
    "1. Welcome! Please take some time to fill up this form.",
    "2. What is your name?",
    "3. Please give your valuable feedback.",
    "4. Please enter your phone number.",
    "5. When do you like to get a call?",
    "✔ 6. Which day suits you best to visit?",
    "7. Which specialist do you want to visit?",
    "8. Please select a date.",
    "9. Please give us a rating.",
    "10. Please sign here.",
    "11. Please upload a file.",
    "Thank you page",
  ];

  const [droppedBoxes, setDroppedBoxes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBlocks, setSelectedBlocks] = useState([]);

  // Load selected blocks from local storage when component mounts
  useEffect(() => {
    const savedBlocks =
      JSON.parse(localStorage.getItem("selectedBlocks")) || [];
    setSelectedBlocks(savedBlocks);
  }, []);

  // Save selected blocks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("selectedBlocks", JSON.stringify(selectedBlocks));
  }, [selectedBlocks]);

  const handleModalOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("index", index.toString());
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const index = parseInt(event.dataTransfer.getData("index"), 10);
    setSelectedBlocks([...selectedBlocks, blockTitles[index]]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleBlockClick = (block) => {
    setSelectedBlocks([...selectedBlocks, block.text]);
  };
  const handleBold = () => {
    console.log("Bold clicked");
    // Add your bold functionality here
  };

  const handleItalic = () => {
    console.log("Italic clicked");
    // Add your italic functionality here
  };

  const handleLink = () => {
    console.log("Link clicked");
    // Add your link functionality here
  };

  const handleYoutube = () => {
    console.log("YouTube clicked");
    // Add your YouTube embed functionality here
  };

  const addNewOption = () => {
    if (newOption.trim()) {
      setOptions([...options, newOption.trim()]);
      setNewOption("");
      setShowNewOption(false);
    }
  };

  const deleteOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
    setShowSettings(null);
  };

  const handleImageUpload = (index) => {
    // Implement image upload logic here
    console.log(`Upload image for option at index ${index}`);
    setShowSettings(null);
  };

  const Toolbar = () => {
    return (
      <div className="toolbar">
        <button onClick={handleBold}>
          <FontAwesomeIcon icon={faBold} />
        </button>
        <button onClick={handleItalic}>
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button onClick={handleLink}>
          <FontAwesomeIcon icon={faLink} />
        </button>
        <button onClick={handleYoutube}>
          <FontAwesomeIcon icon={faYoutube} />
        </button>
      </div>
    );
  };

  return (
    <div className="main-content">
      <div className="left-nav">
        <div className="add-block-button">
          <div
            className="plus-button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleModalOpen}
          >
            <FontAwesomeIcon icon={faPlus} />
            {isHovered && <span className="hover-text">Add New Block</span>}
          </div>
        </div>
        {selectedBlocks.map((title, index) => (
          <Block
            key={index}
            title={title}
            index={blockTitles.indexOf(title)}
            onDragStart={handleDragStart}
            onClick={handleBlockClick}
          />
        ))}
      </div>
      <div
        className="middle-content"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="dotted-rectangle">
          {selectedBlocks.map((block, index) => (
            <div key={index} className="dropped-box">
              {block}
            </div>
          ))}
          {/* Path strobe components */}
          <PathStrobe position="top" onModalOpen={handleModalOpen} />
          <PathStrobe position="bottom" onModalOpen={handleModalOpen} />
        </div>
      </div>
      {isOpen && (
        <MainContentModal
          isOpen={isOpen}
          onClose={handleModalOpen}
          onSelectBlock={handleBlockClick} // Update prop name to onSelectBlock
          blockTitles={blockTitles}
        />
      )}
      <div className="right-nav">
        {/* Right nav form elements */}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input
            type="text"
            id="question"
            className="form-control"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="placeholder">Placeholder</label>
          <input
            type="text"
            id="placeholder"
            className="form-control"
            value={placeholder}
            onChange={(e) => setPlaceholder(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <div>
            <Toolbar />
            <textarea
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="text-align">Text Align</label>
          <select
            id="text-align"
            className="form-control"
            value={textAlign}
            onChange={(e) => setTextAlign(e.target.value)}
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="button-text">Button Text</label>
          <input
            type="text"
            id="button-text"
            className="form-control"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cover-image">Cover Image</label>
          <input
            type="file"
            id="cover-image"
            className="form-control"
            onChange={(e) => setCoverImage(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isRequired}
              onChange={() => setIsRequired(!isRequired)}
            />
            Required field
            <p>If checked, users will be required to complete this field.</p>
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isAllow}
              onChange={() => setIsAllow(!isAllow)}
            />
            Allow multiple
            <p>If checked, user will be able to upload multiple files.</p>
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isRandomized}
              onChange={() => setIsRandomized(!isRandomized)}
            />
            Randomize options
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isHorizontally}
              onChange={() => setIsHorizontally(!isHorizontally)}
            />
            Horizontally align options
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isHide}
              onChange={() => setIsHide(!isHide)}
            />
            Hide labels
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="auto">Auto fill via URL parameter</label>
          <input
            type="text"
            id="auto"
            className="form-control"
            value={auto}
            onChange={(e) => setAuto(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text-box-size">Text Box Size</label>
          <select
            id="text-box-size"
            className="form-control"
            value={textBoxSize}
            onChange={(e) => setTextBoxSize(e.target.value)}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="max-rating">Max Rating</label>
          <select
            id="max-rating"
            className="form-control"
            value={maxRating}
            onChange={(e) => setMaxRating(e.target.value)}
          >
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="form-group type-select">
          <label>
            Type
            <select
              id="type"
              className="form-control"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="dropdown">Dropdown</option>
              <option value="checkbox">Checkbox</option>
              <option value="radio">Radio</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Options
            <div className="add-option" onClick={() => setShowNewOption(true)}>
              +
            </div>{" "}
          </label>
          {showNewOption && (
            <div className="new-option">
              <input
                type="text"
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
                placeholder="Type new option"
              />
              <button onClick={addNewOption}>Add</button>
            </div>
          )}
          <div className="options-list">
            {options.map((option, index) => (
              <div key={index} className="option-item">
                <span className="arrow">↻</span>
                <span className="option-text">{option}</span>
                <span
                  className="settings"
                  onClick={() => setShowSettings(index)}
                >
                  ⚙
                </span>
                {showSettings === index && (
                  <div className="settings-menu">
                    <button onClick={() => deleteOption(index)}>Delete</button>
                    <button onClick={() => handleImageUpload(index)}>
                      Image
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="help-text">
            Have a long list of options? Just paste them above.
            <br />
            <a href="#" className="video-link">
              Watch video
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormBuilderMainContent;
