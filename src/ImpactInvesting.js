import React from "react";
import Footer from "./Landing/components/Footer";
import styles from "./sass/subpage.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import Img1 from "./Landing/assets/misc/impact-investing-1.png";
import Img2 from "./Landing/assets/misc/impact-investing-2.png";
import Img3 from "./Landing/assets/misc/impact-investing-3.png";
import Img4 from "./Landing/assets/misc/impact-investing-4.png";
import { useSelector } from "react-redux";

const ImpactInvesting = (props) => {
  const { loggedin } = useSelector((state) => state.app);
  return (
    <>
      <div className={classNames(styles["subpage"], "container")}>
        <div className="row my-5">
          <div className="col-12">
            <Typography variant="h2">Impact Investing</Typography>
            <Typography variant="body1" className={classNames(styles["subheader"], "mt-2")}>Begin investing in the <strong>Earth's Future</strong></Typography>
          </div>
        </div>
        <div className="row mb-5 justify-content-center">

          
          <div className="col-md-8 col-12">
            <div className={classNames(styles["illustration"], "mb-3")}>
              <img src={Img1} alt="Img 1"/>
            </div>
            <Typography variant="h3">How it works</Typography>
            <Typography variant="body1">
              Invest in BlueSphere's extensive range of environmental credits offerings.
            </Typography>
            <Typography variant="body1" className="mb-5">
              BlueSphere Carbon Exchange offers access to a wide range of voluntary environmental  credits available in the market. As a spot marketplace, you receive immediate delivery  of the environmental credits you invest in. Take charge of the Earth's future
            </Typography>

            <div className={classNames(styles["illustration"], "mb-3")}>
              <img src={Img2} alt="Img 2"/>
            </div>
            <Typography variant="h3">Simple and secure spot trading for everyone</Typography>
            <Typography variant="body1" className="mb-5">
              The BlueSphere Carbon Exchange uses best-in -class security to keep you in full control  of your investments. 
            </Typography>

            <div className={classNames(styles["illustration"], "mb-3")}>
              <img src={Img3} alt="Img 3"/>
            </div>
            <Typography variant="h3">Accessible and Inclusive</Typography>
            <Typography variant="body1" className="mb-5">
              We believe that everyone should be able to take part in the forefront of climate actions.  Therefore, we are now providing previously restricted access to an extensive portfolio  of voluntary environmental credits. 
            </Typography>

            <div className={classNames(styles["illustration"], "mb-3")}>
              <img src={Img4} alt="Img 3"/>
            </div>
            <Typography variant="h3">Transparency and Liquidity</Typography>
            <Typography variant="body1" className="mb-5">
              An open spot market for voluntary environmental credits allows investors to know  everything about the credits and projects that they are interested in. Transparent forces  of the open economy will determine the most suitable pricing for environmental credits to prevent low-grade environmental credits being passed off as mainstream carbon  credits. Take part in increasing the liquidity of high grade environmental credits today. 
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

export default ImpactInvesting;
