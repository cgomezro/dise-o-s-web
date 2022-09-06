import React from "react";
import styles from "./../../sass/landinginvest/aboutbc.module.scss";
import classNames from "classnames";
import { logo2, logow, market, purchases, credit, data } from "./../assets/about/";
const Aboutbc = (props) => {
  return (
    <>
    
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="abc" className={classNames(styles["headabc"])}>
<img ClassName ="img-fluid" src={logo2} alt="Blue Sphere" />          
            </div>
          </div>
        </div>
      </div>


      
    <div className={classNames(styles["bodyabc"])}>
    <div className="container">

  <div className={classNames(styles["our"])}>     
<div className="row">
      <div className="col-md-6 col-12 mb-3 mb-md-0">
        
        <div className={classNames(styles["boxl"])}>
             <h3>Our Story</h3><br></br>
          <p>
          Bluesphere Carbon was founded on the belief that the best way to 
          continue building the fight against climate change is to gain larger 
          interest through investment opportunities. With that in mind, presenting a 
          revolutionary platform rich in opportunities, The Bluesphere Carbon Exchange.
          </p>
          <div className={classNames(styles["divider"])}></div>
        </div>
      </div>
      <div className="col-md-6 col-12">
        <div className={classNames(styles["boxr"])}>
                   <h3>Our Purpose</h3><br></br>
          <p>
          Bluesphere Carbon has developed an inclusive environmental 
          credit economy and community - an accessible, efficient, 
          and transparent global trading platform: the Bluesphere Carbon 
          Exchange (BCE) that allows anyone - businesses, carbon credit suppliers,
           and even investors - to buy, hold, and sell carbon credits.
          </p>
          <div className={classNames(styles["divider"])}></div>
        </div>
      </div>
    </div>
</div>

<div className="row">
          <div className="col-12">
            <div className={classNames(styles["bodydiv"])}>       
            </div>
          </div>
        </div>


        <div className={classNames(styles["market"])}>
      <div className={classNames(styles["multifaceted"])}>
        <h1>
        <spam className={classNames(styles["multi"])}>Multifaceted</spam><br></br>
        <spam className={classNames(styles["revenue"])}>Revenue Generation</spam>
        </h1>
        <div className={classNames(styles["tabc"])}>
       <p> Bluesphere Carbon's agnostic approach allows any environmental credit to be listed on the
      exchange, welcoming various sub-sectors of the market.</p></div>
              </div>

        <div className="row">
          <div className="col-md-6 col-12 mb-3 mb-md-0">
            <div className={classNames(styles["bml"])}>
            <img src={market} alt="market" className="img-fluid"/>
                 <h4>1. PUBLIC SPOT MARKET</h4>
              <p>
              The BCE is agnostic to the type of
              environmental credit transacted and is thus
              able to receive transaction and listing fees for
              virtually all publicly available environmental
              credits on the market, subject to regulatory
              approval.
              </p>
              <div className={classNames(styles["divider"])}></div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className={classNames(styles["bmr"])}>
            <img src={purchases} alt="purchases" className="img-fluid"/>
                       <h4>2. DIRECT PURCHASES</h4>
              <p>
              Bluesphere may acquire verified carbon
              credits directly from accredited sellers or
              from the voluntary carbon market. Revenue
              is generated when the credit is sold to an
              entity requiring carbon offset or when the
              credits appreciate.
              </p>
              <div className={classNames(styles["divider"])}></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12 mb-3 mb-md-0">
            <div className={classNames(styles["bml"])}>
            <img src={credit} alt="credit" className="img-fluid"/>
                 <h4>3. CREDITS STREAMS</h4>
              <p>
              Bluesphere may enter streaming
              agreements with accredited project
              developers or owners of carbon offset
              projects for credits. This will support new
              carbon offset projects while generating
              returns for Bluesphere.
              </p>
              <div className={classNames(styles["divider"])}></div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className={classNames(styles["bmr"])}>
            <img src={data} alt="data" className="img-fluid"/>
                       <h4>4. DATA ANALYSIS</h4>
              <p>
              As an aggregator of voluntary environmental
              credits, Bluesphere will be able to compile
              and analyze a large amount of valuable data.
              Bluesphere will look to expand revenue
              streams through data connection fees and
              information distribution fees.
              </p>
              <div className={classNames(styles["divider"])}></div>
            </div>
          </div>
         </div>
      </div>

    </div>
  </div>



      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={classNames(styles["footabc"])}>
<img ClassName ="img-fluid" src={logow} alt="Blue Sphere" />          
            </div>
          </div>
        </div>
      </div>
 
    </>
  );
};

export default Aboutbc;
