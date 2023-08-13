import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import image from '../assets/result.svg';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Formik } from 'formik';
import { loginSchema } from '../constants/validationSchemas';
import useAuthOperations from '../hooks/useAuthOperations';
import LoginForm from '../components/LoginForm';
import { Fingerprint } from '@mui/icons-material';

const Login = () => {

  const { login } = useAuthOperations();

  return (
    <Container maxWidth='lg'>
      <Grid
        container
        justifyContent='center'
        direction='row-reverse'
        sx={{
          height: '100vh',
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography
            variant='h3'
            color='primary'
            align='center'
            sx={{
              fontWeight: 'bold',
              letterSpacing: '0.1em',
            }}
          >
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: 'primary.button',
              m: 'auto',
              width: 40,
              height: 40,
            }}
          >
            <Fingerprint />
          </Avatar>
          <Typography
            variant='h4'
            align='center'
            mb={4}
            color='primary.textHeaderColor'
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              console.log(values);
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

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt='img' />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
