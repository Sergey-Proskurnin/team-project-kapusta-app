import React from 'react';

import AddTransaction from 'components/BalanceComponentsTest/AddTransaction/AddTransaction';

import TabBar from 'components/TabBar';
import { useStyles } from './useStyles';
import {
  Button,
  Divider,
  Grid,
  Paper,
  Select,
  Typography,
} from '@material-ui/core';
import CalculatorIcon from 'components/SvgIcons/CalculatorIcon/CalculatorIcon';

const BalanceView = () => {
  const classes = useStyles();

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
                        <AddTransaction />
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
