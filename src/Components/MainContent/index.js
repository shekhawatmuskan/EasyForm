import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main-content.css";
import NoFormFound from "../NoFormFound";
import Modal from "../Modal";
import NewForm from "../NewForm";

function MainContent() {
  const navigate = useNavigate();
  const [formName, setFormName] = useState("");
  const [forms, setForms] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(null);

  useEffect(() => {
    fetchForms();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormNameChange = (e) => {
    setFormName(e.target.value);
  };

  const fetchForms = async () => {
    const token = await localStorage.getItem("authToken");
    const response = await fetch("http://localhost:3001/forms", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const formList = await response.json();
    setForms(formList);
  };

  
  const deleteForm = async (formId) => {
    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch(`http://localhost:3001/forms/${formId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setForms(forms.filter((form) => form.id !== formId));
      } else if (response.status === 404) {
        console.error("Form not found");
      } else {
        const errorData = await response.json();
        console.error("Failed to delete form", errorData);
      }
    } catch (error) {
      console.error("Failed to delete form", error.message);
    }
  };

  const toggleOptions = (formId) => {
    setShowOptions(showOptions === formId ? null : formId);
  };

  const handleFormClick = (formId) => {
    navigate(`/form-builder/${formId}`);
  };

  return (
    <div className="dashboard">
      <div className="main-content">
        <h2>Your Forms</h2>
        <div></div>
        <button className="new-form-btn" onClick={openModal}>
          + New Form
        </button>
      </div>
      {forms.length === 0 && <NoFormFound />}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Pass isOpen state to NewForm component */}
        <NewForm isOpen={isModalOpen} onClose={closeModal} />
      </Modal>
      
      <div className="forms">
        {forms.map((form) => (
          <div
            className="form"
            key={form.id}
            onClick={() => handleFormClick(form.id)}
          >
            <h2>{form?.title}</h2>
            <button
              className="three-dots"
              onClick={(e) => {
                e.stopPropagation();
                toggleOptions(form.id);
              }}
            >
              ...
            </button>
            {showOptions === form.id && (
              <div className="options-menu">
                <button onClick={() => deleteForm(form.id)}>
                  <span role="img" aria-label="delete">
                    🗑️
                  </span>{" "}
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
