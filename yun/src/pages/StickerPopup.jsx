{/*import React from "react";
import "../css/StickerPopup.css";

export default function StickerPopup({ content, onClose }) {
  return (
    <div className="sticker-popup-overlay" onClick={onClose}>
      <div className="sticker-popup-content" onClick={(e) => e.stopPropagation()}>
        <h1>Hello! </h1>
        <p>{content}</p>
        <button className="sticker-popup-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

*/}

import React from "react";
import "../css/StickerPopup.css";

export default function StickerPopup({ onClose }) {
  return (
    <div className="sticker-popup-overlay">
      <div
        className="sticker-popup-content"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h2>Work in Progress</h2>
        <p>Stay Tuned!</p>
       
      </div>
    </div>
  );
}

