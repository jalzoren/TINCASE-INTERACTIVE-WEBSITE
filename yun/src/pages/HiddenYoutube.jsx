import React, { useRef, useEffect } from "react";

export default function HiddenYouTube({ play }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (play && iframeRef.current) {
      // Send play command via postMessage (YouTube API)
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "*"
      );
    }
  }, [play]);

  if (!play) return null; // Render iframe only after click

  return (
    <iframe
      ref={iframeRef}
      width="0"
      height="0"
      src="https://www.youtube.com/embed/BTlj6Sls7KE?enablejsapi=1&controls=0&autoplay=1&loop=1&playlist=BTlj6Sls7KE&modestbranding=1&rel=0"
      title="Hidden YouTube Audio"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      style={{ display: "none" }}
    ></iframe>
  );
}
