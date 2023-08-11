import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import image from '../assets/result.svg';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { loginSchema } from '../constants/validationSchemas';
import useLogin from '../hooks/useLoginHook';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const navigate = useNavigate();

  const { login } = useLogin();

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
          <Typography variant='h3' color='primary' align='center'>
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: 'secondary.light',
              m: 'auto',
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size='30' />
          </Avatar>
          <Typography
            variant='h4'
            align='center'
            mb={4}
            color='secondary.light'
          >
            Giriş
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
              Hesabınız yok mu?
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
