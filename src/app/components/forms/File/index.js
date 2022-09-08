import React, { useState, useEffect } from "react";
import "./styles.sass";

export default function File({ register, watch, errors }) {
  const [name, setName] = useState(null);

  useEffect(() => {
    const subscription = watch((data) => {
      if (data.photo) {
        setName(data?.photo[0]?.name);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  return (
    <div className="inputfile-box">
      <input {...register} type="file" id="file" className="inputfile" />
      <label htmlFor="file">
        <span className="file-button">Upload</span>
        <span
          id="file-name"
          className={`file-box ${name ? "file-box--active" : ""}`}
        >
          {name ? name : "Upload your photo"}
        </span>
      </label>
      {errors && <p className="form__input-error">{errors.message}</p>}
    </div>
  );
}
