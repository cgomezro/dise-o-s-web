import React from "react";
import Footer from "./Landing/components/Footer";
import styles from "./sass/subpage.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import Img1 from "./Landing/assets/misc/offset-emissions-1.png";
import Img2 from "./Landing/assets/misc/offset-emissions-2.png";
import Img3 from "./Landing/assets/misc/offset-emissions-3.png";
import { useSelector } from "react-redux";

const OffsetEmissions = (props) => {
  const { loggedin } = useSelector((state) => state.app);
  return (
    <>
      <div className={classNames(styles["subpage"], "container")}>
        <div className="row my-5">
          <div className="col-12">
            <Typography variant="h2">BlueSphere Carbon Exchange</Typography>
            <Typography variant="body1" className={classNames(styles["subheader"], "mt-2")}>Offset your emissions <strong>today</strong></Typography>
          </div>
        </div>
        <div className="row mb-5 justify-content-center">

          <div className="col-md-8 col-12">
            <div className={classNames(styles["illustration"], "mb-3")}>
              <img src={Img1} alt="Img 1"/>
            </div>
            <Typography variant="h3">How it works</Typography>
            <Typography variant="body1">
              Buy carbon offsets directly from BlueSphere's own portfolio of high grade, verified  carbon credits. 
            </Typography>
            <Typography variant="body1" className="mb-5">
              BlueSphere Carbon offers businesses access to high-grade voluntary carbon credits  verified by accredited regulators. Fulfill your business' emissions target today through  BlueSphere Carbon.
            </Typography>

            <div className={classNames(styles["illustration"], "mb-3")}>
              <img src={Img2} alt="Img 2"/>
            </div>
            <Typography variant="h3">The BlueSphere Difference</Typography>
            <Typography variant="body1">
              BlueSphere sources and verifies high-quality carbon offsets from BlueSphere’s  accredited partners.
            </Typography>
            <Typography variant="body1" className="mb-5">
              BlueSphere's team of experts analyzes and carefully selects our source of carbon  offsets. We ensure that our portfolio of tech-verified projects have a meaningful impact  on the climate, biodiversity, and local communities. 
            </Typography>

            <div className={classNames(styles["illustration"], "mb-3")}>
              <img src={Img3} alt="Img 3"/>
            </div>
            <Typography variant="h3">Seamless Process</Typography>
            <Typography variant="body1">
              BlueSphere understands the markets, hold carbon offsets from a variety of sources,  and will help your business seamlessly meet your carbon offset needs. 
            </Typography>
            <Typography variant="body1" className="mb-5">
              You will be able to trace all transactions, track your impact, and monitor your carbon  offset goals through BlueSphere. We will ensure that your carbon offset goals are met  and retire the used carbon credits your behalf. 
            </Typography>

            <div className="d-flex justify-content-center">
              <Button
                color="primary"
                variant="contained"
                disableElevation={true}
                component={Link}
                to={loggedin ? "/app" : "/login"}
                size="large"
                className={classNames(styles["cta-button"],"my-5")}
              >
                Get Started
              </Button>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default OffsetEmissions;
