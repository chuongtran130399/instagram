import React from "react";
import PropTypes from "prop-types";
import {  Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const ProtectedRoute = ({ user, children, ...rest }) => {
          if (user) {
            return children;
          }

          if (!user) {
            return (
              <Navigate
                to={{
                  pathname: ROUTES.LOGIN,
                }}
              />
            );
          }

          return null;
       
};

export default ProtectedRoute;

ProtectedRoute.prototype = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
};
