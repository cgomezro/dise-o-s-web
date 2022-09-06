/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { parseBackendErrors } from "../../helpers/parseBackendErrors";
import { updateProfile } from "./../../helpers/user";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { Button, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { updateProfile as updateProfileAction } from "./../../store/actions/app.js";

const Bank = () => {
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
      setValue("bank_name", app.user.profile.bank_name);
      setValue("bank_address", app.user.profile.bank_address);
      setValue("transit_number", app.user.profile.transit_number);
      setValue("account_number", app.user.profile.account_number);
      setValue("swift", app.user.profile.swift);
      setValue("bank_number", app.user.profile.bank_number);
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
    enqueueSnackbar("Success! Your bank information has been updated.", {
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
        Bank Information
      </Typography>
      <div className="row">
        <div className="col-xl-5 col-lg-8 col-md-8 col-sm-10 col-12">
          <form onSubmit={handleSubmit(handleProfileUpdate)}>
            <Controller
              as={
                <TextField
                  label="Bank Name"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.bank_name && true}
                  helperText={errors?.bank_name?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 55 }}
                />
              }
              name="bank_name"
              control={control}
              defaultValue={""}
              rules={{
                required: "This field is required.",
              }}
            />
            <Controller
              as={
                <TextField
                  label="Bank Address"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.bank_address && true}
                  helperText={errors?.bank_address?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 55 }}
                />
              }
              name="bank_address"
              control={control}
              defaultValue={""}
              rules={{
                required: "This field is required.",
              }}
            />
            <Controller
              as={
                <TextField
                  label="Transit Number"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.transit_number && true}
                  helperText={errors?.transit_number?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 55 }}
                />
              }
              name="transit_number"
              control={control}
              defaultValue={""}
              rules={{
                required: "This field is required.",
              }}
            />
            <Controller
              as={
                <TextField
                  label="Account Number"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.account_number && true}
                  helperText={errors?.account_number?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 55 }}
                />
              }
              name="account_number"
              control={control}
              defaultValue={""}
              rules={{
                required: "This field is required.",
              }}
            />
            <Controller
              as={
                <TextField
                  label="Bank Number"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.bank_number && true}
                  helperText={errors?.bank_number?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 55 }}
                />
              }
              name="bank_number"
              control={control}
              defaultValue={""}
              rules={{
                required: "This field is required.",
              }}
            />
            <Controller
              as={
                <TextField
                  label="SWIFT Code"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.swift && true}
                  helperText={errors?.swift?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 55 }}
                />
              }
              name="swift"
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
              Update Bank Information
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Bank;
