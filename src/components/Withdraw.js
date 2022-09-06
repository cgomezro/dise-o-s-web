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
import { useSelector, useDispatch } from "react-redux";
import { requestWithdrawal } from "./../helpers/withdraw";
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from "notistack";
import classNames from "classnames";
import styles from "./../sass/buy.module.scss";
import PurchasePreview from "./PurchasePreview";
import { parseBackendErrors } from "./../helpers/parseBackendErrors";
import { SetBalance } from "./../store/actions/balance.js";
import { getBalances } from "./../helpers/balance";
import { ChevronDown, CloseCircleOutline } from "mdi-material-ui";
import { useParams } from "react-router-dom";

const Withdraw = () => {
  // state
  const [is_error_visible, setErrorVisibile] = useState(false);
  const [error, setError] = useState("Something went wrong");
  const [submitting, setSubmitting] = useState(false);
  const [selectedToken, setSelectedToken] = useState("");
  const [tokenSelectorOpen, setTokenSelectorOpen] = useState(false);
  const [validation, setValidation] = useState(false);

  // redux
  const { token, loggedin } = useSelector((state) => state.app);
  const { list, loading } = useSelector((state) => state.assets);
  const dispatch = useDispatch();

  // misc hooks
  const { handleSubmit, control, watch, errors, setValue } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const amount = watch("amount");
  const isValid = /^[0-9]+$/i.test(amount);
  const params = useParams();

  // lifecycles
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedin]);

  useEffect(() => {
    if (!loading && list.length > 0) {
      let assetToSelect = list[0];
      if (params && params.asset_id) {
        const findAsset = list.find((asset) => {
          return asset.id === params.asset_id;
        });
        assetToSelect = findAsset && findAsset;
      }
      if (!assetToSelect.balance) {
        assetToSelect.balance = {
          amount: 0,
        };
      }
      setSelectedToken(assetToSelect);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, list]);

  // methods
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
    const [err] = await requestWithdrawal(
      parseInt(form.amount),
      selectedToken.id,
      token
    );
    if (err) {
      const parsed_errors = parseBackendErrors(err.response);
      setError(parsed_errors);
      setErrorVisibile(true);
      setSubmitting(false);
      return;
    }
    enqueueSnackbar("Success! Your request has been submitted.", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
    setError("");
    setErrorVisibile(false);
    setSubmitting(false);
    setValue("amount", "");
    handleGetBalances(token);
  };

  const handleGetBalances = async (token) => {
    const [err, response] = await getBalances(token);
    if (err) {
      dispatch(SetBalance([]));
      return;
    }
    dispatch(SetBalance(response.data));
  };

  const handleTokenSelectorToggle = () => {
    setTokenSelectorOpen(!tokenSelectorOpen);
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
                    {selectedToken.display_symbol}{" "}
                    <div
                      className={classNames(styles["max"])}
                      onClick={() =>
                        setValue("amount", selectedToken.balance.amount)
                      }
                    >
                      Max
                    </div>
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
          <>
            <PurchasePreview
              amount={isValid ? amount : 0}
              symbol={selectedToken.symbol}
              action="withdraw"
              swap={"amount"}
              validationError={(response) => {
                setValidation(response.error);
              }}
            />
          </>
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
            amount > selectedToken.balance.amount ||
            submitting ||
            validation
          }
        >
          Request
        </Button>

        {isValid && (
          <div className="text-center mt-1">
            {amount > selectedToken.balance.amount && (
              <Typography variant="caption" color="secondary">
                Insufficient Balance
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
          <DialogTitle>Select an asset to withdraw</DialogTitle>
          <IconButton onClick={handleTokenSelectorToggle}>
            <CloseCircleOutline />
          </IconButton>
        </Box>
        <DialogContent className={classNames(styles["content"])}>
          <MenuList>
            {list.map((token, i) => {
              return (
                <MenuItem
                  onClick={() => {
                    setTokenSelectorOpen(false);
                    if (!token.balance) {
                      token.balance = {
                        amount: 0,
                      };
                    }
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

export default Withdraw;
