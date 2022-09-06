/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RestoreUser, SetLoading } from "./store/actions/app.js";
import { SetAssets } from "./store/actions/assets.js";
import { SetBalance } from "./store/actions/balance.js";
import { getCurrentUser } from "./helpers/user";
import { getRates } from "./helpers/rates";
import { getBalances } from "./helpers/balance";
import Header from "./Header";

const Bootstrap = (props) => {
  // redux
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();

  // methods
  const handleLogin = async () => {
    /**
     * Check if the users auth token was saved
     * and whether they should be logged in or not
     */
    const token = localStorage.getItem("token"); // look in localStoarge for the auth token
    if (token && app.loggedin) {
      // loggedin just now, coming from Login page
      handleGetBalances(token);
      dispatch(SetLoading(false));
      return;
    }

    if (!token && !app.loggedin) {
      // not loggedin at all
      dispatch(SetLoading(false));
      return;
    }

    if (token && !app.loggedin) {
      // The user was loggedin at some point; restore the session by calling users profile endpoint
      const [error, response] = await getCurrentUser(token);
      if (error) {
        // token was busted. Clean up everything
        localStorage.removeItem("token");
        dispatch(SetLoading(false));
        return;
      }
      handleGetBalances(token);
      dispatch(RestoreUser(response.data, token));
      dispatch(SetLoading(false));
    }
  };

  const handleGetRates = async () => {
    const [err, response] = await getRates();
    if (err) {
      dispatch(SetAssets([]));
    }
   dispatch(SetAssets(response.data));
  };

  const handleGetBalances = async (token) => {
    const [err, response] = await getBalances(token);
    if (err) {
      dispatch(SetBalance([]));
      return;
    }
    dispatch(SetBalance(response.data));
  };

  // lifecycle
  useEffect(() => {
    handleLogin();
    handleGetRates();
  }, []);

  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
};
export default withRouter(Bootstrap);
