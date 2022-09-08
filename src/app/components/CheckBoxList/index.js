import React, { useState, useEffect } from "react";
import Checkbox from "../forms/Checkbox";
import Subtitle from "../shared/Subtitle";
import { getData } from "../../../services/api/api";
import "./styles.sass";

export default function CheckBoxList({ position, setPosition }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { positions } = await getData("positions");
      setList(positions);
    }
    fetchData();
  }, []);

  const handleCheckBox = (e) => {
    setPosition(Number(e.target.id));
  };

  return (
    <div className="form__checkbox-container">
      <Subtitle>Select your position</Subtitle>
      {list.map((props) => {
        return (
          <Checkbox
            key={props.id}
            {...props}
            position={position}
            handleCheckBox={handleCheckBox}
          />
        );
      })}
    </div>
  );
}
