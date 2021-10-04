import createTypography from '@material-ui/core/styles/createTypography';
import palette from './palette';

const BASE_FONT_FAMILY = 'Roboto, normal';

const typography = createTypography(palette, {
  htmlFontSize: 16,
  fontFamily: BASE_FONT_FAMILY,
  fontSize: 14,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontWeightBLack: 900,
  
  h1: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '19px'
  },
  h2: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '16px'
  },
  h3: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 700,
    fontSize: 12,
    lineHeight: '14px'
  },
  h4: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    fontSize: 10,
    lineHeight: '12px'
  },
  subtitle1: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '14px'
  },
  subtitle2: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 900,
    fontSize: 12,
    lineHeight: '14px'
  },
  body1: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '16px'
  },
  body2: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 500,
    fontSize: 12,
    lineHeight: '14px'
  }
});

export default typography;
