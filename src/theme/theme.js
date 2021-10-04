import { createTheme } from '@material-ui/core';
import breakpoints from './breakpoints';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
  breakpoints,
  direction: 'ltr',
  palette,
  typography,
  props: {
    MuiUseMediaQuery: {
      noSsr: true
    },
    MuiTextField: {
      InputLabelProps: {
        shrink: true
      },
      size: 'small',
      variant: 'outlined'
    },
    MuiSelect: {
      MenuProps: {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left'
        },
        getContentAnchorEl: null
      }
    }
  },
  overrides: {
    MuiButton: {
      root: {
        boxShadow: 'none',
        paddingTop: 12,
        paddingBottom: 12,
        whiteSpace: 'nowrap',
        borderRadius: 16,
        fontSize: 12,
        lineHeight: '14px',
        fontWeight: 700
      },
      contained: {
        backgroundColor: palette.secondary.main,
        color: palette.common.white,
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: palette.primary.main,
          boxShadow: '1px 2px 5px rgba(170, 178, 197, 0.4)'
        },
        '&$disabled': {
          backgroundColor: palette.secondary.light,
          color: palette.common.white
        }
      },
      containedSecondary: {
        padding: '7px 30px',
        color: palette.text.primary,
        backgroundColor: palette.primary.main,
        '&:hover': {
          color: palette.common.white,
          backgroundColor: palette.secondary.main,
          boxShadow: '1px 2px 5px rgba(170, 178, 197, 0.4)'
        },
        '&:focus': {
          boxShadow: 'initial'
        },
        '&$disabled': {
          color: palette.text.disabled,
          backgroundColor: palette.common.white
        }
      },
      outlined: {
        backgroundColor: palette.common.white,
        color: palette.text.primary,
        border: `2px solid ${palette.primary.light}`,
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: palette.primary.main,
          color: palette.common.white,
          boxShadow: 'none'
        },
        '&$disabled': {
          backgroundColor: '#E0E0E0',
          color: '#ffffff'
        }
      },
      text: {
        color: palette.text.primary,
        background: 'transparent',
        padding: 0,
        margin: 0,
        height: 'fit-content',
        textDecoration: 'underline',
        '&:hover': {
          background: 'transparent'
        }
      },
      sizeLarge: {
        padding: '12px 34px'
      },
      sizeSmall: {
        padding: '12px 6px',
        fontSize: 12,
        fontWeight: 400,
        lineHeight: '14px'
      },
      outlinedSizeSmall: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: '14px'
      },
      containedSizeSmall: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: '14px'
      }
    },
    MuiInputBase: {
      root: {
        backgroundColor: palette.common.white
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: '14px',
        marginBottom: 10
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: 10,
        lineHeight: '12px',
        marginTop: 4,
        '&$error': {
          color: palette.error.main
        }
      },
      error: {}
    },
    MuiTabs: {
      root: {
        minHeight: 40,
        width: 'fit-content',
        background: '#FEFEFE',
        borderRadius: '20px 20px 0px 0px'
      },
      indicator: {
        backgroundColor: '#FAFBFD'
      },
      flexContainer: {
        height: '100%'
      }
    },
    MuiTab: {
      root: {
        padding: 20,
        minWidth: 'fit-content',
        color: palette.common.black,
        fontSize: 12,
        fontWeight: 700,
        lineHeight: '14px',
        [breakpoints.up('md')]: {
          minWidth: 'fit-content'
        },
        '&$selected': {
          color: palette.secondary.main
        }
      }
    },
    MuiPaper: {
      root: {
        background: palette.common.white,
        borderRadius: 30
      },
      elevation1: {
        boxShadow: '0px 10px 60px rgba(170, 178, 197, 0.2)'
      }
    }
  }
});

export default theme;
