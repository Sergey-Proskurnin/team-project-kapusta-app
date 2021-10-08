import React from 'react';
import { Box, Paper } from '@material-ui/core';
import { useStyles } from './useStyles';

const TabPanel = ({ children }) => {
  const classes = useStyles();

  return (
    <Box>
      <Paper className={classes.paper}>{children}</Paper>
    </Box>
  );
};

export default TabPanel;
