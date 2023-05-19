import React from "react";
import "./style.css";

export default function Modal({ isVisible, setVisible, children }) {
  return (
    <div
      className={isVisible ? "Modal active" : "Modal"}
      onClick={() => setVisible(false)}
    >
      <div
        className={isVisible ? "Modal-content active" : "Modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
