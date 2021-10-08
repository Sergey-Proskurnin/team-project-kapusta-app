import { useMediaQuery } from '@material-ui/core';

export const useBreakpoints = (key, secondKey) => {
  return useMediaQuery((theme) => {
    if (secondKey) {
      return theme.breakpoints.between(key, secondKey);
    }
    return theme.breakpoints.up(key);
  });
};
