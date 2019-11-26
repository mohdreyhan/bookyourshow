import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VendorNav from "../vendorNavbar/VendorNav.js";
import EnrollTheatre from "../EnrollTheatre/EnrollTheatre.js";
import LoginPage from "../../LoginPage/LoginPage.js";
import VendorPage from "../MainPage/vendorpage.js";

const VendorRoutes = () => (
  <BrowserRouter>
    <VendorNav />
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/enrolltheatre" component={EnrollTheatre} />
      <Route path="/VendorPage" component={VendorPage} />
    </Switch>
  </BrowserRouter>
);

export default VendorRoutes;
