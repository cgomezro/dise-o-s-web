import React from "react";
import styles from "./../../sass/landinginvest/voluntary.module.scss";
import classNames from "classnames";
const Voluntary = (props) => {
  return (
    <>
   <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="market" className={classNames(styles["headv"])}>
            <h2>         
                What is a <span>Voluntary</span> Carbon Offset Market?</h2>
       
                <div className={classNames(styles["tv"])}>
       <p> To understand the Carbon Offsets Industry, it’s crucial to know the difference between the two
            markets that make it up - the regulated market and the voluntary market.</p></div>
            </div>
          </div>
        </div>
      </div>


      
    <div className={classNames(styles["bodyv"])}>
    <div className="container">

  <div className={classNames(styles["vmarket"])}>     
<div className="row">
      <div className="col-md-6 col-12 mb-3 mb-md-0">
        
        <div className={classNames(styles["boxl"])}>
             <h3>The Regulated Market</h3><br></br>
          <p>
          The regulated market consists of
          companies under “cap-and-trade” 
          regulations determined at regional and
          state levels. These companies are 
          mandated to operate at certain
          emissions levels and are issued a certain 
          number of carbon credits each year.
          </p>
          <div className={classNames(styles["divider"])}></div>
        </div>
      </div>
      <div className="col-md-6 col-12">
        <div className={classNames(styles["boxr"])}>
                   <h3>The Voluntary Market</h3><br></br>
          <p>
          The voluntary market is made up of
          companies that are not regulated but
          choose to pursue carbon neutrality.
          Because this market is unregulated,
          there’s no central authority overseeing 
          the issuance of these voluntary
          carbon credits.
          </p>
          <div className={classNames(styles["divider"])}></div>
        </div>
      </div>
    </div>

    <div className={classNames(styles["vmarketbce"])}>
    <div className={classNames(styles["tm"])}>
        <h1>
        The
        <spam className={classNames(styles["txtbold"])}> Bluesphere Carbon Exchange </spam>
        is a centralized platform for the 
        <spam className={classNames(styles["txtbold"])}> Voluntary Market</spam>
        </h1><br></br>
        <div className={classNames(styles["ulist"])}>
        <ul classNam="list">
    <li className={classNames(styles["imgli"])}>BCE provides a solution to the lack of price transparency and liquidity in the current
voluntary environmental credit economy.</li>
    <li className={classNames(styles["imgli"])}>Transparent forces of the economy will determine the most suitable pricing for
environmental credits to prevent low-grade environmental credits being passed off as
mainstream carbon credits used for compliance in the regulated markets.</li> 
 </ul></div>
 </div>
              </div>

</div>

<div className="row">
          <div className="col-12">
            <div className={classNames(styles["bodydiv"])}>       
            </div>
          </div>
        </div>


        <div className={classNames(styles["marketo"])}>
      <div className={classNames(styles["tmarket"])}>
        <h1>
      Market Opportunity
              </h1>
            </div>

        <div className="row">
          <div className="col-md-6 col-12 mb-3 mb-md-0">
            <div className={classNames(styles["mol"])}>
                <h1>5,000+</h1>
              <p>
              Global businesses have set voluntary climate targets
              </p>
              <div className={classNames(styles["divider"])}></div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className={classNames(styles["mor"])}>
                 <h1>286%</h1>
              <p>
              Appreciation in voluntary carbon offset markets in 2021
              </p>
              <div className={classNames(styles["divider"])}></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12 mb-3 mb-md-0">
            <div className={classNames(styles["mol"])}>
                  <h1>$305.8M</h1>
              <p>
              This was voluntary carbon offsets market size in 2020
              </p>
              <div className={classNames(styles["divider"])}></div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className={classNames(styles["mor"])}>
                   <h1>$10-25B</h1>
              <p>
              By 2030, forecasts project this value of the industry
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
            <div className={classNames(styles["footv"])}>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Voluntary;
