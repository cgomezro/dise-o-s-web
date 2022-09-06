import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import styles from "./GuestPages.module.scss";
import classNames from "classnames";
import Error from "../components/Error";
import { useSnackbar } from "notistack";
import { parseBackendErrors } from "../helpers/parseBackendErrors";
import Logo from "../components/Logo";
import { forgot } from "../helpers/password";

const Forgot = () => {
  // state
  const [submitting, setSubmitting] = useState(false);
  const [is_error_visible, setErrorVisibile] = useState(false);
  const [error, setError] = useState([]);

  // misc hooks
  const { handleSubmit, setValue, control, errors } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  // methods
  const handleForgotSubmit = async (form) => {
    setSubmitting(true);
    setErrorVisibile(false);

    const [error] = await forgot(form.email);
    setSubmitting(false);

    if (error) {
      const parsed_errors = parseBackendErrors(error.response);
      setError(parsed_errors);
      setErrorVisibile(true);
      return;
    }

    enqueueSnackbar(
      "Success! Check your email and follow the instruction to reset your password.",
      {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      }
    );
    setValue("email", "");
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
              Stuff happens...
            </Typography>
            <Typography
              variant="body1"
              className={classNames(styles["text-sub-header"])}
            >
              All is not lost
            </Typography>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 px-md-5 h-100 d-flex">
          <form
            onSubmit={handleSubmit(handleForgotSubmit)}
            className="align-self-center w-100"
          >
            <hr className="my-4 d-md-none" />
            <Typography variant="h3" className="mb-3">
              Forgot your password?
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
                  No, I am good.
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Forgot;
