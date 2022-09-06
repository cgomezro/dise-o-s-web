/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { parseBackendErrors } from "../../helpers/parseBackendErrors";
import { updateProfile } from "./../../helpers/user";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import {
  Button,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { updateProfile as updateProfileAction } from "./../../store/actions/app.js";
import { isValidPhoneNumber } from "react-phone-number-input";
import MuiPhoneInput from "material-ui-phone-number";

const Profile = () => {
  // state
  const [submitting, setSubmitting] = useState(false);

  // redux
  const { app } = useSelector((state) => state);
  const dispatch = useDispatch();

  // hooks
  const { control, handleSubmit, errors, setValue, watch } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const profileType = watch("type");

  useEffect(() => {
    if (app.user.profile) {
      setValue("first_name", app.user.profile.first_name);
      setValue("last_name", app.user.profile.last_name);
      setValue("type", app.user.profile.type);
      setValue("address", app.user.profile.address);
      setValue("phone", app.user.profile.phone);
      if (app.user.profile.type === "business") {
        setTimeout(() => {
          setValue("business_name", app.user.profile.business_name);
          setValue("business_address", app.user.profile.business_address);
          setValue("business_number", app.user.profile.business_number);
        });
      }
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
    enqueueSnackbar("Success! Your profile has been updated.", {
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
        General Profile
      </Typography>
      <div className="row">
        <div className="col-xl-5 col-lg-8 col-md-8 col-sm-10 col-12">
          <form onSubmit={handleSubmit(handleProfileUpdate)}>
            <Controller
              as={
                <TextField
                  label="First Name *"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.first_name && true}
                  helperText={errors?.first_name?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 30 }}
                />
              }
              name="first_name"
              control={control}
              defaultValue={""}
              rules={{
                required: "This field is required.",
              }}
            />
            <Controller
              as={
                <TextField
                  label="Last Name *"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.last_name && true}
                  helperText={errors?.last_name?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 30 }}
                />
              }
              name="last_name"
              control={control}
              defaultValue={""}
              rules={{
                required: "This field is required.",
              }}
            />
            <Controller
              as={
                <MuiPhoneInput
                  label="Phone Number"
                  defaultCountry="us"
                  onlyCountries={["us", "ca"]}
                  disableAreaCodes={true}
                  countryCodeEditable={false}
                  variant="outlined"
                  fullWidth={true}
                  className="mb-3"
                  error={errors.phone && true}
                  helperText={
                    errors?.phone?.message
                      ? errors?.phone?.message
                      : "Please provide a valid phone number"
                  }
                />
              }
              name="phone"
              control={control}
              defaultValue={""}
              rules={{
                validate: (value) => {
                  if (value && !isValidPhoneNumber(value)) {
                    return "Enter a valid phone number";
                  }
                },
              }}
            />
            <Controller
              as={
                <TextField
                  label="Address"
                  autoComplete="new-password"
                  fullWidth={true}
                  multiline
                  rows={2}
                  variant="outlined"
                  error={errors.address && true}
                  helperText={errors?.address?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 200 }}
                />
              }
              name="address"
              control={control}
              defaultValue={""}
            />
            <Controller
              as={
                <RadioGroup>
                  <FormControlLabel
                    value={"personal"}
                    control={<Radio />}
                    label="This is my Personal Profile"
                  />
                  <FormControlLabel
                    value={"business"}
                    control={<Radio />}
                    label="This is my Business Profile"
                  />
                </RadioGroup>
              }
              name="type"
              control={control}
              defaultValue={""}
              rules={{
                required: "Please select one.",
              }}
            />
            {errors?.type && (
              <FormHelperText error={errors.type && true}>
                {errors?.type?.message}
              </FormHelperText>
            )}
            {profileType === "business" && (
              <>
                <Controller
                  as={
                    <TextField
                      label="Business Name *"
                      autoComplete="new-password"
                      fullWidth={true}
                      variant="outlined"
                      error={errors.business_name && true}
                      helperText={errors?.business_name?.message}
                      className="mb-3"
                      inputProps={{ maxLength: 30 }}
                    />
                  }
                  name="business_name"
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "This field is required.",
                  }}
                />
                <Controller
                  as={
                    <TextField
                      label="Business Address *"
                      autoComplete="new-password"
                      fullWidth={true}
                      multiline
                      rows={2}
                      variant="outlined"
                      error={errors.business_address && true}
                      helperText={errors?.business_address?.message}
                      className="mb-3"
                      inputProps={{ maxLength: 200 }}
                    />
                  }
                  name="business_address"
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "This field is required.",
                  }}
                />
                <Controller
                  as={
                    <TextField
                      label="Business Number *"
                      autoComplete="new-password"
                      fullWidth={true}
                      variant="outlined"
                      error={errors.business_number && true}
                      helperText={errors?.business_number?.message}
                      className="mb-3"
                      inputProps={{ maxLength: 200 }}
                    />
                  }
                  name="business_number"
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "This field is required.",
                  }}
                />
              </>
            )}
            <Button
              disabled={submitting}
              size="large"
              variant="contained"
              color="primary"
              type="submit"
              className="mt-3"
            >
              Update General Profile
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Profile;
