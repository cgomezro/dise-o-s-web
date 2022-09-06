import React from "react";
import Assets from "./components/Assets";
import TradeWidget from "./components/TradeWidget";

const Home = (props) => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8 col-12">
          <Assets {...props} />
        </div>
        <div className="col-md-4 col-12 mt-3 mt-md-0 mb-3">
          <TradeWidget />
        </div>
      </div>
    </div>
  );
};

export default Home;
