import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import registerImg from '../assets/register.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { registerSchema } from '../constants/validationSchemas';
import RegisterForm from '../components/RegisterForm';
import { Fingerprint } from '@mui/icons-material';
import useAuthOperations from '../hooks/useAuthOperations';

const Register = () => {
  const { register } = useAuthOperations();
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
            <img src={registerImg} alt='img' style={{ maxWidth: '300px' }} />
          </Container>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <Typography
            variant='h5'
            align='center'
            mb={2}
            color='primary.textHeaderColor'
          >
            Don&apos;t have an Account? Create one,
          </Typography>
          <Typography
            variant='h5'
            align='center'
            mb={2}
            color='primary.main'
            fontWeight='lighter'
          >
            It&apos;s quick and easy.
          </Typography>

          <Formik
            initialValues={{
              username: '',
              first_name: '',
              last_name: '',
              email: '',
              password: '',
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              // We could add new fields to the formik for password2
              // But I think this is a better way to do it for now
              console.log(values);
              register({ ...values, password2: values.password });

              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: 'center', m: 2 }}>
            <Link
              style={{
                fontFamily: 'Poppins',
                textDecoration: 'none',
                color: 'secondary.light',
                fontWeight: 'bold',
              }}
              to='/'
            >
              Already have an account? Login
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
