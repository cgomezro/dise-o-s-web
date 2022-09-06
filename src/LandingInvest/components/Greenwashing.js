import React from "react";
import styles from "./../../sass/landinginvest/greenwashing.module.scss";
import classNames from "classnames";
import factory from "./../assets/factory.svg";

const Greenwashing = (props) => {
  return (
    <>
      <div className={classNames(styles["greenwashing"], "container")}>
        <div className="row">
        <div class="col-sm"></div>
    <div class="col-md-8">
    <img src={factory} alt="Factory" />
    <h2>
                
                The <span>Greenwashing</span> Problem
            </h2>
            <p>
            You’ve heard it before. The latest mega-corporation is committing to greener practices, 
            promising to be net-zero by 2030, 2040, or 2050. As financial markets continue to consider 
            environmental impact, green-focused companies are the frontrunners for new investments.
            </p>
            <br></br>
            <h3>
                
                But what does <span className={classNames(styles["zero"])}>net-zero</span> really mean?
            </h3>
            <p>
            Simply put, a company reaches “net-zero” when the amount of greenhouse gases it emits is 
            matched by the amount it removes - also referred to as carbon neutral.
            </p>   
            <p>
            The way the vast majority of companies are reaching net-zero is through purchasing carbon 
            credits. This is a permit signifying one ton of CO2
            that’s been removed from the atmosphere. 
            (According to the Environmental Defense Fund, that credit would offset what is equivalent to a 
            2,400-mile drive in terms of carbon dioxide emissions.)
            </p> 
    </div>
    <div class="col-sm"></div>
         
          </div>
      </div>
    </>
  );
};

export default Greenwashing;
