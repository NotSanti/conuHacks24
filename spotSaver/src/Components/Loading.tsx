import { useState, useEffect } from "react";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  //const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      //setFadeOut(true);
    }, 2000);
  }, []);

  return (
    <>
    {/* <div>
      {isLoading ? (
        <img
        src="/spotsaver_new.png"
        alt="Loading completed"
        style={{
          width: "100%",
          height: "140%",
          position: "absolute",
          top: "-100px",
          left: "0",
          transition: "opacity 2s",
          opacity: fadeOut ? 0 : 1,
        }}/>
      ) : (
        <p></p>
      )}
    </div> */}
    <div className="overlay">
      {isLoading ? (
        <div className="full-circle-spinner"></div>
      ) : (
        <p></p>
      )}
    </div>
    </>
  );
}

export default Loading;

