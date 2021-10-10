import React, { useEffect, useState } from 'react';
import AddTransaction from 'components/BalanceComponentsTest/AddTransaction/AddTransaction';
import { Container } from 'components/Container';

import TransactionsList from 'components/BalanceComponentsTest/TransactionsList/TransactionsList';
import useViewport from 'services/useViewport';
import useWindowDimensions from 'hooks/useWindowDimensions'
import Summary from 'components/Summary'
import Balance from 'components/Balance';

import s from './BalanceView.module.css'

const BalanceView = () => {
  const [type, setType] = useState('income');
  const { width } = useViewport();
  const viewPort = useWindowDimensions();
  console.log(width);
  console.log(viewPort);

  const [date, setDate] = useState('');
  const startDate = new Date().toLocaleString().split(',')[0];

  useEffect(() => {
    setDate(startDate);
  }, [startDate]);

  const typeToggle = () => {
    type === 'income' ? setType('expense') : setType('income');
  };

  return (
    
    <Container>
      <Balance />
      <div>
      <button>РАСХОД</button>
      <button>ДОХОД</button>
      </div>
      <div className={s.holst} >
         <AddTransaction
        transactionType={type}
        date={date}
        // changeDate={setDate}
      />
      
      

      <div className={s.dataContainer}>

        <TransactionsList transactionType={type} />
        <Summary/>
      </div>
       </div>
    
    </Container>
  );
};

export default BalanceView;
