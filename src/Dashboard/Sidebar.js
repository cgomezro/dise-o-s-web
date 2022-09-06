import React, { forwardRef } from "react";
import styles from "./Dashboard.module.scss";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
//import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText } from "@mui/material";

const ForwardNavLink = forwardRef((props, ref) => (
  <NavLink {...props} innerRef={ref} />
));

const Sidebar = () => {
  // redux
  // const redux = useSelector(state => state);
  // const dispatch = useDispatch();

  return (
    <div
      className={classNames(
        styles["sidebar-wrapper"],
        "col-md-3 d-none d-md-block"
      )}
    >
      {/*
        <Button 
          variant="contained" 
          disableElevation
          color="primary"
          className="w-100 mb-1"
          component={ForwardNavLink}
          to={"/wizard/" }
        >Add New Property</Button>
      */}
      <List dense component="nav">
        <ListItem
          exact
          activeClassName={styles.selected}
          button
          component={ForwardNavLink}
          to={"/dashboard/profile"}
        >
          <ListItemText primary="General Profile" />
        </ListItem>
        <ListItem
          exact
          activeClassName={styles.selected}
          button
          component={ForwardNavLink}
          to={"/dashboard/carbon"}
        >
          <ListItemText primary="Carbon Registries" />
        </ListItem>
        <ListItem
          exact
          activeClassName={styles.selected}
          button
          component={ForwardNavLink}
          to={"/dashboard/crypto"}
        >
          <ListItemText primary="Crypto Wallet" />
        </ListItem>
        <ListItem
          exact
          activeClassName={styles.selected}
          button
          component={ForwardNavLink}
          to={"/dashboard/bank"}
        >
          <ListItemText primary="Bank Information" />
        </ListItem>
        <ListItem
          exact
          activeClassName={styles.selected}
          button
          component={ForwardNavLink}
          to={"/dashboard/documents"}
        >
          <ListItemText primary="Identity Documents" />
        </ListItem>
        <ListItem
          exact
          activeClassName={styles.selected}
          button
          component={ForwardNavLink}
          to={"/dashboard/security"}
        >
          <ListItemText primary="Security" />
        </ListItem>
        <ListItem
          exact
          activeClassName={styles.selected}
          button
          component={ForwardNavLink}
          to={"/dashboard/withdrawals"}
        >
          <ListItemText primary="Withdrawals" />
        </ListItem>
      </List>
    </div>
  );
};
export default Sidebar;
