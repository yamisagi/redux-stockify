import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import loginImg from '../assets/login.png';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Formik } from 'formik';
import { loginSchema } from '../constants/validationSchemas';
import useAuthOperations from '../hooks/useAuthOperations';
import LoginForm from '../components/LoginForm';
import { Fingerprint } from '@mui/icons-material';
import { useEffect } from 'react';

const Login = () => {
  const { login } = useAuthOperations();

  return (
    <Container maxWidth='lg'>
      <Grid
        container
        justifyContent='center'
        direction='row-reverse'
        sx={{
          height: '95vh',
          p: 5,
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant='h3'
            color='primary'
            align='center'
            sx={{
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              color: 'primary.textHeaderColor',
            }}
          >
            Redux Stockify
          </Typography>
        </Grid>
        <Grid item xs={10} sm={8} md={9}>
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <img src={loginImg} alt='img' style={{ maxWidth: '300px' }} />
          </Container>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <Typography
            variant='h5'
            align='left'
            mb={4}
            color='primary.textHeaderColor'
          >
            Hello, Guest! <br />
            Welcome to Redux Stockify,
            <br />
            Before Continue, Please Sign in First.
          </Typography>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              login(values);
              actions.setSubmitting(false);
              actions.resetForm();
            }}
            component={(props) => <LoginForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Link
              style={{
                fontFamily: 'Poppins',
                textDecoration: 'none',
                color: 'secondary.light',
                fontWeight: 'bold',
              }}
              to='/register'
            >
              Don&#39;t have an account? Register
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
