import React from "react";
import "./styles.sass";

export default function Button({
  link,
  title,
  handleFn,
  typeOf = "link",
  type,
  disabled,
  big,
  ...props
}) {
  if (typeOf === "link") {
    return (
      <a
        onClick={() => handleFn()}
        href={link}
        className={`button ${big ? "button-big" : ""}`}
      >
        {title}
      </a>
    );
  } else if (typeOf === "button") {
    return (
      <button
        href={link}
        className={`button ${disabled ? "button-disabled" : ""}`}
        type={type}
        disabled={disabled}
        {...props}
      >
        {title}
      </button>
    );
  }
}
