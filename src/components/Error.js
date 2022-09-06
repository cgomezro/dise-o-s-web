import React, { Fragment } from "react";
import { Alert } from "@mui/material";

export default function Error({ errors }) {
  return (
    <Fragment>
      {errors?.map((error) => (
        <Alert key={error?.id} className="mb-3" severity="error">
          {error?.message}
        </Alert>
      ))}
    </Fragment>
  );
}
