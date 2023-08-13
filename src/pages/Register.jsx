import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import image from '../assets/result.svg';
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
        rowSpacing={{ sm: 3 }}
        sx={{
          height: '100vh',
          p: 2,
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
            mb={2}
            color='primary.textHeaderColor'
          >
            Register
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

          <Box sx={{ textAlign: 'center', mt: 2 }}>
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

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt='' />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
