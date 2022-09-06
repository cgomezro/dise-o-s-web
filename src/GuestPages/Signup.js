import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import styles from "./GuestPages.module.scss";
import classNames from "classnames";
import Error from "../components/Error";
import { useSnackbar } from "notistack";
import { parseBackendErrors } from "../helpers/parseBackendErrors";
import Logo from "./../components/Logo";
import { signup } from "./../helpers/user";
import { setAuthToken, setUser } from "./../store/actions/app.js";
import { useDispatch } from "react-redux";

const Signup = (props) => {
  // state
  const [submitting, setSubmitting] = useState(false);
  const [is_error_visible, setErrorVisibile] = useState(false);
  const [error, setError] = useState([]);

  // misc hooks
  const { handleSubmit, control, watch, errors } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  // redux
  const dispatch = useDispatch();

  // methods
  const handleUserSignup = async (form) => {
    setSubmitting(true);
    setErrorVisibile(false);

    const [error, response] = await signup(
      form.username,
      form.email,
      form.password
    );
    setSubmitting(false);

    if (error) {
      const parsed_errors = parseBackendErrors(error.response);
      setError(parsed_errors);
      setErrorVisibile(true);
      return;
    }

    enqueueSnackbar(
      "Congratulations! Your registration has been successfully completed.",
      {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      }
    );
    // Login user right away
    dispatch(setAuthToken(response.data.jwt));
    dispatch(setUser(response.data.user));
    props.history.push("/app");
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
              Hey 👋, we are BlueSphere Carbon
            </Typography>
            <Typography
              variant="body1"
              className={classNames(styles["text-sub-header"])}
            >
              We are on the mission to make the fast growing carbon credit
              market work for all people.
            </Typography>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 px-md-5 h-100 d-flex">
          <form
            onSubmit={handleSubmit(handleUserSignup)}
            className="align-self-center w-100"
          >
            <hr className="my-4 d-md-none" />
            <Typography variant="h3" className="mb-3">
              Create New Account
            </Typography>

            {is_error_visible ? <Error errors={error} /> : null}

            <Controller
              as={
                <TextField
                  label="Username"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.username && true}
                  helperText={errors?.username?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 30 }}
                />
              }
              name="username"
              control={control}
              defaultValue={""}
              rules={{
                required: "This field is required.",
                minLength: {
                  value: 3,
                  message: "Username must have at least 3 characters.",
                },
                pattern: {
                  value: /^[a-z0-9]+$/i,
                  message: "Username must contain only letters and numbers.",
                },
              }}
            />
            <Controller
              as={
                <TextField
                  label="E-mail"
                  autoComplete="new-password"
                  fullWidth={true}
                  variant="outlined"
                  error={errors.email && true}
                  helperText={errors?.email?.message}
                  className="mb-3"
                  inputProps={{ maxLength: 50 }}
                />
              }
              name="email"
              control={control}
              defaultValue={""}
              rules={{
                required: "This field is required.",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                  message: "Please enter a valid email address.",
                },
              }}
            />
            <Controller
              as={
                <TextField
                  type="password"
                  label="Password"
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
                  label="Confirm Password"
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
              <div className="col-2">
                <Button
                  disabled={submitting}
                  size="large"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
              <div className="col-10 text-end">
                <Link to="/login" className="fw-bold">
                  Already have an account?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
