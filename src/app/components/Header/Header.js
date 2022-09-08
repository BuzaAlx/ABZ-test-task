import React from "react";
import "./styles.sass";
import logo from "../../../assets/Logo.svg";
import Button from "../shared/Button";

export default function Header({ navigation }) {
  return (
    <header className="header container">
      <div className="header_row">
        <div className="header_logoContainer">
          <a href="/">
            <img src={logo} alt="header_logo" />
          </a>
        </div>
        <nav>
          <ul className="header_list">
            {navigation.map((el) => {
              return (
                <li key={el.id}>
                  <Button link={el.link} title={el.title} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
