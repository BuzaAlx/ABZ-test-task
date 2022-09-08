import React from "react";
import "./styles.sass";

export default function Preloader() {
  return (
    <div className="circle__item">
      <svg className="circle__spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
}
