import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import styles from "./GuestPages.module.scss";
import classNames from "classnames";
import Logo from "../components/Logo";

const AccountConfirmation = (props) => {
  return (
    <div className={classNames(styles["guest-pages"], "container h-100")}>
      <div className={classNames(styles.header, "row align-items-center")}>
        <div className="col-4">
          <Logo />
        </div>
        <div className="col-8 text-end"></div>
      </div>
      <div
        className={classNames(styles.body, "row h-100 align-items-md-center")}
      >
        <div className="col-12 text-center">
          <Typography
            variant="h2"
            className={classNames(styles["text-header"])}
          >
            Welcome aboard!
          </Typography>
          <Typography
            variant="body1"
            className={classNames(styles["text-sub-header"])}
          >
            Let's buy some carbon.{" "}
            <strong>
              <Link to="/login">Login</Link>
            </strong>
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default AccountConfirmation;
