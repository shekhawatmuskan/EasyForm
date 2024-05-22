import React, { useState } from 'react';
import './form-builder-main-content.css';
import MainContentModal from './MainContentModal';

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

// export default PathStrobe;

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
                <div style={{ height: '200vh' }}> {/* To add the screen overflow slider */}
                    {/* Loop through to create 11 label input boxes */}
                    {[...Array(11)].map((_, index) => (
                        <div key={index} className="input-box" style={{ width: '80%', marginBottom: '10px' }} draggable onDragStart={(event) => handleDragStart(event, index)}>
                            <input type="text" id={`input-${index}`} style={{ width: '100%', boxSizing: 'border-box', backgroundColor: lightColors[index] }} />
                            <label htmlFor={`input-${index}`} style={{ color: 'black', position: 'relative' }} onClick={() => handleInputClick(index)}>
                                <div className="viewbox" style={{ display: selectedInput === index ? 'block' : 'none', position: 'absolute', top: '-25px', right: '-35px', padding: '5px', background: 'white', border: '1px solid #ccc' }}>
                                    <div className="option" onClick={() => handleDelete(index)}>Delete</div>
                                    <div className="option" onClick={() => handleDuplicate(index)}>Duplicate</div>
                                </div>
                            </label>
                        </div>
                    ))}
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
                <label htmlFor="questionInput">Question</label>
                <input type="text" id="questionInput" />

                {/* Inserted code */}
                <h3> Description</h3>
                <label htmlFor="labelInput">Label Input</label>
                <div className="label-input">
                    <button><strong>Bold</strong></button>
                    <button><em>Italic</em></button>
                    <button>Link</button>
                    <button>YouTube Embed</button>
                </div>
                <textarea id="labelInput" rows="4" cols="50" placeholder="Enter text..."></textarea>
                {/* End of inserted code */}
            </div>

        </div>
    );
}

export default FormBuilderMainContent;
