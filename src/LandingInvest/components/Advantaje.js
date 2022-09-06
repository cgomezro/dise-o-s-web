import React from "react";
import styles from "./../../sass/landinginvest/advantaje.module.scss";
import classNames from "classnames";
import { business, conditions, experienced, growth } from "./../assets/advantage/";


const Advantaje = (props) => {
  return (
    <>
  <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={classNames(styles["headba"])}>
            <h2>         
                The Bluesphere <span>Advantage</span></h2>
            </div>
          </div>
        </div>
      </div>


      
    <div className={classNames(styles["bodya"])}>
    <div className="container">

  <div className={classNames(styles["advantage"])}>     
<div className="row">
      <div className="col-md-6 col-12 mb-3 mb-md-0">
        
        <div className={classNames(styles["boxl"])}>
        <img src={business} alt="market" className="img-fluid"/>
             <h3>HIGHLY SCALABLE BUSINESS MODEL</h3><br></br>
             <div className={classNames(styles["ulist"])}>
        <ul classNam="list">
    <li className={classNames(styles["imgli"])}>As a trading platform, BlueSphere generates returns from the
large volume and value of environmental credit transactions.</li>
    <li className={classNames(styles["imgli"])}>BlueSphere is agnostic to the type of environmental credit
transacted. Currently, BCE offers access to a number of the
major environmental credits in the world and will continue to
provide access to more available environmental credits on
the market.</li> 
 </ul></div>
          <div className={classNames(styles["divider"])}></div>
        </div>
      </div>
      <div className="col-md-6 col-12">
        <div className={classNames(styles["boxr"])}>
        <img src={conditions} alt="market" className="img-fluid"/>
                   <h3>FAVORABLE REGULATORY AND MARKET CONDITIONS</h3><br></br>
                   <div className={classNames(styles["ulist"])}>
        <ul classNam="list">
    <li className={classNames(styles["imgli"])}>To limit global warming to 1.5°C, participating countries need
to cut current greenhouse-gas-emission levels in half by
2030 and reduce them to net zero by 2050.</li>
    <li className={classNames(styles["imgli"])}>Canada has already contributed $8 billion in support of
innovative carbon reduction solutions and related projects.</li> 
<li className={classNames(styles["imgli"])}>Carbon credits have become an essential tool for companies
to offset their greenhouse gas emissions.</li> 
 </ul></div>
          <div className={classNames(styles["divider"])}></div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 col-12 mb-3 mb-md-0">
        
        <div className={classNames(styles["boxl"])}>
        <img src={growth} alt="market" className="img-fluid"/>
             <h3>GROWTH DRIVEN BY INCREASING INTEREST IN
IMPACT INVESTING</h3><br></br>
             <div className={classNames(styles["ulist"])}>
        <ul classNam="list">
    <li className={classNames(styles["imgli"])}>BCE provides investors impact investing opportunities
through climate action with associated co-benefits.</li>
    <li className={classNames(styles["imgli"])}>Environmental credits have been one of the best performing
assets in 2021.</li> 
<li className={classNames(styles["imgli"])}>Low transaction fees lower the barriers for investors.</li> 
 </ul></div>
          <div className={classNames(styles["divider"])}></div>
        </div>
      </div>
      <div className="col-md-6 col-12">
        <div className={classNames(styles["boxr"])}>
        <img src={experienced} alt="market" className="img-fluid"/>
                   <h3>EXPERIENCED FOUNDERS AND MANAGEMENT</h3><br></br>
                   <div className={classNames(styles["ulist"])}>
        <ul classNam="list">
    <li className={classNames(styles["imgli"])}>Company management has extensive backgrounds in
environmental credits, financial technology, market
operations, and traditional finance.</li>
 </ul></div>
          <div className={classNames(styles["divider"])}></div>
        </div>
      </div>
    </div>

  </div>
    </div>
  </div>
    </>
  );
};

export default Advantaje;




