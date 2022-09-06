import React from "react";
import styles from "./Headerinvest.module.scss";
import classNames from "classnames";
import Logo from "../components/Logo";
import {Button} from "@mui/material";
import { HashLink } from "react-router-hash-link";

// Utilities
import Tracker from "../GoogleAnalytics";


const Headeri = () => {
   return (

    
    <div id="invest" className={classNames(styles["header"], "container-fluid")}>
      <div className="row align-items-center h-100">
        <div className="col-4">
          <Logo />
        </div>
        <div className="col-8 justify-content-end d-flex align-items-centeralign-items-center">
        <HashLink smooth  to="/#" className={classNames(styles["link"], "me-3 d-none d-lg-block")}>
            Home
            </HashLink>
          <HashLink smooth to="#abc" className={classNames(styles["link"], "me-3 d-none d-lg-block")}>
            About
          </HashLink>

          <HashLink smooth to="#market" className={classNames(styles["link"], "me-3 d-none d-lg-block")}>
            Market
          </HashLink>

          <HashLink smooth to="#team" className={classNames(styles["link"], "me-3 d-none d-lg-block")}>
            Team
          </HashLink>
         
           <Button className={classNames(styles["inow"])}
              variant="contained"
             href="https://google.com"
             target="_blank"
              size="small" >
            Invest Now
            </Button>
         
        </div>
      </div>
    </div>
    
  );
};
export default Headeri;
