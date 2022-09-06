/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from "react";
import config from "../config";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import Uppy from "@uppy/core";
import XHRUpload from "@uppy/xhr-upload";
import Dashboard from "@uppy/dashboard";
import { DashboardModal } from "@uppy/react";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import { useSnackbar } from "notistack";

const Uploader = ({ entity_id, entity_ref, entity_field, callback, label }) => {
  // state
  const [is_opened, setOpen] = useState(false);

  // redux
  const { app } = useSelector((state) => state);

  // hooks
  const { enqueueSnackbar } = useSnackbar();

  // methods
  const closeUploader = () => {
    setOpen(false);
  };

  const uppy = useMemo(() => {
    return new Uppy({
      restrictions: {
        maxFileSize: 3000000,
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
        allowedFileTypes: ["image/png", "image/jpeg"],
      },
    })
      .use(Dashboard)
      .use(XHRUpload, {
        endpoint: `${config.SERVER_URL}/upload`,
        formData: true,
        fieldName: "files",
        headers: {
          Authorization: `Bearer ${app.token}`,
        },
      })
      .on("complete", (result) => {
        if (result.successful.length > 0) {
          let results = [];
          for (let i in result.successful) {
            let { response } = result.successful[i];
            if (response["body"][0]) {
              results.push(response["body"][0]);
            }
          }
          callback(results);
          enqueueSnackbar("Your photo has been successfully uploaded!", {
            variant: "success",
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          });
          return;
        }
      })
      .on("file-added", (file) => {
        uppy.setFileMeta(file.id, {
          ref: entity_ref,
          refId: entity_id,
          field: entity_field,
        });
      })
      .on("dashboard:modal-closed", () => {
        uppy.reset();
      });
  }, []);

  useEffect(() => {
    return () => uppy.close();
  }, []);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained" color="primary">
        {label}
      </Button>
      <DashboardModal
        uppy={uppy}
        closeAfterFinish={true}
        closeModalOnClickOutside
        open={is_opened}
        onRequestClose={() => closeUploader()}
        note="JPEG and PNG only, up to 3MB."
      />
    </>
  );
};

export default Uploader;
