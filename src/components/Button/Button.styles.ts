import { createUseStyles } from 'react-jss'
import { themeType } from '../../theme/theme.types'
const useStylesFromThemeFunction = createUseStyles((theme: themeType) => ({
  buttonBase: {
    borderRadius: 5,
    borderStyle: 'solid',
    padding: '0.5rem 1.2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.3rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-out',
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '0.8'
    },
    '&>svg': {
      width: '1rem',
      height: '1rem'
    }
  },
  // variants
  buttonContained: {
    border: 'none',
    boxShadow: `2px 2px 3px ${theme.colors.default.dark}`,
    '&$buttonDefault': {
      backgroundColor: theme.colors.default.main,
      color: theme.colors.black.main,
      '&:hover,&:focus': {
        backgroundColor: theme.colors.default.dark
      }
    },
    '&$buttonPrimary': {
      backgroundColor: theme.colors.primary.main,
      color: theme.colors.white.main,
      '&:hover,&:focus': {
        backgroundColor: theme.colors.primary.dark
      }
    },
    '&$buttonSecondary': {
      backgroundColor: theme.colors.secondary.main,
      color: theme.colors.white.main,
      '&:hover,&:focus': {
        backgroundColor: theme.colors.secondary.dark
      }
    },
    '&$buttonDanger': {
      backgroundColor: theme.colors.danger.main,
      color: theme.colors.white.main,
      '&:hover,&:focus': {
        backgroundColor: theme.colors.danger.dark
      }
    }
  },
  buttonOutlined: {
    borderWidth: '1px',
    backgroundColor: 'transparent',
    boxShadow: `2px 2px 3px ${theme.colors.default.dark}`,
    '&$buttonDefault': {
      borderColor: theme.colors.default.dark,
      color: theme.colors.default.dark,
      '&:hover,&:focus': {
        backgroundColor: theme.colors.default.light
      }
    },
    '&$buttonPrimary': {
      borderColor: theme.colors.primary.main,
      color: theme.colors.primary.main,
      '&:hover,&:focus': {
        backgroundColor: theme.colors.primary.light
      }
    },
    '&$buttonSecondary': {
      borderColor: theme.colors.secondary.main,
      color: theme.colors.secondary.main,
      '&:hover,&:focus': {
        backgroundColor: theme.colors.secondary.light
      }
    },
    '&$buttonDanger': {
      borderColor: theme.colors.danger.main,
      color: theme.colors.danger.main,
      '&:hover,&:focus': {
        backgroundColor: theme.colors.danger.light
      }
    }
  },
  buttonText: {
    border: 'none',
    backgroundColor: 'transparent',
    boxShadow: 'none !important',
    '&$buttonDefault:hover,&$buttonDefault:focus': {
      backgroundColor: theme.colors.default.light
    },
    '&$buttonPrimary:hover,&$buttonPrimary:focus': {
      backgroundColor: theme.colors.primary.light
    },
    '&$buttonSecondary:hover,&$buttonSecondary:focus': {
      backgroundColor: theme.colors.secondary.light
    },
    '&$buttonDanger:hover,&$buttonDanger:focus': {
      backgroundColor: theme.colors.danger.light
    }
  },
  // sizes
  buttonSm: {
    fontSize: '0.8rem'
  },
  buttonMd: {
    fontSize: '1rem'
  },
  buttonLg: {
    fontSize: '1.2rem'
  },
  // colors
  buttonDefault: {
    color: theme.colors.default.dark
  },
  buttonPrimary: {
    color: theme.colors.primary.main
  },
  buttonSecondary: {
    color: theme.colors.secondary.main
  },
  buttonDanger: {
    color: theme.colors.danger.main
  },
  buttonNoShadow: {
    boxShadow: 'none !important'
  }
}))
export default useStylesFromThemeFunction
