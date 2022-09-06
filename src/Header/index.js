import React, { useState, forwardRef } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Logo from "../components/Logo";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "./../components/Avatar";
import { Logout /* toggleSidebar */ } from "./../store/actions/app.js";
import { CleanAssets } from "./../store/actions/assets";
import { Divider, IconButton, Button, Menu, MenuItem } from "@mui/material";

const ForwardNavLink = forwardRef((props, ref) => (
  <NavLink {...props} innerRef={ref} />
));

const Header = () => {
  // state
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);

  // redux
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();

  // methods
  const handleUserMenuToggle = (e) => {
    setUserMenuAnchor(e.currentTarget);
  };

  const handleLogout = () => {
    dispatch(Logout());
    dispatch(CleanAssets());
  };

  return (
    <div className={classNames(styles["header"], "container-fluid")}>
      <div className="row align-items-center h-100">
        <div className="col-4">
          <Logo />
        </div>
        <div className="col-8 justify-content-end d-flex align-items-centeralign-items-center">
       <Link to="/impact-investing" className={classNames(styles["link"], "me-3 d-none d-lg-block")}>
            Impact Investing
          </Link>
       
          <Link to="/offset-emissions" className={classNames(styles["link"], "me-3 d-none d-lg-block")}>
            Offset Your Emissions
          </Link>
          <Link to="/supply" className={classNames(styles["link"], "me-3 d-none d-lg-block")}>
            Supply Carbon Credits
          </Link>  
          <Link to="/Investor" className={classNames(styles["link"], "me-3 d-none d-lg-block")}>
          New Page
          </Link>
          {app.loggedin ? (
            <>
              <IconButton className="p-0" onClick={handleUserMenuToggle}>
                <Avatar user={app.user} size={33} link={false} />
              </IconButton>
              <Menu
                variant={"menu"}
                anchorEl={userMenuAnchor}
                keepMounted={false}
                open={Boolean(userMenuAnchor)}
                onClose={() => setUserMenuAnchor(null)}
              >
                <MenuItem
                  component={ForwardNavLink}
                  to={"/dashboard/profile"}
                  onClick={() => setUserMenuAnchor(null)}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  component={ForwardNavLink}
                  to={"/dashboard/carbon"}
                  onClick={() => setUserMenuAnchor(null)}
                >
                  Carbon Registries
                </MenuItem>
                <MenuItem
                  component={ForwardNavLink}
                  to={"/dashboard/crypto"}
                  onClick={() => setUserMenuAnchor(null)}
                >
                  Crypto Wallet
                </MenuItem>
                <MenuItem
                  component={ForwardNavLink}
                  to={"/dashboard/bank"}
                  onClick={() => setUserMenuAnchor(null)}
                >
                  Bank Information
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => {
                    setUserMenuAnchor(null);
                    handleLogout();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              color="primary"
              variant="contained"
              disableElevation={true}
              component={Link}
              to="/login"
              size="small"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
