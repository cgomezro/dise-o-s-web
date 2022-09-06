import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./sass/bootstrap.scss";
import "./sass/app.scss";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import store from "./store";
import "moment-timezone";

// Styling
import theme from "./theme";

// Utilities
import Tracker from "./GoogleAnalytics.js";

// Wrapper
import Bootstrap from "./Bootstrap";

// Pages
import App from "./Home";
import Asset from "./Asset";
import Home from "./Landing";
import Legal from "./Legal";
import ImpactInvesting from "./ImpactInvesting";
import OffsetEmissions from "./OffsetEmissions";
import Supply from "./Supply";
import Investor from "./Investor";

import {
  Login,
  Signup,
  Forgot,
  Reset,
  AccountConfirmation,
} from "./GuestPages";
import { Dashboard } from "./Dashboard";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Tracker(Login)} />
            <Route exact path="/signup" component={Tracker(Signup)} />
            <Route exact path="/forgot-password" component={Tracker(Forgot)} />
            <Route
              exact
              path="/reset-password/:code"
              component={Tracker(Reset)}
            />
            <Route
              exact
              path="/confirmation"
              component={Tracker(AccountConfirmation)}
            />
              <Route exact path="/Investor" component={Tracker(Investor)} />
              <Route exact path="#abc" component={Tracker(Investor)} />
              <Route exact path="#market" component={Tracker(Investor)} />
              <Route exact path="#team" component={Tracker(Investor)} />
             

              
            <Bootstrap>
              <Switch>
                <Route exact path="/" component={Tracker(Home)} />
                <Route exact path="/app/:session?" component={Tracker(App)} />
                <Route exact path="/tos" component={Tracker(Legal)} />
                <Route exact path="/impact-investing" component={Tracker(ImpactInvesting)} />
                <Route exact path="/offset-emissions" component={Tracker(OffsetEmissions)} />
                <Route exact path="/supply" component={Tracker(Supply)} />
               
              </Switch>
              <Route
                exact
                path="/dashboard/:section?/:subsection?/:property_id?/:activity?/:trail?"
                component={Tracker(Dashboard)}
              />
              <Route exact path="/asset/:asset_id" component={Tracker(Asset)} />
            </Bootstrap>
          </Switch>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")

  
);
