/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  Avatar,
  Table,
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  Typography,
  Button,
} from "@mui/material";
import classNames from "classnames";
import styles from "./../sass/assets.module.scss";
import { useSelector } from "react-redux";
import { ArrowLeft } from "mdi-material-ui";

const Assets = (props) => {
  // redux
  const { loggedin } = useSelector((state) => state.app);
  const assets = useSelector((state) => state.assets);
  const balance = useSelector((state) => state.balance);

  // lifecycle

  useEffect(() => {
    if (loggedin && !assets.loading && !balance.loading) {
      for (let i in assets.list) {
        balance.list.find((item) => {
          if (item.asset.symbol === assets.list[i].symbol) {
            const balance = {
              amount: item.amount,
              value: (item.amount * assets.list[i].price.usd).toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                }
              ),
            };
            assets.list[i].balance = balance;
          }
        });
      }
    }
  }, [loggedin, assets.loading, balance.loading, assets.list, balance.list]);

  if (loggedin && !assets.loading && !balance.loading) {
    for (let i in assets.list) {
      balance.list.find((item) => {
        if (item.asset.symbol === assets.list[i].symbol) {
          const balance = {
            amount: item.amount,
            value: (item.amount * assets.list[i].price.usd).toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "USD",
              }
            ),
          };
          assets.list[i].balance = balance;
        }
      });
    }
  }

  return (
    <>
      {props.id && (
        <Button
          startIcon={<ArrowLeft />}
          size="small"
          variant="outlined"
          className="mb-3"
          onClick={() => {
            props.history.push("/app");
          }}
        >
          Back
        </Button>
      )}
      <Paper elevation={0} className={classNames(styles["assets"])}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="Assets Table">
            <TableHead>
              <TableRow>
                <TableCell>Asset</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="right">Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assets.loading && (
                <TableRow>
                  <TableCell colSpan="3">
                    <LinearProgress color="success" />
                  </TableCell>
                </TableRow>
              )}

              {!assets.loading && assets.list.length > 0 && (
                <>
                  {assets.list.map((asset, i) => {
                    if (props.id && props.id !== asset.id) {
                      return null;
                    }
                    return (
                      <TableRow
                        key={i}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          cursor: asset.trade && "pointer",
                        }}
                        onClick={() => {
                          if (!asset.trade) return;
                          props.history.push("/asset/" + asset.id);
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          className="d-flex align-items-center"
                        >
                          <Avatar
                            className="me-3"
                            alt={`${asset.name}'s Logo`}
                            src={
                              asset.logo 
                              ? 
                              asset.logo.formats?.thumbnail ? asset.logo.formats?.thumbnail?.url : asset.logo.url
                              : 
                              ""
                            }
                          />
                          <Box>
                            <Typography variant="body2">
                              {asset.name}
                            </Typography>
                            <Typography variant="caption" className="d-block">
                              {asset.display_symbol}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell align="left">
                          {asset.price && (
                            <div className={classNames(styles["price"])}>
                              <Typography
                                variant="body2"
                                className={classNames(styles["value"])}
                              >
                                ${asset.price.usd}
                              </Typography>
                              <Typography
                                variant="caption"
                                className={classNames(
                                  styles["movement"],
                                  asset.price.usd_24h_change < 0
                                    ? styles["negative"]
                                    : styles["positive"]
                                )}
                              >
                                {asset.price.usd_24h_change.toFixed(2)}%
                              </Typography>
                            </div>
                          )}
                        </TableCell>
                        <TableCell align="right">
                          <div className={classNames(styles["price"])}>
                            <Typography
                              variant="body2"
                              className={classNames(styles["value"])}
                            >
                              {asset.balance && loggedin
                                ? asset.balance.amount
                                : "0"}
                            </Typography>
                            <Typography
                              variant="caption"
                              className={classNames(styles["movement"])}
                            >
                              {asset.balance && loggedin
                                ? asset.balance.value
                                : "$0"}
                            </Typography>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Assets;
