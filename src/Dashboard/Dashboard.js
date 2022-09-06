import React from "react";
import { Redirect } from "react-router-dom";
import styles from "./Dashboard.module.scss";
import classNames from "classnames";
import Sidebar from "./Sidebar";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Profile,
  Security,
  Withdrawals,
  Documents,
  Carbon,
  Crypto,
  Bank,
} from "./Modules";
import LoadingScreen from "./../components/LoadingScreen";

const Dashboard = () => {
  // redux
  const { loading, loggedin } = useSelector((state) => state.app);

  if (loading) return <LoadingScreen />;
  if (!loading && !loggedin) return <Redirect to="/" />;

  return (
    <div className={classNames(styles["dashboard"], "container-fluid h-100")}>
      <div className="row h-100">
        <Sidebar />
        <div className={classNames(styles["content"], "col-md-9 col-12 pt-3")}>
          <Route
            exact
            path={"/dashboard/profile"}
            render={(props) => <Profile {...props} />}
          />
          <Route
            exact
            path={"/dashboard/carbon"}
            render={(props) => <Carbon {...props} />}
          />
          <Route
            exact
            path={"/dashboard/crypto"}
            render={(props) => <Crypto {...props} />}
          />
          <Route
            exact
            path={"/dashboard/bank"}
            render={(props) => <Bank {...props} />}
          />
          <Route
            exact
            path={"/dashboard/documents"}
            render={(props) => <Documents {...props} />}
          />
          <Route
            exact
            path={"/dashboard/security"}
            render={(props) => <Security {...props} />}
          />
          <Route
            exact
            path={"/dashboard/withdrawals"}
            render={(props) => <Withdrawals {...props} />}
          />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
