import React from 'react';
import { Suspense, lazy, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginView from 'views/LoginView';
import RegisterView from 'views/RegisterView';
import AppBar from 'components/AppBar';
import OnLoader from 'components/OnLoader';
import HomeView from 'views/HomeView';

import {
  getCurrentUser,
  getFetchigCurrentUser,
  getCurrentToken,
} from 'redux/auth';

function AppTest() {
  const isFetchigCurrentUser = useSelector(state =>
    getFetchigCurrentUser(state),
  );

  const isToken = useSelector(state => getCurrentToken(state));

  const dispatch = useDispatch();

  useEffect(() => {
    isToken && dispatch(getCurrentUser());
  }, [dispatch, isToken]);

  return (
    <div>
      <AppBar />
      {isFetchigCurrentUser ? (
        <OnLoader />
      ) : (
        <Suspense fallback={<OnLoader />}>
          <Switch>
            <Route exact path={'/'} component={HomeView} />
            <Route exact path={'/register'} component={RegisterView} />
            <Route path={'/login'} component={LoginView} />
            <Redirect to={'/login'} />
          </Switch>
        </Suspense>
      )}
    </div>
  );
}

export default AppTest;
