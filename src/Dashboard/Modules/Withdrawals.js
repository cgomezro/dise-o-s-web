/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getWithdrawals } from "./../../helpers/withdraw";
import { useSelector } from "react-redux";
import {
  Typography,
  Avatar,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
  LinearProgress,
  Box,
  Chip,
} from "@mui/material";
import moment from "moment";

const Withdrawals = () => {
  // state
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  // redux
  const { token } = useSelector((state) => state.app);

  // lifecycles
  useEffect(() => {
    handleGetWithdrawals();
  }, []);

  // methods
  const handleGetWithdrawals = async () => {
    setLoading(true);
    const [err, response] = await getWithdrawals(token);
    setLoading(false);
    if (err) {
      setList([]);
      return;
    }
    setList(response.data);
  };

  return (
    <>
      <Typography variant="h6" className="mb-3">
        Withdrawal Requests
      </Typography>
      <div className="row">
        <div className="col-xl-10 col-lg-8 col-md-8 col-sm-10 col-12">
          <Paper elevation={1}>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="Assets Table">
                <TableHead>
                  <TableRow>
                    <TableCell>Asset</TableCell>
                    <TableCell align="left">Amount</TableCell>
                    <TableCell align="left">Status</TableCell>
                    <TableCell align="right">Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading && (
                    <TableRow>
                      <TableCell colSpan="4">
                        <LinearProgress color="success" />
                      </TableCell>
                    </TableRow>
                  )}

                  {!loading && list.length === 0 && (
                    <TableRow>
                      <TableCell colSpan="4" className="text-center">
                        <Typography variant="caption">
                          No results were returned
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}

                  {!loading && list.length > 0 && (
                    <>
                      {list.map((item, i) => (
                        <TableRow
                          key={i}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            className="d-flex align-items-center"
                          >
                            <Avatar
                              className="me-3"
                              alt={`${item.name}'s Logo`}
                              src={item.asset.logo}
                            />
                            <Box>
                              <Typography variant="body2">
                                {item.asset.name}
                              </Typography>
                              <Typography variant="caption" className="d-block">
                                {item.asset.display_symbol}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell align="left">
                            <strong>
                              {item.amount.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                              })}
                            </strong>
                          </TableCell>
                          <TableCell align="left">
                            <Chip
                              label={item.status}
                              size="small"
                              sx={{ bgcolor: "#f39c12", borderRadius: 1 }}
                            />
                          </TableCell>
                          <TableCell align="right">
                            {moment(item.createdAt).format(
                              "MMM D YYYY, h:mm:ss a"
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </div>
    </>
  );
};
export default Withdrawals;
