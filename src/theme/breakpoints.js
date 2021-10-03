import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpointsOptions = {
  keys: ['xs', 'md', 'lg'],
  values: { xs: 0, md: 772, lg: 1280 }
};

const breakpoints = createBreakpoints(breakpointsOptions);

export default breakpoints;