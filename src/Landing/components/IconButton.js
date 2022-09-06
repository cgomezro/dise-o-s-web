import React from "react";
import styles from "./../../sass/landing/buttons.module.scss";
import classNames from "classnames";
import { NewspaperVariantOutline, ChevronRight, TextBoxCheckOutline } from "mdi-material-ui";

const icons = {
  "news": <NewspaperVariantOutline/>,
  "summary": <TextBoxCheckOutline/>
}

const IconButton = ({ icon, copy }) => {
  return (
    <button
      className={classNames(
        styles["icon-button"],
        "d-flex align-items-center"
      )}
    >
      <div className={classNames(styles["icon-holder"])}>
        {icons[icon]}
      </div>
      <div className={classNames(styles["copy-holder"])}>
        {copy}
      </div>
      <div className={classNames(styles["arrow-holder"])}>
        <ChevronRight/>
      </div>
    </button>
  );
}
export default IconButton;
