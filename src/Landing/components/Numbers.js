import React from "react";
import styles from "./../../sass/landing/numbers.module.scss";
import classNames from "classnames";
import _88_countries from './../assets/numbers/88_countries.svg';
import _70_jurisdictions from './../assets/numbers/70_jurisdictions.svg';
import _51_initiatives from './../assets/numbers/51_initiatives.svg';
import $33B from './../assets/numbers/$33B.svg';
import _1300_companies from './../assets/numbers/1300_companies.svg';
import $82B from './../assets/numbers/$82B.svg';

const Numbers = (props) => {
  return (
    <>
      <div className={classNames(styles["numbers"], "container")}>
        <div className="row">
          <div className="col-md-6 col-12">
            <h3>
              <span>By the numbers</span>
              Environmental Credit Market Overview
            </h3>
          </div>
        </div>
      </div>
      <div className={classNames(styles["tiles"], "container")}>
        <div className="row flex-nowrap flex-lg-wrap">
          <div className="col-xl-4 col-lg-4 col-md-5 col-8 mb-3">
            <div className={classNames(styles["tile"])}>
              <img src={_88_countries} alt="Icon"/>
              <h4>Eighty Eight</h4>
              <p>The number of countries which plan to use or are considering using carbon pricing and/or market mechanisms.</p>
              <div className={classNames(styles["divider"])}></div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-5 col-8 mb-3">
            <div className={classNames(styles["tile"])}>
              <img src={_70_jurisdictions} alt="Icon"/>
              <h4>Seventy</h4>
              <p>The number of jurisdictions (45 national and 25 subnational) worldwide with existing carbon pricing initiatives.</p>
              <div className={classNames(styles["divider"])}></div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-5 col-8 mb-3">
            <div className={classNames(styles["tile"])}>
              <img src={_51_initiatives} alt="Icon"/>
              <h4>Fifty One</h4>
              <p>The number of carbon pricing initiatives implemented or scheduled for implementation.</p>
              <div className={classNames(styles["divider"])}></div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-5 col-8 mb-3">
            <div className={classNames(styles["tile"])}>
              <img src={$33B} alt="Icon"/>
              <h4>$33 Billion USD</h4>
              <p>The total value of carbon pricing revenues raised by government entities in the year 2017.</p>
              <div className={classNames(styles["divider"])}></div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-5 col-8 mb-3">
            <div className={classNames(styles["tile"])}>
              <img src={_1300_companies} alt="Icon"/>
              <h4>More than 1,300</h4>
              <p>The number of companies that are using, or are planning to use internal carbon pricing in 2018 and 2019.</p>
              <div className={classNames(styles["divider"])}></div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-5 col-8 mb-3">
            <div className={classNames(styles["tile"])}>
              <img src={$82B} alt="Icon"/>
              <h4>$82 Billion USD</h4>
              <p>Annual value of carbon pricing initiatives in 2018 (compared to US $52 billion in 2017).</p>
              <div className={classNames(styles["divider"])}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Numbers;
