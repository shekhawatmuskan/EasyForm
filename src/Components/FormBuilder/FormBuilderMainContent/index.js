import React, { useState } from 'react';
import './form-builder-main-content.css';
import MainContentModal from './MainContentModal';

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [buttonText, setButtonText] = useState("Let's start");
  const [coverImage, setCoverImage] = useState("");
  const [textAlign, setTextAlign] = useState("left");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleButtonTextChange = (e) => {
    setButtonText(e.target.value);
  };

  const handleCoverImageChange = (e) => {
    setCoverImage(e.target.value);
  };

  const handleTextAlignChange = (e) => {
    setTextAlign(e.target.value);
  };

  return (
    <div className="container">
      <h1>Create Your Button</h1>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="button-text">Button Text:</label>
        <input
          type="text"
          id="button-text"
          value={buttonText}
          onChange={handleButtonTextChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover-image">Cover Image:</label>
        <input
          type="text"
          id="cover-image"
          value={coverImage}
          onChange={handleCoverImageChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text-align">Text Align:</label>
        <select id="text-align" value={textAlign} onChange={handleTextAlignChange}>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
      <button>Create Button</button>
    </div>
  );
}

function PathStrobe({ position, onModalOpen }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="path-strobe"
            style={{
                position: 'absolute',
                [position]: position === 'top' ? '-20px' : 'auto',
                bottom: position === 'bottom' ? '-20px' : 'auto',
                left: '50%',
                transform: 'translateX(-50%)',
                cursor: 'pointer',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onModalOpen}
        >
            <div className="circle" style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'lightgray', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1.5a.5.5 0 0 1 .5.5v5.5H14a.5.5 0 0 1 0 1H8.5V14a.5.5 0 0 1-1 0V8.5H2a.5.5 0 0 1 0-1h5.5V2a.5.5 0 0 1 .5-.5z" />
                </svg>
            </div>
            {isHovered && <div style={{ textAlign: 'center', marginTop: '5px' }}>Add Block</div>}
        </div>
    );
}

function FormBuilderMainContent() {
    // Array of light colors for input boxes
    const lightColors = ['#FFCCCC', '#CCFFCC', '#CCCCFF', '#FFCCFF', '#CCFFFF', '#FFFFCC', '#FFDDFF', '#DDFFFF', '#FFEECC', '#CCFFEE', '#FFDDDD'];

    const [droppedBoxes, setDroppedBoxes] = useState([]);
    const [selectedInput, setSelectedInput] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleModalOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleDragStart = (event, index) => {
        event.dataTransfer.setData('index', index.toString());
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const index = parseInt(event.dataTransfer.getData('index'));
        setDroppedBoxes([...droppedBoxes, index]);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleInputClick = (index) => {
        setSelectedInput(index === selectedInput ? null : index);
    };

    const handleDelete = (index) => {
        setDroppedBoxes(droppedBoxes.filter((boxIndex) => boxIndex !== index));
        setSelectedInput(null);
    };

    const handleDuplicate = (index) => {
        const newDroppedBoxes = [...droppedBoxes];
        newDroppedBoxes.splice(index + 1, 0, index); // Duplicate at the next index
        setDroppedBoxes(newDroppedBoxes);
        setSelectedInput(null);
    };

    return (
        <div className="main-content">
            <div className="left-nav" style={{ overflowY: 'scroll' }}>
                <div className="block">
                    <div className="block-title">
                        1. Welcome! Please take s...
                    </div>
                </div>
                <div className="block">
                    <div className="block-title">
                        2. what is your name
                    </div>
                </div>
                <div className="block">
                    <div className="block-title">
                        3. please give your valuabl...
                    </div>
                </div>
                <div className="block">
                    <div className="block-title">
                        4. Please enter your phone...
                    </div>
                </div>
                <div className="block">
                    <div className="block-title">
                        5. when do you like to get ...
                    </div>
                </div>
                <div className="block">
                    <div className="block-title">
                        ✔ 6. which day suits you bes...
                    </div>
                </div>
                <div className="block">
                    <div className="block-title">
                        7. which specialist you wa...
                    </div>
                </div>
                <div className="block">
                    <div className="block-title">
                        8. Please select a date
                    </div>
                </div>
                <div className="block">
                    <div className="block-title">
                        9. Please give us a rating.
                    </div>
                </div>
                <div className="block">
                    <div className="block-title">
                        10. Please sign here
                    </div>
                </div>
                <div className="block">
                    <div className="block-title">
                        11. Please upload a file
                    </div>
                </div>
                <div className="block">
                    <div className="block-title">
                        Thank you page
                    </div>
                </div>
            </div>
            <div className="middle-content" onDrop={handleDrop} onDragOver={handleDragOver}>
                <div className="dotted-rectangle" style={{ position: 'relative' }}>
                    {droppedBoxes.map((index) => (
                        <div key={index} className="dropped-box" style={{ backgroundColor: lightColors[index] }}>
                            Input {index + 1}
                        </div>
                    ))}
                    <PathStrobe position="top" onModalOpen={handleModalOpen} />
                    <PathStrobe position="bottom" onModalOpen={handleModalOpen} />
                    <MainContentModal isOpen={isOpen} onClose={handleModalOpen} />
                </div>
            </div>
            <div className="right-nav">
                <App />
            </div>
        </div>
    );
}

export default FormBuilderMainContent;
