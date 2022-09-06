/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { parseBackendErrors } from "../../helpers/parseBackendErrors";
import { changePassword } from "../../helpers/user";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { Button, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const Security = () => {
  // state
  const [submitting, setSubmitting] = useState(false);

  // redux
  const { app } = useSelector((state) => state);
  const dispatch = useDispatch();

  // hooks
  const { control, handleSubmit, errors, setValue, watch } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {}, []);

  // methods
  const handleChangePassword = async (form) => {
    setSubmitting(true);
    const [error] = await changePassword(
      app.user._id,
      app.token,
      form.password
    );
    setSubmitting(false);
    if (error) {
      const parsed_errors = parseBackendErrors(error.response);
      enqueueSnackbar(parsed_errors, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      return;
    }
    enqueueSnackbar("Success! Your password has been updated.", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
    setValue("password", "");
    setValue("confirm_password", "");
  };

  return (
    <>
      <Typography variant="h6" className="mb-3">
        Security
      </Typography>
      <div className="row">
        <div className="col-xl-5 col-lg-8 col-md-8 col-sm-10 col-12">
          <form onSubmit={handleSubmit(handleChangePassword)}>
            <Controller
              as={
                <TextField
                  type="password"
                  label="New Password"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.password && true}
                  helperText={errors?.password?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 30 }}
                />
              }
              name="password"
              control={control}
              defaultValue={""}
              rules={{
                required: "This field is required.",
                minLength: {
                  value: 5,
                  message: "Password must have at least 5 characters.",
                },
              }}
            />
            <Controller
              as={
                <TextField
                  type="password"
                  label="Confirm New Password"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.confirm_password && true}
                  helperText={errors?.confirm_password?.message}
                  className="mb-3"
                />
              }
              name="confirm_password"
              control={control}
              defaultValue={""}
              rules={{
                validate: (value) => {
                  return (
                    value === watch("password") || "Your passwords must match."
                  );
                },
              }}
            />
            <Button
              disabled={submitting}
              size="large"
              variant="contained"
              color="primary"
              type="submit"
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Security;
