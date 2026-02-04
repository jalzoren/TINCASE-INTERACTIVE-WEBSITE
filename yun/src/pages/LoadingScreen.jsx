import "../css/LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <div className="loading-overlay">
  <div className="loading-box">
    <div className="loading-dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <p>Opening My Tincase! ...</p>
  </div>
</div>

  );
}
