import React from "react";
import { CircularProgress } from "@mui/material";

const LoadingScreen = () => {
  return (
    <div className="loading d-flex justify-content-center align-items-center w-100 h-100">
      <CircularProgress />
    </div>
  );
};

export default LoadingScreen;
