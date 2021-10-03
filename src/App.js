import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TestWallet from 'redux/transactions/TestWallet';

const App = () => {
  return (
    <div>
      hello
      <TestWallet />
    </div>
  );
};

export default App;
