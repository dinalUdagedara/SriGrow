import React from "react";
import '../Containers/Style.css';

const PopupWindow = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-inner">
          <h2>Popup Content</h2>
          <button onClick={onClose} className="close-button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default PopupWindow;