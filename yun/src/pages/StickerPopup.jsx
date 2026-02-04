import React from "react";
import "../css/StickerPopup.css";

export default function StickerPopup({ content, src, onClose }) {
  return (
    <div className="sticker-popup-overlay" onClick={onClose}>
      <div
        className="sticker-popup-content"
        onClick={(e) => e.stopPropagation()} 
      >
        {src && (
          <div className="popup-gif">
            <img src={src} alt="Sticker" />
          </div>
        )}
        <h2>Hello there!</h2>
        <p>{content}</p>
        <button className="sticker-popup-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
