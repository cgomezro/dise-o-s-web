import React, { useState } from "react";
import Buy from "./Buy";
import Sell from "./Sell";
import Withdraw from "./Withdraw";
import { Tabs, Tab } from "@mui/material";

const TradeWidget = () => {
  const [tab, setTab] = useState(0);
  const handleChange = (e, newValue) => {
    setTab(newValue);
  };
  const renderSwitch = (param) => {
    switch (param) {
      case 0:
      default:
        return <Buy />;
      case 1:
        return <Sell />;
      case 2:
        return <Withdraw />;
    }
  };
  return (
    <>
      <Tabs value={tab} onChange={handleChange} centered className="mb-3">
        <Tab label="Buy" />
        <Tab label="Sell" />
        <Tab label="Withdraw" />
      </Tabs>
      {renderSwitch(tab)}
    </>
  );
};

export default TradeWidget;
