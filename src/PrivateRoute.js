mport React from "react";
import { Route, Redirect } from "react-router-dom";

/**
 * If we have a logged-in user, display the component, otherwise redirect to login page.
 */
const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user
        ? <Component user={user} {...props} />
        : <Redirect to={{ pathname: "/login" }} />}
  />
);


export default PrivateRoute;