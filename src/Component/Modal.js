import React from "react";
import "./CSS files/Modal.css";
import google_voice from "./../Assests/google-voice.png"

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>You can Speak...</h2>
        <img src={google_voice} alt="googlevoice" />
        <div className="dots_animation">
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
        </div>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
