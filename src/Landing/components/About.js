import React from "react";
import styles from "./../../sass/landing/about.module.scss";
import classNames from "classnames";
import IconButton from "./IconButton";

const About = (props) => {
  return (
    <>
      <div className={classNames(styles["about"], "container")}>
        <div className="row">
          <div className="col-md-6 col-12">
            <h3>
                <span>About</span>
                What is BlueSphere Carbon Exchange?
            </h3>
            <p>
              BlueSphere Carbon Exchange is a spot market which allows for spot trading of nearly any
              EC, making them easy to trade. This forms a commodity market for
              ECs as assets, and overall strengthens their intended use case.
            </p>
            <a href="/BlueSphereCarbon_Deck.pdf" target="_blank" style={{ textDecoration: "none" }}>
              <IconButton icon="summary" copy={"Executive Summary"} />
            </a>
          </div>
          <div className="col-md-6 col-12"></div>
        </div>
      </div>
    </>
  );
};

export default About;
