import createTheme from '@mui/material/styles/createTheme';

const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: '#404041',
    },
    secondary: {
      main: '#D3D3D3',
    },
    background: {
      default: '#F3F3F3',
    },
    divider: '#D3D3D3',
    text: {
      primary: '#404041',
    },
  },
  shape: {
    borderRadius: 5,
  },
  typography: {
    h1: {
      fontSize: '3.25rem',
    },
    h2: {
      fontSize: '2.75rem',
    },
    h3: {
      fontSize: '2.375rem',
    },
    subtitle1: {
      fontSize: '1.75rem',
    },
    button: {
      fontSize: '1.25rem',
    },
    fontSize: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          padding: '0.75rem 2rem',
        },
      },
    },
  },
});

export default DefaultTheme;
