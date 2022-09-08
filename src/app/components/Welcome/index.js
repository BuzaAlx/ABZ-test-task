import React from "react";
import "./styles.sass";
import Button from "../shared/Button";
import Subtitle from "../shared/Subtitle";
import Title from "../shared/Title";
import ProgressiveImage from "react-progressive-graceful-image";
import imageBig from "../../../assets/pexels-alexandr-podvalny-1227513.jpeg";
import imageSmall from "../../../assets/pexels-alexandr-podvalny-1227513__mini.jpg";

export default function Welcome() {
  return (
    <section className="preview">
      <ProgressiveImage src={imageBig} placeholder={imageSmall}>
        {(src, loading) => (
          <img
            className={`image${loading ? " loading" : " loaded"}`}
            src={src}
            alt="sea beach"
          />
        )}
      </ProgressiveImage>
      <div className="preview__row">
        <Title> Test assignment for front-end developer</Title>
        <Subtitle>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </Subtitle>
        <Button link="#form" title="Sign Up" />
      </div>
    </section>
  );
}
