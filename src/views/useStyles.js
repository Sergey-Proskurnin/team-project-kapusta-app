import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    flexDirection: 'column',
    marginTop: 40,
    padding: theme.spacing(0, 2),
    background: theme.palette.primary.main

  },
  tabContent: {
    marginBottom: 40,
    padding: theme.spacing(2, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4, 0)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3, 0)
    }
  }
}));
