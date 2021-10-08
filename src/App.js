import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';

import Modal from 'components/Modal/Modal';

import { getCurrentUser } from './redux/auth';
import { getIsAuthenticated } from './redux/auth';
import { useDispatch, useSelector } from 'react-redux';

import routes from './routes';
import HomePageView from 'views/HomePageView';
import BalanceView from 'views/BalanceView';
import TestChartView from 'views/TestChartView';
// import ReportView from 'views/ReportView';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Button from '@material-ui/core/Button';

import { theme } from 'theme';


// import TestWallet from 'redux/transactions/TestWallet';

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuthenticated);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, isAuth]);

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <MuiThemeProvider theme={theme}>
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
          component={TestChartView}
          redirectTo={routes.report}
        />
      </Switch>
      {/* <TestAuthComponent /> */}
      {/* <Button
        color="secondary"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </Button> */}
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </MuiThemeProvider>
  );
};

export default App;
