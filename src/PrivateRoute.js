import React from "react";
import { Route, Redirect } from "react-router-dom";

import Cookies from "universal-cookie";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const cookies = new Cookies();
  const signup = cookies.get("checkValue");
  return (
    <Route
      {...rest}
      render={(props) =>
        signup !== "false" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/notverified" />
        )
      }
    />
  );
};

export default PrivateRoute;
