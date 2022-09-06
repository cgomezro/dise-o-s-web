import React from "react";
import { Link } from "react-router-dom";
import logo from '../Landing/assets/logo.svg';
import styles from "../sass/landing/logo.module.scss";
import classNames from "classnames";

export default function Logo() {
  return (
    <Link to="/" className="logo-placeholder d-flex align-items-center">
      <img src={logo} alt="Logo"/><span className={classNames(styles["logotxt"], "d-none d-md-block")}>BLUESPHERE <br></br> CARBON</span>
    </Link>
  );
}
