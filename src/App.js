import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  getFetchigCurrentUser,
  getCurrentToken,
  getCurrentUser,
} from './redux/auth';
import routes from 'routes';
import Header from 'components/Header/Header';
import OnLoader from 'components/OnLoader';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomePageView = lazy(() =>
  import('views/HomePageView/HomePageView' /*webpackChunkName: "home-view" */),
);
const BalanceView = lazy(() =>
  import('views/BalanceView/BalanceView' /*webpackChunkName: "balance-view" */),
);
const ReportsView = lazy(() =>
  import('views/ReportsView' /*webpackChunkName: "reports-view" */),
);
const DevelopersView = lazy(() =>
  import(
    'views/DevelopersView/DevelopersView' /*webpackChunkName: "developers-view" */
  ),
);

const App = () => {
  const dispatch = useDispatch();

  const isFetchigCurrentUser = useSelector(state =>
    getFetchigCurrentUser(state),
  );

  const onToken = useSelector(getCurrentToken);
  
  useEffect(() => {
    if (onToken) {
      dispatch(getCurrentUser());
    }
    
  }, [dispatch, onToken]);

  return (
    <>
      <Header />
      <Suspense fallback={<OnLoader />}>
        {isFetchigCurrentUser ? (
          <OnLoader />
        ) : (
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
              redirectTo={routes.home}
            />
            <PublicRoute
              path={routes.developers}
              component={DevelopersView}
              redirectTo={routes.home}
            />
          </Switch>
        )}
      </Suspense>
    </>
  );
};

export default App;
