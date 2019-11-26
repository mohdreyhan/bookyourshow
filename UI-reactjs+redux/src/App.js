import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import SignUp from "./components/SignUp/SignUp.js";
import LoginPage from "./components/LoginPage/LoginPage.js";
import MainPage from "./components/MainPage/MainPage.js";
import NavbarPage from "./components/NavbarPage/NavbarPage.js";
import TheatreOptions from "./components/TheatreOptions/Theatreoptions.js";
import SelectSeats from "./components/SelectSeats/SelectSeats.js";

import RenderNavside from "./components/Admin/RenderNavside/RenderNavside.js";
import VendorNav from "./components/vendor/vendorNavbar/VendorNav.js";
import VendorRoutes from "./components/vendor/VendorRoutes/VendorRoutes.js";
const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <NavbarPage />
      <RenderNavside />
      <VendorRoutes />
      <Route exact path="/" component={LoginPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signin" component={SignUp} />
      <Route path="/mainpage" component={MainPage} />
      <Route path="/theatreoptions" component={TheatreOptions} />
      <Route path="/selectseats/:id" component={SelectSeats} />
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
