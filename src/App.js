import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';

import { getCurrentUser } from './redux/auth';
import { getIsAuthenticated } from './redux/auth';
import { useDispatch, useSelector } from 'react-redux';

import routes from './routes';
import HomeView from 'views/HomeView';
import BalanceView from 'views/BalanceView';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import ReportView from 'views/ReportView';

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuthenticated);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, isAuth]);

  return (
    <>
      <Switch>
        <PublicRoute
          exact
          path={routes.home}
          restricted
          component={HomeView}
          redirectTo={routes.balance}
        />
        <PrivateRoute
          path={routes.balance}
          component={BalanceView}
          redirectTo={routes.home}
        />
        <PrivateRoute
          path={routes.report}
          component={ReportView}
          redirectTo={routes.home}
        />
      </Switch>
    </>
  );
};

export default App;
