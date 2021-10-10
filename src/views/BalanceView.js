import React, { useEffect, useState } from 'react';
import Header from 'components/Header';

import AddTransaction from 'components/BalanceComponentsTest/AddTransaction/AddTransaction';

import TabBar from 'components/TabBar';
import { useStyles } from './useStyles';
import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core';
import CalculatorIcon from 'components/SvgIcons/CalculatorIcon/CalculatorIcon';
import TransactionsList from 'components/BalanceComponentsTest/Transactions.List/TransactionsList';
import useViewport from 'services/useViewport';

const BalanceView = () => {
  const classes = useStyles();
  const [type, setType] = useState('income');
  const { width } = useViewport();
  console.log(width);

  const [date, setDate] = useState('');
  const startDate = new Date().toLocaleString().split(',')[0];

  console.log(startDate);

  useEffect(() => {
    setDate(startDate);
  }, []);

  const typeToggle = () => {
    type === 'income' ? setType('expense') : setType('income');
  };

  return (
    <>
      <Grid container className={classes.wrapper}>
        <TabBar
          tabs={[
            {
              label: 'РАСХОД',
              tabContent: (
                <Grid
                  container
                  direction="column"
                  className={classes.tabContent}
                >
                  <Grid item>
                    <Grid container spacing={2}>
                      <Grid item>
                        <AddTransaction
                          transactionType={type}
                          date={date}
                          changeDate={setDate}
                        />
                        <TransactionsList transactionType={type} />
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Paper></Paper>
                    </Grid>
                  </Grid>
                </Grid>
              ),
            },
            {
              label: 'ДОХОД',
              tabContent: (
                <Grid
                  container
                  direction="column"
                  className={classes.tabContent}
                ></Grid>
              ),
            },
          ]}
        />
      </Grid>
    </>
  );
};

export default BalanceView;
