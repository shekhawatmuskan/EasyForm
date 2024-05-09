import React, { useState } from 'react';
import './main-content.css';
import NoFormFound from '../NoFormFound';
import Modal from '../Modal';


function MainContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="main-content">

        <h2>Your Forms</h2>
        <div>
        </div>

        <button className='new-form-btn' onClick={openModal}>+ New Form</button>
      </div>
      <NoFormFound />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Form name</h2>
        <input
          type="text"
          id="textInput"
          value="My Form"


        />
        <div className='modal-footer'>
          <button className="btn cancel-btn"  onClick={closeModal} >Cancel</button>
          <button className="btn" >Create Form</button>
        </div>
      </Modal>
    </div>
  );
}

export default MainContent;
