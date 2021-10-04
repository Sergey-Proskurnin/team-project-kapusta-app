import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import TestAuthComponent from 'components/TestAuthComponent/TestAuthComponent';
import { useDispatch, useSelector } from 'react-redux';
import Modal from "components/Modal/Modal"
import Button from '@material-ui/core/Button';

// import TestWallet from 'redux/transactions/TestWallet';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      {/* <TestAuthComponent /> */}
      <Button
        color="secondary"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </Button>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
};

export default App;
