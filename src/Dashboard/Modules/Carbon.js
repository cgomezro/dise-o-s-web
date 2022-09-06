/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { parseBackendErrors } from "../../helpers/parseBackendErrors";
import { updateProfile } from "./../../helpers/user";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { Button, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { updateProfile as updateProfileAction } from "./../../store/actions/app.js";

const Carbon = () => {
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
      setValue(
        "american_carbon_account",
        app.user.profile.american_carbon_account
      );
      setValue(
        "verified_standard_account",
        app.user.profile.verified_standard_account
      );
      setValue("gold_standard_account", app.user.profile.gold_standard_account);
      setValue(
        "climate_action_account",
        app.user.profile.climate_action_account
      );
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
    enqueueSnackbar("Success! Your carbon registry has been updated.", {
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
        Carbon Registries
      </Typography>
      <div className="row">
        <div className="col-xl-5 col-lg-8 col-md-8 col-sm-10 col-12">
          <form onSubmit={handleSubmit(handleProfileUpdate)}>
            <Controller
              as={
                <TextField
                  label="Verified Carbon Standard Registry Account"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.verified_standard_account && true}
                  helperText={errors?.verified_standard_account?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 55 }}
                />
              }
              name="verified_standard_account"
              control={control}
              defaultValue={""}
            />
            <Controller
              as={
                <TextField
                  label="Gold Standard Registry Account"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.gold_standard_account && true}
                  helperText={errors?.gold_standard_account?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 55 }}
                />
              }
              name="gold_standard_account"
              control={control}
              defaultValue={""}
            />
            <Controller
              as={
                <TextField
                  label="Climate Action Reserve Registry Account"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.climate_action_account && true}
                  helperText={errors?.climate_action_account?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 55 }}
                />
              }
              name="climate_action_account"
              control={control}
              defaultValue={""}
            />
            <Controller
              as={
                <TextField
                  label="American Carbon Registry Account"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.american_carbon_account && true}
                  helperText={errors?.american_carbon_account?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 55 }}
                />
              }
              name="american_carbon_account"
              control={control}
              defaultValue={""}
            />
            <Button
              disabled={submitting}
              size="large"
              variant="contained"
              color="primary"
              type="submit"
            >
              Update Carbon Registries
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Carbon;
