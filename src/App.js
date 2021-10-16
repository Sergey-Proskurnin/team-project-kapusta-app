import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';

import { getCurrentUser } from './redux/auth';
import { getFetchigCurrentUser, } from './redux/auth';
import { useDispatch, useSelector } from 'react-redux';

import routes from 'routes';
import Header from 'components/Header/Header';
import HomePageView from 'views/HomePageView/HomePageView';
// import BalanceView from 'views/BalanceView/BalanceView';
// import ReportsView from 'views/ReportsView';
import OnLoader from 'components/OnLoader';

import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

// const HomePageView = lazy(() =>
//   import('views/HomePageView/HomePageView' /*webpackChunkName: "home-view" */),
// );
const BalanceView = lazy(() =>
  import('views/BalanceView/BalanceView' /*webpackChunkName: "balance-view" */),
);
const ReportsView = lazy(() =>
  import('views/ReportsView' /*webpackChunkName: "reports-view" */),
);

const App = () => {
  const dispatch = useDispatch();
  
  const isFetchigCurrentUser = useSelector(state =>
    getFetchigCurrentUser(state),
  );

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
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
        <Suspense fallback={<OnLoader />}>
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
        </Suspense>
      </Switch>
      )  
    }
   </>
  );
};

export default App;
