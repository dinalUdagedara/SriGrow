import React from "react";
import '../Containers/Style.css';

const PopupWindow = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-inner">
          {/* Render the received content dynamically */}
          <h2>Read More</h2>
          <br></br>
          <p>{content}</p>
          <button onClick={onClose} className="close-button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default PopupWindow;
