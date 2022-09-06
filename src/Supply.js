import React from "react";
import Footer from "./Landing/components/Footer";
import styles from "./sass/subpage.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import Img1 from "./Landing/assets/misc/supply-1.png";
import Img2 from "./Landing/assets/misc/supply-2.png";
import Img3 from "./Landing/assets/misc/supply-3.png";
import { useSelector } from "react-redux";

const Supply = (props) => {
  const { loggedin } = useSelector((state) => state.app);
  return (
    <>
      <div className={classNames(styles["subpage"], "container")}>
        <div className="row my-5">
          <div className="col-12">
            <Typography variant="h2">Supply Carbon Credits</Typography>
            <Typography variant="body1" className={classNames(styles["subheader"], "mt-2")}>...now!</Typography>
          </div>
        </div>
        <div className="row mb-5 justify-content-center">

          <div className="col-md-8 col-12">
            <div className={classNames(styles["illustration"], "mb-3")}>
              <img src={Img1} alt="Img 1"/>
            </div>
            <Typography variant="h3">How it works</Typography>
            <Typography variant="body1">
              Sell high grade carbon credits directly to BlueSphere at a competitive pricing. 
            </Typography>
            <Typography variant="body1" className="mb-5">
              BlueSphere Carbon offers carbon credit suppliers and carbon streaming project  owners capital and liquidity. Fund your carbon credit projects today through  BlueSphere Carbon. 
            </Typography>

            <div className={classNames(styles["illustration"], "mb-3")}>
              <img src={Img2} alt="Img 2"/>
            </div>
            <Typography variant="h3">The BlueSphere Difference</Typography>
            <Typography variant="body1">
              BlueSphere acquires your carbon credits and pays upfront. We bear the risks  associated with carrying and selling the carbon credits. 
            </Typography>
            <Typography variant="body1" className="mb-5">
              You will receive immediate capital available to fund your next carbon offset project  without having to worry about finding a buyer.  
            </Typography>

            <div className={classNames(styles["illustration"], "mb-3")}>
              <img src={Img3} alt="Img 3"/>
            </div>
            <Typography variant="h3">Seamless Process</Typography>
            <Typography variant="body1">
              BlueSphere understands the markets, has access to a large audience, and will help your  carbon credits get to the businesses in need. 
            </Typography>
            <Typography variant="body1" className="mb-5">
              You will be able to trace all transactions, track your impact, and monitor your carbon  offset credits through BlueSphere. We will ensure that your carbon offset projects are  making the right climate impact as they should.
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

export default Supply;
