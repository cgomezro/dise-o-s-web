import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import styles from "./GuestPages.module.scss";
import classNames from "classnames";
import Error from "./../components/Error";
import Logo from "./../components/Logo";
import { parseBackendErrors } from "./../helpers/parseBackendErrors";
import { setAuthToken, setUser } from "./../store/actions/app.js";
import { login } from "./../helpers/user";

const Login = (props) => {
  // state
  const [submitting, setSubmitting] = useState(false);
  const [is_error_visible, setErrorVisibile] = useState(false);
  const [error, setError] = useState([]);

  // misc hooks
  const { handleSubmit, control, errors } = useForm();

  // redux
  const dispatch = useDispatch();

  // methods
  const handleUserLogin = async (form) => {
    setSubmitting(true);
    setErrorVisibile(false);

    const [error, response] = await login(form.email, form.password);
    setSubmitting(false);

    if (error) {
      const parsed_errors = parseBackendErrors(error.response);
      setError(parsed_errors);
      setErrorVisibile(true);
      return;
    }

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
              Your financial return for saving our planet.
            </Typography>
            <Typography
              variant="body1"
              className={classNames(styles["text-sub-header"])}
            >
              BlueSphere Carbon is a trading platform for carbon credits
            </Typography>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 px-md-5 h-100 d-flex">
          <form
            onSubmit={handleSubmit(handleUserLogin)}
            className="align-self-center w-100"
          >
            <hr className="my-4 d-md-none" />
            <Typography variant="h3" className="mb-3">
              Login
            </Typography>

            {is_error_visible ? <Error errors={error} /> : null}

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
                  inputProps={{ maxLength: 30 }}
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
                  Login
                </Button>
              </div>
              <div className="col-10 text-end">
                <Link to="/signup" className="fw-bold">
                  Create Account
                </Link>{" "}
                &mdash; <Link to="/forgot-password">Forgot password?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
