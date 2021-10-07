import createPalette from '@material-ui/core/styles/createPalette';

const paletteOptions = {
  primary: {
    main: '#F5F6FB',
    light: '#F6F7FB',
  },
  secondary: {
    main: '#FF751D',
    light: '#FFDAC0',
  },
  text: {
    primary: '#52555F',
    secondary: '#A6ABB9',
    disabled: '#C7CCDC',
  },
  error: {
    main: '#E7192E',
  },
  common: {
    white: '#ffffff',
    black: '#000000',
  },
  success: {
    main: '#407946',
  },
  modalBg: {
    main: 'linear-gradient(117.84deg, #1D346A 2.84%, #031634 67.28%)',
  },
};

const palette = createPalette(paletteOptions);

export default palette;
