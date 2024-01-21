import { useState, useEffect } from "react";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setFadeOut(true);
    }, 3000);
  }, []);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {isLoading ? (
        <div className="full-circle-spinner"></div>
      ) : (
        // <p></p>
        <img
          src="/path/to/your/image.jpg"
          alt="Loading completed"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            transition: "opacity 2s",
            opacity: fadeOut ? 0 : 1,
          }}
        />
      )}
    </div>
  );
}

export default Loading;

