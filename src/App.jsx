import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppRouter from './router/AppRouter';
import { grey, blueGrey, purple } from '@mui/material/colors';
import { Provider } from 'react-redux';
import store from './app/store';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './app/store';
import { CircularProgress } from '@mui/material';
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#860A35',
        button: '#AF2655',
        text: '#F2F2F2',
        buttonHover: '#860A35',
        textHeaderColor: '#22092C',
        drawer: '#860A35',
        drawerItemHover: '#FFDFDF',
        active: '#4C0027',
        appBar: '#AF2655',
        card: '#F2F2F2',
      },
      secondary: {
        main: '#F2F2F2',
        light: '#872341',
      },
    },
    typography: {
      fontFamily: 'Poppins',
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
