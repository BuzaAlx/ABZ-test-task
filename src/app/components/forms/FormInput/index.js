import React from "react";
import "./styles.sass";

const FormInput = ({
  handleChange,
  label,
  tip,
  register,
  errors,
  isFilled,
  ...otherProps
}) => {
  let labelClassname = `formRow__label ${
    errors ? "formRorw__label-error" : ""
  }`;

  let inputClassname = `formInput ${errors ? "formInput-error" : ""}`;

  return (
    <div className="formRow">
      {label && isFilled && <label className={labelClassname}>{label}</label>}
      <input
        className={inputClassname}
        onChange={handleChange}
        {...register}
        {...otherProps}
      />
      {errors && <p className="form__input-error">{errors.message}</p>}
      {tip && !errors && <small>{tip}</small>}
    </div>
  );
};

export default FormInput;
