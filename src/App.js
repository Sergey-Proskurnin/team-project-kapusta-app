import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';

import Modal from 'components/Modal/Modal';

import { getCurrentUser } from './redux/auth';
import { getIsAuthenticated } from './redux/auth';
import { useDispatch, useSelector } from 'react-redux';

import routes from './routes';
import HomePageView from 'views/HomePageView';
import BalanceView from 'views/BalanceView';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
// import ReportView from 'views/ReportView';

import Button from '@material-ui/core/Button';
import Report from './components/Report';
import TestChartView from 'views/TestChartView';

// import TestWallet from 'redux/transactions/TestWallet';

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuthenticated);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, isAuth]);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
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

        {/* <PrivateRoute
          path={routes.report}
          component={ReportView}
          redirectTo={routes.home}
        /> */}
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
    </div>
  );
};

export default App;
