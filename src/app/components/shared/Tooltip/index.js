import React, { useState } from "react";
import "./styles.sass";

export default function Tooltip(props) {
  const [active, setActive] = useState(false);

  let timeout;

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <p className={`Tooltip-Tip ${props.direction || "top"}`}>
          {props.content}
        </p>
      )}
    </div>
  );
}
