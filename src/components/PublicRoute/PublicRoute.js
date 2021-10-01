import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsAuthenticated } from 'redux/auth';

/**
 * - If the route is limited and the user is logged in, renders a redirect to / contacts
 * - Otherwise renders the component
 */
const PublicRoute = ({ redirectTo, children, ...routeProps }) => {
  const isAuthenticated = useSelector(state => getIsAuthenticated(state));
  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
};

// const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
//   const isAuthenticated = useSelector(state => getIsAuthenticated(state));
//   return (
//     <Route
//       {...routeProps}
//       render={props =>
//         isAuthenticated && routeProps.restricted ? (
//           <Redirect to={redirectTo} />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     />
//   );
// };

export default PublicRoute;
