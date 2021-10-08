import React from 'react';
import Header from 'components/Header';

import AddTransaction from 'components/BalanceComponentsTest/AddTransaction/AddTransaction';

import TabBar from 'components/TabBar';
import { useStyles } from './useStyles';
import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core';
import CalculatorIcon from 'components/SvgIcons/CalculatorIcon/CalculatorIcon';

const BalanceView = () => {
  const classes = useStyles();

  return (
    <>
      <div style={{ padding: '100px 20px', textAlign: 'center', color: 'Red' }}>
        <h1>Balance Page</h1>
        <AddTransaction />
      </div>
      <CalculatorIcon />
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
                      <Button variant="contained" color="secondary">
                        <Typography variant="h3">ВВОД</Typography>
                      </Button>
                      <Button variant="outlined" color="inherit">
                        <Typography variant="h3">ОЧИСТИТЬ</Typography>
                      </Button>
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
