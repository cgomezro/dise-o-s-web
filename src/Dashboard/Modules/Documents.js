/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { Typography, Alert, AlertTitle, Button } from "@mui/material";
import Uploader from "../../components/Uploader";
import { getCurrentUser } from "./../../helpers/user";
import { setUser } from "./../../store/actions/app.js";
import { Link } from "react-router-dom";

const Documents = () => {
  // state
  const [submitting, setSubmitting] = useState(false);

  // redux
  const { app } = useSelector((state) => state);
  const dispatch = useDispatch();

  // hooks
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {}, []);

  // methods
  const uploaded = (response) => {
    handleGetProfile(app.token);
  };

  const handleGetProfile = async (token) => {
    const [error, response] = await getCurrentUser(token);
    if (error) return;
    dispatch(setUser(response.data));
  };

  return (
    <>
      <Typography variant="h6" className="mb-3">
        Identity Documents
      </Typography>
      <div className="row">
        <div className="col-xl-5 col-lg-8 col-md-8 col-sm-10 col-12">
          {!app.user?.profile ? (
            <>
              <Alert severity="warning">
                <AlertTitle>Attention</AlertTitle>
                <Typography variant="body2" className="mb-2">
                  Please complete your <strong>General Profile</strong> first.
                </Typography>
                <Button
                  component={Link}
                  to={"/dashboard/settings"}
                  color="inherit"
                  variant="outlined"
                  size="small"
                >
                  Proceed Now
                </Button>
              </Alert>
            </>
          ) : (
            <>
              <Uploader
                entity_id={app.user.profile.id}
                entity_ref="profile"
                entity_field="proof_of_identity_1"
                callback={(response) => uploaded(response)}
                label="Government Issued ID #1"
              />
              {app.user?.profile?.proof_of_identity_1 ? (
                <>
                  <Typography
                    variant="caption"
                    className="mt-1 mb-3 d-block"
                    style={{ color: "green" }}
                  >
                    {app.user?.profile?.proof_of_identity_1?.name} uploaded.
                    Thank you!
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="caption" className="mt-1 mb-3 d-block">
                    Please upload your document!
                  </Typography>
                </>
              )}
              <Uploader
                entity_id={app.user.profile.id}
                entity_ref="profile"
                entity_field="proof_of_identity_2"
                callback={(response) => uploaded(response)}
                label="Government Issued ID #2"
              />
              {app.user?.profile?.proof_of_identity_2 ? (
                <>
                  <Typography
                    variant="caption"
                    className="mt-1 mb-3 d-block"
                    style={{ color: "green" }}
                  >
                    {app.user?.profile?.proof_of_identity_2?.name} uploaded.
                    Thank you!
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="caption" className="mt-1 mb-3 d-block">
                    Please upload your document!
                  </Typography>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Documents;
