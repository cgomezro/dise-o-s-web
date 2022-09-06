/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Typography, Alert, AlertTitle, Button } from "@mui/material";
import classNames from "classnames";
import styles from "./../sass/purchasepreview.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import config from "../config";

const PurchasePreview = ({ amount, symbol, swap, action, validationError }) => {
  // state
  const [warning, setWarning] = useState(null);

  // redux
  const { list } = useSelector((state) => state.assets);
  const { user, loggedin } = useSelector((state) => state.app);

  // logic
  const asset = list.find((item) => {
    return item.symbol === symbol;
  });

  // methods
  const convertToReadable = (value) => {
    const string = value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return string;
  };

  // lifecycles
  useEffect(() => {
    if (action === "withdraw" && loggedin && symbol && asset) {
      if (!user.profile) {
        setWarning(
          <Alert severity="error" className="mb-3">
            <AlertTitle>Attention!</AlertTitle>
            <Typography variant="body2" className="mb-2">
              Please complete your profile before proceeding.
            </Typography>
            <Button
              component={Link}
              to={"/dashboard/profile"}
              color="inherit"
              variant="outlined"
              size="small"
            >
              Go to profile
            </Button>
          </Alert>
        );
        return;
      }
      if (
        asset.price?.usd * parseInt(amount) > 10000 &&
        user.profile &&
        (!user.profile?.proof_of_identity_1 ||
          !user.profile?.proof_of_identity_2)
      ) {
        setWarning(
          <Alert severity="error" className="mb-3">
            <AlertTitle>Attention!</AlertTitle>
            <Typography variant="body2" className="mb-2">
              Please upload your <strong>Identity Documents</strong> to withdraw
              more than $10,000.00.
            </Typography>
            <Button
              component={Link}
              to={"/dashboard/documents"}
              color="inherit"
              variant="outlined"
              size="small"
            >
              Upload Documents
            </Button>
          </Alert>
        );
        validationError({
          error: true,
        });
        return;
      }
      if (asset.type === "token" && user.profile && !user.profile.eth_wallet) {
        setWarning(
          <Alert severity="error" className="mb-3">
            <AlertTitle>Attention!</AlertTitle>
            <Typography variant="body2" className="mb-2">
              Please specify your <strong>ETH Address</strong>.
            </Typography>
            <Button
              component={Link}
              to={"/dashboard/crypto"}
              color="inherit"
              variant="outlined"
              size="small"
            >
              Specify ETH Address
            </Button>
          </Alert>
        );
        return;
      } else if (
        asset.type === "carbon" &&
        user.profile &&
        !user.profile[config.CARBON_ASSETS_SYMBOLS[asset.display_symbol]]
      ) {
        setWarning(
          <Alert severity="error" className="mb-3">
            <AlertTitle>Attention!</AlertTitle>
            <Typography variant="body2" className="mb-2">
              Please specify your{" "}
              <strong>{config.CARBON_ASSETS_NAME[asset.display_symbol]}</strong>{" "}
              number.
            </Typography>
            <Button
              component={Link}
              to={"/dashboard/carbon"}
              color="inherit"
              variant="outlined"
              size="small"
            >
              Specify Account Number
            </Button>
          </Alert>
        );
        return;
      } else if (
        asset.type === "fiat" &&
        user.profile &&
        !user.profile.bank_name
      ) {
        setWarning(
          <Alert severity="error" className="mb-3">
            <AlertTitle>Attention!</AlertTitle>
            <Typography variant="body2" className="mb-2">
              Please specify your <strong>Bank Information</strong>.
            </Typography>
            <Button
              component={Link}
              to={"/dashboard/bank"}
              color="inherit"
              variant="outlined"
              size="small"
            >
              Specify Bank Information
            </Button>
          </Alert>
        );
        return;
      }
      setWarning(null);
      validationError({
        error: false,
      });
    }
  }, [loggedin, symbol, loggedin, asset, amount]);

  return (
    <>
      {warning}
      <div
        className={classNames(
          styles["purchase-preview"],
          "d-flex align-items-center justify-content-between"
        )}
      >
        <div>
          <Typography variant="body1">Order Preview</Typography>
          <Typography variant="caption">
            {asset.symbol === "tether" ? (
              <>
                <Link
                  to={"/dashboard/withdrawals"}
                  className={classNames(styles["withdrawals-link"])}
                >
                  My Requests
                </Link>
              </>
            ) : (
              <>
                {swap === "amount" ? (
                  <>
                    1 {asset.display_symbol} ={" "}
                    <strong>${asset.price.usd}</strong>
                  </>
                ) : (
                  <>
                    $1 = {(1 / asset.price.usd).toFixed(5)}{" "}
                    {asset.display_symbol}
                  </>
                )}
              </>
            )}
          </Typography>
        </div>
        <Typography variant="h3">
          {swap === "amount"
            ? convertToReadable(amount * asset.price.usd)
            : (amount / asset.price.usd).toFixed(3)}
        </Typography>
      </div>
    </>
  );
};

export default PurchasePreview;
