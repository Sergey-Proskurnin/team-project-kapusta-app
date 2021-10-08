import React from 'react';
import AppBar from 'components/AppBar';
import AddTransaction from 'components/BalanceComponentsTest/AddTransaction/AddTransaction';
const BalanceView = () => {
  return (
    <>
      <AppBar />
      <div style={{ padding: '100px 20px', textAlign: 'center', color: 'Red' }}>
        <h1>Balance Page</h1>
        <AddTransaction />
      </div>
    </>
  );
};

export default BalanceView;
