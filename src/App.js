import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';

import { getCurrentUser } from './redux/auth';
import { getIsAuthenticated } from './redux/auth';
import { useDispatch, useSelector } from 'react-redux';

import routes from 'routes';
import Header from 'components/Header/Header';
import HomePageView from 'views/HomePageView/HomePageView';
import BalanceView from 'views/BalanceView/BalanceView';
import ReportsView from 'views/ReportsView';

import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuthenticated);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, isAuth]);

  return (
    <>
      <Header />
      <Switch>
        <PublicRoute
          exact
          path={routes.home}
          restricted
          component={HomePageView}
          redirectTo={routes.balance}
        />
        <PrivateRoute
          path={routes.balance}
          component={BalanceView}
          redirectTo={routes.home}
        />
        <PrivateRoute
          path={routes.report}
          component={ReportsView}
          // redirectTo={routes.report}
        />
      </Switch>
    </>
  );
};

export default App;
