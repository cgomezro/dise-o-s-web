/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { parseBackendErrors } from "../../helpers/parseBackendErrors";
import { updateProfile } from "./../../helpers/user";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { Button, TextField, Typography, Alert } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { updateProfile as updateProfileAction } from "./../../store/actions/app.js";

const Crypto = () => {
  // state
  const [submitting, setSubmitting] = useState(false);

  // redux
  const { app } = useSelector((state) => state);
  const dispatch = useDispatch();

  // hooks
  const { control, handleSubmit, errors, setValue } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (app.user.profile) {
      setValue("eth_wallet", app.user.profile.eth_wallet);
    }
  }, []);

  // methods
  const handleProfileUpdate = async (form) => {
    setSubmitting(true);
    const [error, response] = await updateProfile(
      app.user._id,
      app.token,
      form
    );
    setSubmitting(false);
    if (error) {
      const parsed_errors = parseBackendErrors(error.response);
      enqueueSnackbar(parsed_errors, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      return;
    }
    enqueueSnackbar("Success! Your crypto wallet has been updated.", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
    dispatch(updateProfileAction(response.data));
  };

  return (
    <>
      <Typography variant="h6" className="mb-3">
        Crypto Assets Withdrawal Address
      </Typography>
      <div className="row">
        <div className="col-xl-5 col-lg-8 col-md-8 col-sm-10 col-12">
          <Alert severity="warning" className="mb-3">
            <strong>Attention!</strong> Please ensure you possess and control
            the private keys of your wallet or you may lose your tokens with no
            recourse or refunds.
          </Alert>
          <form onSubmit={handleSubmit(handleProfileUpdate)}>
            <Controller
              as={
                <TextField
                  label="ETH Wallet"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.eth_wallet && true}
                  helperText={errors?.eth_wallet?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 55 }}
                />
              }
              name="eth_wallet"
              control={control}
              defaultValue={""}
              rules={{
                required: "This field is required.",
              }}
            />
            <Button
              disabled={submitting}
              size="large"
              variant="contained"
              color="primary"
              type="submit"
            >
              Update Withdrawal Address
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Crypto;
