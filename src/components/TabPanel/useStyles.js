import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  paper: {
    borderRadius: '0px 0px 30px 30px',
    [theme.breakpoints.up('md')]: {
      borderRadius: '0px 30px 30px 30px',
    },
  },
}));
