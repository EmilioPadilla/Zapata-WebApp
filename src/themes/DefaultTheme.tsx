import createTheme from '@mui/material/styles/createTheme';

const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: '#7c02fe',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
    },
    divider: '#8E8E8E',
    info: {
      main: '#000000',
    },
    text: {
      primary: '#000000',
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    button: {
      fontSize: '1rem',
    },
    fontSize: 16,
    fontFamily: ['DM Sans', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          padding: '0.5rem 1.75rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        text: {
          borderRadius: 0,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorTransparent: {
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '2rem 2rem 2.5rem',
        },
      },
    },
  },
});

export default DefaultTheme;
