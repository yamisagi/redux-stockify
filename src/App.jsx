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
        main: grey['900'],
        button: purple['600'],
        text: grey['50'],
        buttonHover: purple['800'],
        textHeaderColor: purple['800'],
        drawer: purple['300'],
        drawerItemHover: purple['900'],
        active: purple['800'],
      },
      secondary: {
        main: blueGrey['900'],
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
