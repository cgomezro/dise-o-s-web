/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Button,
  Avatar,
  Box,
  TextField,
  InputAdornment,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  MenuList,
  ListItemIcon,
  ListItemText,
  IconButton,
  MenuItem,
  Alert,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { submitPayment } from "./../helpers/payment";
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from "notistack";
import classNames from "classnames";
import styles from "./../sass/buy.module.scss";
import PurchasePreview from "./PurchasePreview";
import { ChevronDown, CloseCircleOutline, SwapVertical } from "mdi-material-ui";
import { parseBackendErrors } from "./../helpers/parseBackendErrors";

const Buy = () => {
  // stripe
  const stripe = window.Stripe("pk_uDxlLcNvM1UPQ8Jq6OGXkBgfuNYEx");

  // state
  const [is_error_visible, setErrorVisibile] = useState(false);
  const [error, setError] = useState("Something went wrong");

  // state
  const [submitting, setSubmitting] = useState(false);
  const [selectedToken, setSelectedToken] = useState("");
  const [tokenSelectorOpen, setTokenSelectorOpen] = useState(false);
  const [swap, setSwap] = useState("amount");

  // redux
  const { token, loggedin } = useSelector((state) => state.app);
  const { list, loading } = useSelector((state) => state.assets);

  // misc hooks
  const { handleSubmit, control, watch, errors } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const amount = watch("amount");
  const isValid = /^[0-9]+$/i.test(amount);
  const params = useParams();

  // lifecycles
  useEffect(() => {
    if (!loading && list.length > 0) {
      let assetToSelect = list[0];
      if (params && params.asset_id) {
        const findAsset = list.find((asset) => {
          return asset.id === params.asset_id;
        });
        assetToSelect = findAsset && findAsset;
      }
      setSelectedToken(assetToSelect);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, list, params]);

  // methods
  /*
  const handlePaymentStatus = async (session) => {
    const [err, response] = await getPaymentStatus(session, token);
    if (err) {
      return;
    }
  };
  */

  const handleSubmitPayment = async (form) => {
    if (!loggedin) {
      enqueueSnackbar("Please login to continue", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      return;
    }
    setSubmitting(true);
    const [err, response] = await submitPayment(
      parseInt(form.amount),
      selectedToken.id,
      swap,
      token
    );
    if (err) {
      const parsed_errors = parseBackendErrors(err.response);
      setError(parsed_errors);
      setErrorVisibile(true);
      setSubmitting(false);
      return;
    }
    stripe
      .redirectToCheckout({
        sessionId: response.data.session,
      })
      .then((result) => {});
  };

  const handleTokenSelectorToggle = () => {
    setTokenSelectorOpen(!tokenSelectorOpen);
  };

  const handleSetSwap = () => {
    setSwap(swap === "amount" ? "value" : "amount");
  };

  return (
    <div className={classNames(styles["buy"], "p-0")}>
      <form onSubmit={handleSubmit(handleSubmitPayment)} className="w-100">
        <Controller
          as={
            <TextField
              label="Amount"
              autoComplete="new-password"
              fullWidth={true}
              variant="outlined"
              error={errors.amount && true}
              helperText={errors?.amount?.message}
              className="alt-input mb-3"
              inputProps={{ maxLength: 30 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {swap === "amount" ? selectedToken.display_symbol : "$"}{" "}
                    <SwapVertical
                      onClick={handleSetSwap}
                      color="primary"
                      className={classNames(styles["swap"])}
                    />
                  </InputAdornment>
                ),
              }}
            />
          }
          name="amount"
          control={control}
          defaultValue={""}
          rules={{
            required: "This field is required.",
            pattern: {
              value: /^[0-9]+$/i,
              message: "Please enter a valid amount (eg. 100).",
            },
            validate: (value) => {
              if (parseInt(value) <= 0) {
                return "Please enter a valid amount (eg. 100).";
              }
            },
          }}
        />

        <Button
          fullWidth={true}
          size="large"
          variant="outlined"
          onClick={handleTokenSelectorToggle}
          className={classNames(
            styles["asset-selector"],
            "d-flex align-items-center justify-content-between mb-3"
          )}
        >
          {loading ? (
            <Typography className="text-center w-100">Loading...</Typography>
          ) : (
            <>
              <div className="d-flex align-items-center">
                <Avatar
                  className={classNames(styles["avatar"])}
                  sx={{ width: 34, height: 34 }}
                  alt={`${selectedToken.name}'s Logo`}
                  src={
                    selectedToken.logo 
                    ? 
                    selectedToken.logo.formats?.thumbnail ? selectedToken.logo.formats?.thumbnail?.url : selectedToken.logo.url
                    : 
                    ""
                  }
                />
                <Box>
                  <Typography variant="body1">{selectedToken.name}</Typography>
                </Box>
              </div>
              <ChevronDown className={classNames(styles["arrow"])} />
            </>
          )}
        </Button>

        {selectedToken && (
          <PurchasePreview
            amount={isValid ? amount : 0}
            symbol={selectedToken.symbol}
            swap={swap}
          />
        )}

        {is_error_visible ? (
          <Alert className="mb-3" severity="error">
            {error}
          </Alert>
        ) : null}

        <Button
          type="submit"
          fullWidth={true}
          disableElevation={true}
          size="large"
          variant="contained"
          disabled={
            loading ||
            !isValid ||
            (isValid &&
              swap === "amount" &&
              amount * selectedToken.price.usd > 10000) ||
            (isValid && swap === "value" && amount > 10000) ||
            submitting
          }
        >
          Continue
        </Button>

        {isValid && (
          <div className="text-center mt-1">
            {(swap === "amount" && amount * selectedToken.price.usd > 10000) ||
            (swap === "value" && amount > 10000) ? (
              <Typography variant="caption" color="secondary">
                Max. amount is $10,000.00
              </Typography>
            ) : (
              <Typography variant="caption">
                {swap === "amount"
                  ? "Slippage is 0.5 - 1%"
                  : "Your final order amount may be rounded"}
              </Typography>
            )}
          </div>
        )}
      </form>
      <Dialog
        onClose={handleTokenSelectorToggle}
        open={tokenSelectorOpen}
        fullWidth={true}
        className={classNames(styles["asset-selector-dialog"])}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pr={1}
        >
          <DialogTitle>Select an asset to buy</DialogTitle>
          <IconButton onClick={handleTokenSelectorToggle}>
            <CloseCircleOutline />
          </IconButton>
        </Box>
        <DialogContent className={classNames(styles["content"])}>
          <MenuList>
            {list.map((token, i) => {
              if (token.symbol === "tether") return null;
              return (
                <MenuItem
                  onClick={() => {
                    setTokenSelectorOpen(false);
                    setSelectedToken(token);
                  }}
                  divider={i < list.length - 1 && true}
                  key={`token-${token.symbol}`}
                  className={classNames(styles["item"], "py-2")}
                >
                  <ListItemIcon className="me-3">
                    <Avatar 
                      alt={`${token.name}'s Logo`} 
                      src={
                        token.logo 
                        ? 
                        token.logo.formats?.thumbnail ? token.logo.formats?.thumbnail?.url : token.logo.url
                        : 
                        ""
                      }
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={token.name}
                    secondary={token.display_symbol}
                  />
                </MenuItem>
              );
            })}
          </MenuList>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Buy;
