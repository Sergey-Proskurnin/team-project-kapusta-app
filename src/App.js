import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import TestAuthComponent from 'components/TestAuthComponent/TestAuthComponent';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  return (
    <div>
      <TestAuthComponent />
    </div>
  );
};

export default App;
