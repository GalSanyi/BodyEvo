import React from "react";
import "../BackToTopButton/back-to-top-button.css";
import { useEffect, useState } from "react";
const BackToTopButton = () => {
  const [backtoBotton, setBackToButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBackToButton(window.scrollY > 100);
    });
  }, []);

  const scrollUp = () => {
    const scrollStep = -window.scrollY / 40;
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 40);
  };

  return (
    <div className="back-button">
      {backtoBotton && (
        <button className="food__arrow" onClick={scrollUp}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12.0001 4.83594L5.79297 11.043L7.20718 12.4573L12.0001 7.66436L16.793 12.4573L18.2072 11.043L12.0001 4.83594ZM12.0001 10.4858L5.79297 16.6929L7.20718 18.1072L12.0001 13.3143L16.793 18.1072L18.2072 16.6929L12.0001 10.4858Z"></path>
            </svg>
          </span>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
