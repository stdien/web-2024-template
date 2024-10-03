import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { RecipeList } from './components/RecipeList';
import { Container, Typography } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff4081',
    },
    secondary: {
      main: '#00e5ff',
    },
    background: {
      default: '#1a1a1a',
      paper: '#2c2c2c',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#ff4081',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h1" align="center" gutterBottom>
          Фанки Рецепты
        </Typography>
        <RecipeList />
      </Container>
    </ThemeProvider>
  );
};

export default App;
