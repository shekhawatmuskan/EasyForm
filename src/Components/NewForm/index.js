import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./new-form.css"; // Import CSS file for styling

function NewForm({ isOpen, onClose }) {
  const [formName, setFormName] = useState("");
  const navigate = useNavigate();

  const handleFormNameChange = (e) => {
    setFormName(e.target.value);
  };

  const handleCreateForm = async () => {
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("authToken");

    if (!user_id) {
      console.error("User ID not found in localStorage");
      return;
    }

    if (!token) {
      console.error("Auth token not found in localStorage");
      return;
    }

    const response = await fetch("http://localhost:3001/forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: formName,
        user_id: user_id,
        title: formName,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      const formId = result.id;
      onClose();
      navigate(`/form-builder/${formId}`);
    } else {
      const errorData = await response.json();
      console.error("Failed to create form", errorData);
    }
  };

  return isOpen ? (
    <div className="new-form-content">
      <h2>Form name</h2>
      <input
        type="text"
        id="textInput"
        value={formName}
        onChange={handleFormNameChange}
        className="form-name-input"
      />
      <div className="modal-footer">
        <button className="btn cancel-btn" onClick={onClose}>
          Cancel
        </button>
        <button className="btn create-form-btn" onClick={handleCreateForm}>
          Create Form
        </button>
      </div>
    </div>
  ) : null;
}

export default NewForm;