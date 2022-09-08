import React from "react";
import "./styles.sass";

const Checkbox = ({ name, id, position, handleCheckBox }) => {
  return (
    <div className="form-checkbox">
      <input
        type="checkbox"
        id={id}
        onChange={handleCheckBox}
        checked={id === position}
        name={name}
      />
      <label name={name} htmlFor={id}>
        {name}
      </label>
    </div>
  );
};

export default Checkbox;
