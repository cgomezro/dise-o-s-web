import React from "react";
import styles from "./../../sass/landing/problem-solution.module.scss";
import classNames from "classnames";
import problem from "./../assets/problem.svg";
import solution from "./../assets/solution.png";

const ProblemSolution = (props) => {
  return (
    <>
      <div className={classNames(styles["problem-solution"], "container")}>
        <div className="row">
          <div className="col-md-6 col-12 mb-3 mb-md-0">
            <div className={classNames(styles["problem"])}>
              <img src={problem} alt="Problem" />
              <h3>Problem</h3>
              <p>
                Environmental credits tend to lack liquidity - which often
                leaves such credits unused, to the detriment of the environment.
              </p>
              <div className={classNames(styles["divider"])}></div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className={classNames(styles["solution"])}>
              <img src={solution} alt="Solution" />
              <h3>Solution</h3>
              <p>
                Enable spot trading of environmental credits which can be bought
                and sold on the BlueSphere Exchange, providing credit holders an
                easy way to liquidate their credits to a pool of qualified
                purchasers.
              </p>
              <div className={classNames(styles["divider"])}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemSolution;
