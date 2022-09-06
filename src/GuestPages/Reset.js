import React, { useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import styles from "./GuestPages.module.scss";
import classNames from "classnames";
import Error from "../components/Error";
import { useSnackbar } from "notistack";
import { parseBackendErrors } from "../helpers/parseBackendErrors";
import Logo from "../components/Logo";
import { reset } from "../helpers/password";

const Forgot = (props) => {
  // state
  const [submitting, setSubmitting] = useState(false);
  const [is_error_visible, setErrorVisibile] = useState(false);
  const [error, setError] = useState([]);

  // misc hooks
  const { handleSubmit, control, errors, watch } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const handleResetSubmit = async (form) => {
    setSubmitting(true);
    setErrorVisibile(false);

    const [error] = await reset(props.match.params.code, form.password);
    setSubmitting(false);

    if (error) {
      const parsed_errors = parseBackendErrors(error.response);
      setError(parsed_errors);
      setErrorVisibile(true);
      return;
    }

    enqueueSnackbar("Your password has been reset! You can now login.", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });

    props.history.push("/login");
  };

  return (
    <div className={classNames(styles["guest-pages"], "container h-100")}>
      <div className={classNames(styles.header, "row align-items-center")}>
        <div className="col-4">
          <Logo />
        </div>
        <div className="col-8 text-end"></div>
      </div>
      <div
        className={classNames(styles.body, "row h-100 align-items-md-center")}
      >
        <div
          className={classNames(
            styles.column,
            "col-sm-12 col-md-6 px-md-5 h-100 d-flex"
          )}
        >
          <div className="align-self-center">
            <Typography
              variant="h2"
              className={classNames(styles["text-header"])}
            >
              You are on the right track
            </Typography>
            <Typography
              variant="body1"
              className={classNames(styles["text-sub-header"])}
            >
              Don't lose your password again.
            </Typography>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 px-md-5 h-100 d-flex">
          <form
            onSubmit={handleSubmit(handleResetSubmit)}
            className="align-self-center w-100"
          >
            <hr className="my-4 d-md-none" />
            <Typography variant="h3" className="mb-3">
              Set your new password
            </Typography>

            {is_error_visible ? <Error errors={error} /> : null}

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

            <div className="row align-items-center">
              <div className="col-12">
                <Button
                  disabled={submitting}
                  size="large"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Confirm
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Forgot;
