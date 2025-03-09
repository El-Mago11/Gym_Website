// Preloader.js
import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay (you can adjust the delay as needed)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Preloader stays for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader-container">
      {isLoading ? (
        <div className="preloader-content">
          <div className="spinner"></div>
          <p className="loading-text">Loading...</p> {/* You can add custom text or image here */}
        </div>
      ) : null}
    </div>
  );
};

export default Preloader;
