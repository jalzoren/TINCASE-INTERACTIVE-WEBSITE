import { useState } from "react";
import "./App.css";
import sticker1 from "./assets/2.png";
import sticker2 from "./assets/3.png";
import sticker3 from "./assets/4.png";
import sticker4 from "./assets/5.png";

import StickerPopup from "./pages/StickerPopup";

export default function App() {
  const [showTemp2, setShowTemp2] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const smallStickers = [
    { src: sticker1, pos: { top: "-10%", left: "-10%" } },
    { src: sticker2, pos: { top: "60%", left: "60%" } },
    { src: sticker3, pos: { bottom: "-15%", left: "-5%" } },
    { src: sticker4, pos: { bottom: "55%", right: "-10%" } },
  ];

  const temp2Divs = [
    { id: 1, src: "/stickers/1.jpg", pos: { top: "13%", left: "21%" }, className: "sticker1", content: "This is Sticker 1" },
    { id: 2, src: "/stickers/2.png", pos: { top: "73%", right: "55%" }, className: "sticker2", content: "This is Sticker 2" },
    { id: 3, src: "/stickers/3.png", pos: { top: "25%", left: "50%" }, className: "sticker3", content: "This is Sticker 3" },
    { id: 4, src: "/stickers/4.png", pos: { bottom: "3%", left: "13%" }, className: "sticker4", content: "This is Sticker 4" },
    { id: 5, src: "/stickers/5.png", pos: { bottom: "45%", right: "35%" }, className: "sticker5", content: "This is Sticker 5" },
    { id: 6, src: "/stickers/6.png", pos: { top: "49%", left: "45%" }, className: "sticker6", content: "This is Sticker 6" },
    { id: 7, src: "/stickers/7.jpg", pos: { top: "40%", right: "30%" }, className: "sticker7", content: "This is Sticker 7" },
    { id: 8, src: "/stickers/8.jpg", pos: { bottom: "5%", left: "40%" }, className: "sticker8", content: "This is Sticker 8" },
    { id: 9, src: "/stickers/9.jpg", pos: { bottom: "30%", right: "25%" }, className: "sticker9", content: "This is Sticker 9" },
    { id: 10, src: "/stickers/10.jpg", pos: { top: "60%", left: "15%" }, className: "sticker10", content: "This is Sticker 10" },
  ];

  return (
    <div className="app bg">
      <div className="image-stack">
        {/* Toggle Images */}
        {!showTemp2 && (
          <img
            src="/temp.png"
            alt="Temp"
            className="image"
            onClick={() => setShowTemp2(true)}
          />
        )}
        {showTemp2 && (
          <img
            src="/temp2.png"
            alt="Temp2"
            className="image"
            onClick={() => setShowTemp2(false)}
          />
        )}

        {/* Text Sections */}
        <div className={`text-section ${showTemp2 ? "show" : ""}`}>
          <div className="text-box-word1">What's</div>
          <div className="in">in</div>
          <div className="my">my</div>
          <div className="text-box-word2">Tincase</div>
        </div>

        <div className={`text-section2 ${!showTemp2 ? "show" : ""}`}>
          <div className="text-box-word3">
            What's <span className="in2">in</span>
          </div>
          <div className="text-box-word4">
            <span className="my2">my</span> Tincase
          </div>
        </div>

        {/* Small pulsing stickers */}
        {smallStickers.map((sticker, index) => (
          <img
            key={index}
            src={sticker.src}
            alt={`Sticker ${index + 1}`}
            className="sticker-image"
            style={sticker.pos}
          />
        ))}

        {/* Big clickable stickers */}
        {showTemp2 &&
          temp2Divs.map((sticker) => (
            <img
              key={sticker.id}
              src={sticker.src}
              className={`temp2-div ${sticker.className}`}
              style={sticker.pos}
              onClick={() => setPopupContent(sticker.content)}
            />
          ))}

        {/* Popup */}
        {popupContent && (
          <StickerPopup
            content={popupContent}
            onClose={() => setPopupContent(null)}
          />
        )}
      </div>
    </div>
  );
}
