import React from "react";
import Subtitle from "../shared/Subtitle";
import userImg from "../../../assets/photo-cover.svg";
import "./styles.sass";
import Tooltip from "../shared/Tooltip";
import { clipStr } from "../../../helpers";

export default function Card({ email, name, phone, photo, position }) {
  return (
    <div className="card">
      <div className="card__img-box">
        <img
          src={photo}
          alt="card"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = userImg;
          }}
        />
      </div>
      <Tooltip content={name} direction="bottom">
        <Subtitle>{name.length > 30 ? clipStr(name, 30) : name}</Subtitle>
      </Tooltip>
      <Subtitle>
        <span>{position}</span>
        <br />
        <Tooltip content={email} direction="bottom">
          <a href={`mailto:${email}`}>
            {email.length > 30 ? clipStr(email, 30) : email}
          </a>
        </Tooltip>
        <br />
        <a href={`tel:${phone}`}>{phone}</a>
      </Subtitle>
    </div>
  );
}
