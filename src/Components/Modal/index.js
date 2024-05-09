import ReactDOM from 'react-dom'
import './modal.css'

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return ReactDOM.createPortal(
      <div className="modal-overlay">
        <div className="modal">
          {children}
          
        </div>
      </div>,
      document.getElementById('modal-root')
    );
  };

  export default Modal;