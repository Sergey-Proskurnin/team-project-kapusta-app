import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from "../src/components/Modal/Modal"
import Button from '@material-ui/core/Button';




const App = () => {
 
const [modalOpen, setModalOpen ] = useState(false);
  return (
    <div>
      hello
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
