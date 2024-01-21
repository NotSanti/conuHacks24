import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setFadeOut(true);
    }, 5000);
  }, []);

  return (
    <div className="fixed center h-100">
      {isLoading ? (
        <TailSpin
          height="50"
          width="50"
          color="#ff3131"
          ariaLabel="tail-spin-loading"
          radius="3"
          wrapperStyle={{}}
          wrapperClass=""
          visible={!fadeOut}
        />
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

