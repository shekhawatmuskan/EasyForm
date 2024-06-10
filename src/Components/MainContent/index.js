import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main-content.css';
import NoFormFound from '../NoFormFound';
import Modal from '../Modal';

function MainContent() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formName, setFormName] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormNameChange = (e) => {
    setFormName(e.target.value);
  };

  const createForm = async () => {
    const user_id = localStorage.getItem('user_id');

    if (!user_id) {
      console.error('User ID not found in localStorage');
      return;
    }

    const response = await fetch('http://localhost:3001/forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formName,
        user_id: user_id,
        title: formName
      }),
    });

    if (response.ok) {
      const result = await response.json();
      const formId = result.id;
      closeModal();
      navigate(`/form-builder/${formId}`);
    } else {
      const errorData = await response.json();
      console.error('Failed to create form', errorData);
    }
  };

  return (
    <div>
      <div className="main-content">
        <h2>Your Forms</h2>
        <div></div>
        <button className='new-form-btn' onClick={openModal}>+ New Form</button>
      </div>
      <NoFormFound />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Form name</h2>
        <input
          type="text"
          id="textInput"
          value={formName}
          onChange={handleFormNameChange}
        />
        <div className='modal-footer'>
          <button className="btn cancel-btn" onClick={closeModal}>Cancel</button>
          <button className="btn" onClick={createForm}>Create Form</button>
        </div>
      </Modal>
      <div className="forms">
         <div class="form">
        <h2>My Form</h2>
        <p>4 responses</p>
        <button class="three-dots">...</button>
      </div>
      <div class="form">
        <h2>i form</h2>
        <p>13 responses</p>
        <button class="three-dots">...</button>
      </div>
      </div>
    
    </div>
  );
}

export default MainContent;
