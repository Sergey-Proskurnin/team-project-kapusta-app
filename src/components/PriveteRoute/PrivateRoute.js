import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsAuthenticated } from 'redux/auth';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise, render Redirect to / login
 */

const PrivateRoute = ({ redirectTo, children, ...routeProps }) => {
  const isAuthenticated = useSelector(state => getIsAuthenticated(state));

  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};
export default PrivateRoute;
