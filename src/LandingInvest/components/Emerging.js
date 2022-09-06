import React from "react";
import styles from "./../../sass/landinginvest/emerging.module.scss";
import classNames from "classnames";
import republic from "./../assets/icons/Republic.png";

const Emerging = (props) => {
  return (
    <div style={{background:"#141e47"}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={classNames(styles["emerging"])}>
              <h2>Bluesphere is at the epicenter of an  
        <span> EMERGING MEGATREND</span> 
        </h2>
        <br></br>
        <p>Carbon Credits are on fire. According to leading firm IHS Markit, as of December 31, 2021, the global price
          of carbon was $51.45 per ton of CO<sub>2</sub>. In order to meet a global warming limit of 1.5 degrees Celsius, carbon allowances prices would need
          to hit $147 per ton.
          <br></br>
          <br></br>
          This trend is in the early stages and Bluesphere is making the move to position itself at the nexus of this movement
          as the carbon credits plaform of choice.
          <br></br>
          <br></br>
          This is your chance to attach yourself to this megatrend for only $25 per share.
          <br></br>
          <br></br>
          <br></br>
          
<a className={classNames(styles["innow"])} href="#" style={{ textDecoration: "none" }}>
<button className={classNames(styles["btoni"])} ><span className={classNames(styles["ideck"])}>Invest Now
<br></br>
<img src={republic} alt="Republic" className="republic" />
</span>                            
</button> </a>
        </p>
        
        
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emerging;
