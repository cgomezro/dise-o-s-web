import React from "react";
import styles from "./../../sass/landing/hero.module.scss";
import classNames from "classnames";
import icon_exchange from "./../assets/icons/exchange.svg";
import arrow_icon from "./../assets/icons/arrow-right-white-alt.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from '@mui/material/Skeleton';

const Hero = () => {
  // redux
  const { loggedin, loading } = useSelector((state) => state.app);
  return (
    <>
      <div id="hero" className={classNames(styles["hero"])}>
             <div className="container">
       
          <div className="row">
         
            <div className={classNames(styles["slogan"], "col-12")}>
              <h2>
                <span className={classNames(styles["primary"], styles["_1"])}>
                 The World's most Inclusive
                </span>
                <br />
                <span className={classNames(styles["primary"], styles["_2"])}>
                  Environmental Credit
                </span>
                <br />
                <span className={classNames(styles["secondary"], styles["_3"])}>
                Economy and Community
                </span>
              </h2>
              <Link 
                to={loggedin ? "/app" : "/login"}
                style={{textDecoration:"none"}}
                >
                <button className="d-flex align-items-center">
                  <div className={classNames(styles["icon-holder"])}>
                    <img src={icon_exchange} alt="Icon" />
                  </div>
                  <span>
                    {
                      loading ? (
                        <Skeleton
                          variant="text"
                          width={80} height={30}
                        />
                      ) : (
                        <>
                          {
                            loggedin ? (
                              <>Enter App</>
                            ) : (
                              <>Login</>
                            )
                          }
                        </>
                      )
                    }
                  </span>
                  <div
                    className={classNames(
                      styles["arrow-holder"],
                      "d-flex align-items-center justify-content-center"
                    )}
                  >
                    <img src={arrow_icon} alt="Icon" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
